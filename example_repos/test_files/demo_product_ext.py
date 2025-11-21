# demo_product_ext.py
from __future__ import annotations

from product import Product, ShoppingCart


class PremiumProduct(Product):
    """
    A richer Product that:
    - Overrides apply_discount and delegates to super()
    - Reuses Product.is_in_stock / reduce_stock
    - Adds properties, class/staticmethods that reference Product
    """

    def __init__(
        self,
        product_id: int,
        name: str,
        price: float,
        stock_quantity: int,
        category: str,
        *,
        tags: list[str] | None = None,
        loyalty_tier: str = "bronze",
    ) -> None:
        super().__init__(product_id, name, price, stock_quantity, category)
        self.tags = tags or []
        self.loyalty_tier = loyalty_tier

    @property
    def net_price(self) -> float:
        """Current price after the stored discount."""
        return self.apply_discount(self.discount_percentage)

    def apply_discount(self, percentage: float) -> float:  # override + super()
        # loyalty adds a sweetener
        if self.loyalty_tier == "gold":
            percentage += 5.0
        if self.loyalty_tier == "silver":
            percentage += 2.5
        # clamp and delegate to base Product.apply_discount
        percentage = max(0.0, min(percentage, 60.0))
        return super().apply_discount(percentage)

    def ensure_stock(self, qty: int) -> bool:
        """Use base Product APIs to validate and deduct stock."""
        if not self.is_in_stock():
            return False
        if self.stock_quantity < qty:
            return False
        self.reduce_stock(qty)
        return True

    def bundle_with(self, other: Product) -> ProductBundle:
        """Create a bundle that includes this item and another Product."""
        return ProductBundle([self, other])

    @classmethod
    def from_dict(cls, d: dict) -> "PremiumProduct":
        return cls(
            d["id"], d["name"], float(d["price"]), int(d.get("stock", 0)), d.get("category", "misc"),
            tags=list(d.get("tags", [])), loyalty_tier=d.get("tier", "bronze")
        )

    @staticmethod
    def is_eligible(p: Product) -> bool:
        """Reference Product in a staticmethod for extra symbol edges."""
        return isinstance(p, Product) and p.price >= 10.0


class ProductBundle:
    """A tiny composite around multiple Products that calls back into Product APIs."""

    def __init__(self, items: list[Product]) -> None:
        self.items: list[Product] = list(items)
        self.bundle_discount_pct: float = 0.0

    def add(self, p: Product) -> None:
        self.items.append(p)

    def apply_bundle_discount(self, pct: float) -> float:
        """Call Product.apply_discount on every item (many LSP refs)."""
        self.bundle_discount_pct = pct
        total = 0.0
        for p in self.items:
            total += p.apply_discount(pct)
        return total

    def all_in_stock(self, qty_each: int = 1) -> bool:
        """Use Product.is_in_stock + reduce_stock across the bundle."""
        for p in self.items:
            if not p.is_in_stock() or p.stock_quantity < qty_each:
                return False
        for p in self.items:
            p.reduce_stock(qty_each)
        return True

    def categories(self) -> set[str]:
        return {p.category for p in self.items}

    def total_price(self) -> float:
        return sum(p.price for p in self.items)


# ------- Extra helpers that reference Product in annotations & body ---------
def cheapest(products: list[Product]) -> Product | None:
    try:
        return min(products, key=lambda p: p.price)
    except ValueError:
        return None


def promote(p: Product, pct: float) -> float:
    """One more call site to Product.apply_discount."""
    return p.apply_discount(pct)


def gift_wrap(p: Product) -> Product:
    """Tag a product; returns the same instance for chaining."""
    if hasattr(p, "tags"):
        p.tags.append("gift-wrap")
    return p


# ----------------------------- Demo run ------------------------------------
def main() -> None:
    # Base products
    book = Product(10, "Python 101", 29.95, 20, "books")
    apples = Product(11, "Organic Apples", 3.49, 120, "grocery")

    # Premium products (subclass of Product)
    cable = PremiumProduct(12, "USB-C Cable", 9.99, 50, "electronics", loyalty_tier="silver")
    headset = PremiumProduct(13, "Noise-Cancel Headset", 149.0, 8, "electronics", loyalty_tier="gold", tags=["audio"])

    # Direct calls into Product API via subclass instances
    cable.apply_discount(10.0)          # super().apply_discount under the hood
    headset.apply_discount(12.5)
    cable.ensure_stock(2)               # calls is_in_stock + reduce_stock
    headset.ensure_stock(1)

    # Bundle that repeatedly calls Product methods
    bundle = cable.bundle_with(headset)
    bundle.add(book)
    _ = bundle.apply_bundle_discount(5.0)
    _ = bundle.all_in_stock(1)

    # Helpers that reference Product
    pmin = cheapest([book, apples, cable, headset])
    if pmin:
        promote(pmin, 3.0)
        gift_wrap(pmin)

    # Cart flow (cross-file refs; cart reads Product fields and calls is_in_stock internally)
    cart = ShoppingCart(user_id="u-42")
    cart.add_item(book, 1)
    cart.add_item(cable, 2)
    cart.add_item(headset, 1)
    cart.calculate_total()
    print(cart.generate_summary(region="US-CA", currency="USD"))

    # Use Product attributes again to drive more refs
    for p in [book, apples, cable, headset]:
        print(f"{p.product_id}: {p.name} | {p.category} | price={p.price:.2f} | stock={p.stock_quantity} | disc={p.discount_percentage}%")

    # Another Product call from outside the class
    try:
        apples.apply_discount(150.0)  # error path
    except ValueError:
        pass


if __name__ == "__main__":
    main()