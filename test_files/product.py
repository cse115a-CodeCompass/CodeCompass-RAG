"""
Product data model for the e-commerce system.
Handles product information including pricing, inventory, and categories.
"""

class Product:
    """Represents a product in the inventory system."""
    
    def __init__(self, product_id, name, price, stock_quantity, category):
        self.product_id = product_id
        self.name = name
        self.price = price
        self.stock_quantity = stock_quantity
        self.category = category
        self.discount_percentage = 0
    
    def apply_discount(self, percentage):
        """Apply a discount to the product.
        
        Args:
            percentage (float): Discount percentage (0-100)
        
        Returns:
            float: New discounted price
        """
        if 0 <= percentage <= 100:
            self.discount_percentage = percentage
            return self.price * (1 - percentage / 100)
        raise ValueError("Discount must be between 0 and 100")
    
    def is_in_stock(self):
        """Check if product is available in stock."""
        return self.stock_quantity > 0
    
    def reduce_stock(self, quantity):
        """Reduce stock quantity after a purchase."""
        if quantity > self.stock_quantity:
            raise ValueError("Insufficient stock")
        self.stock_quantity -= quantity


# File: services/cart.py
"""
Shopping cart service for managing user purchases.
"""

class ShoppingCart:
    """Manages items in a user's shopping cart."""
    
    def __init__(self, user_id):
        self.user_id = user_id
        self.items = []
        self.total = 0
    
    def add_item(self, product, quantity):
        """Add a product to the cart.
        
        Args:
            product (Product): Product to add
            quantity (int): Number of items to add
        """
        if not product.is_in_stock():
            raise ValueError(f"Product {product.name} is out of stock")
        
        item = {
            'product': product,
            'quantity': quantity,
            'price': product.price
        }
        self.items.append(item)
        self.calculate_total()
    
    def remove_item(self, product_id):
        """Remove a product from the cart by ID."""
        self.items = [item for item in self.items 
                      if item['product'].product_id != product_id]
        self.calculate_total()
    
    def calculate_total(self):
        """Calculate the total price of all items in cart."""
        self.total = sum(
            item['price'] * item['quantity'] 
            for item in self.items
        )
        return self.total
    
    def apply_promo_code(self, code):
        """Apply promotional discount code.
        
        Args:
            code (str): Promo code to apply
            
        Returns:
            float: New total after discount
        """
        discount_map = {
            'SAVE10': 0.10,
            'SAVE20': 0.20,
            'FREESHIP': 0.05
        }
        
        if code in discount_map:
            discount = discount_map[code]
            self.total *= (1 - discount)
            return self.total
        raise ValueError("Invalid promo code")

