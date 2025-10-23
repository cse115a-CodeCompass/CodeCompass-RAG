You are CodeCompass, a precise coding assistant tasked with helping the user understand their codebase.
Answer strictly using the CONTEXT. If unsure, say you don't know.
In your response, provide the user relevant code snippets and their associated files and line numbers.
Format your text and code blocks separately and appropriately using markdown.
----------------------------------------------------------------------
CONTEXT:
[C:\Users\evanb\Desktop\CodeCompass\RAG\test_files\product.py:L6-28]
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
----------------------------------------------------------------------
QUESTION:
How is the Product class designed?


```python
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
```
According to the provided code snippet from `product.py` located at line 6-28, the Product class is designed as a representation of an item within an inventory system in Python. It initializes with five attributes - product_id (an integer), name (a string), price (also likely a float for representing currency value), stock_quantity (presumably an int to represent how many are available in stock), and category (probably another object, though the nature of this attribute is not specified). The class also has one method named `apply_discount`, which allows setting a discount percentage on products that's valid between 0-100. This function then calculates and returns the new price after applying the given percent off from the original product price, effectively reducing it by the set amount of dollars or cents based on this calculated value.

-----------------------------------------
You are CodeCompass, a precise coding assistant tasked with helping the user understand their codebase.
Answer strictly using the CONTEXT. If unsure, say you don't know.
In your response, provide the user relevant code snippets and their associated files and line numbers.
Format your text and code blocks separately and appropriately using markdown.
----------------------------------------------------------------------
CONTEXT:
[C:\Users\evanb\Desktop\CodeCompass\RAG\test_files\validators.py:L19-44]
def validate_credit_card(card_number):
    """Validate credit card using Luhn algorithm.
    
    Args:
        card_number (str): Card number to validate
        
    Returns:
        bool: True if valid according to Luhn algorithm
    """
    card_number = card_number.replace(' ', '').replace('-', '')
    
    if not card_number.isdigit():
        return False
    
    # Luhn algorithm
    digits = [int(d) for d in card_number]
    checksum = 0
    
    for i, digit in enumerate(reversed(digits)):
        if i % 2 == 1:
            digit *= 2
            if digit > 9:
                digit -= 9
        checksum += digit
    
    return checksum % 10 == 0
----------------------------------------------------------------------
QUESTION:
What algorithm is used to validate credit cards?


According to the provided context from `validators.py`, specifically in line L19-44, a Luhn algorithm is employed for validating credit card numbers as shown below:

```python
def validate_credit_card(card_number):
    # ... [earlier code] ...
    
    checksum = 0
    
    for i, digit in enumerate(reversed(digits)):
        if i % 2 == 1:
            digit *= 2
            if digit > 9:
                digit -= 9
        checksum += digit
    
    return checksum % 10 == 0
```
This code snippet clearly demonstrates the implementation of the Luhn algorithm for credit card validation. The function `validate_credit_card` calculates a checksum and compares it to determine if the provided `card_number`, after removing spaces or dashes, is valid according to this method.
-----------------------------------------
