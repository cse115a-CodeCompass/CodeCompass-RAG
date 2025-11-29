// Main file that calls functions from utils.c
// Used to test CALLS edge detection across files

#include <stdio.h>
#include "utils.h"

int compute_sum(int numbers[], int count) {
    int total = 0;
    for (int i = 0; i < count; i++) {
        total = add(total, numbers[i]);
    }
    return total;
}

int compute_product(int numbers[], int count) {
    int result = 1;
    for (int i = 0; i < count; i++) {
        result = multiply(result, numbers[i]);
    }
    return result;
}

void process_numbers(int numbers[], int count) {
    int sum = compute_sum(numbers, count);
    int product = compute_product(numbers, count);

    printf("Sum: %.2f\n", format_number((double)sum));
    printf("Product: %.2f\n", format_number((double)product));
}

void use_calculator(void) {
    Calculator calc;
    calculator_init(&calc, "MyCalc");

    int a = calculator_add(&calc, 5, 3);
    int b = calculator_subtract(&calc, 10, 4);

    printf("Results: %d, %d\n", a, b);

    int count;
    int* history = calculator_get_history(&calc, &count);
    printf("History: ");
    for (int i = 0; i < count; i++) {
        printf("%d ", history[i]);
    }
    printf("\n");
}

int main(void) {
    int numbers[] = {1, 2, 3, 4, 5};
    int count = sizeof(numbers) / sizeof(numbers[0]);

    process_numbers(numbers, count);
    use_calculator();

    return 0;
}
