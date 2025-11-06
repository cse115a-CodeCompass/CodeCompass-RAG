/**
 * Demo TypeScript file to test multi-language support
 */

// Top-level function
export function calculateTotal(prices: number[]): number {
    return prices.reduce((sum, price) => sum + price, 0);
}

// Arrow function
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

// Class with methods
export class ProductCatalog {
    private products: Map<string, number>;

    constructor() {
        this.products = new Map();
    }

    addProduct(name: string, price: number): void {
        this.products.set(name, price);
    }

    getPrice(name: string): number | undefined {
        return this.products.get(name);
    }

    getTotalValue(): number {
        const prices = Array.from(this.products.values());
        return calculateTotal(prices);
    }
}

// Another class
class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    displayInfo(): string {
        return greet(this.name);
    }
}
