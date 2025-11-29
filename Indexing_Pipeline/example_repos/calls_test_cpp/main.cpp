// Main file that calls functions from utils.cpp
// Used to test CALLS edge detection across files

#include <iostream>
#include <vector>
#include "utils.hpp"

int computeSum(const std::vector<int>& numbers) {
    int total = 0;
    for (int n : numbers) {
        total = utils::add(total, n);
    }
    return total;
}

int computeProduct(const std::vector<int>& numbers) {
    int result = 1;
    for (int n : numbers) {
        result = utils::multiply(result, n);
    }
    return result;
}

void processNumbers(const std::vector<int>& numbers) {
    int sum = computeSum(numbers);
    int product = computeProduct(numbers);

    // std::cout << "Sum: " << utils::formatNumber(sum) << std::endl;
    // std::cout << "Product: " << utils::formatNumber(product) << std::endl;
}

void useCalculator() {
    utils::Calculator calc("MyCalc");

    int a = calc.add(5, 3);
    int b = calc.subtract(10, 4);

    std::cout << "Results: " << a << ", " << b << std::endl;

    std::cout << "History: ";
    for (int val : calc.getHistory()) {
        std::cout << val << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    processNumbers(numbers);
    useCalculator();

    return 0;
}
