// Utility functions header for testing CALLS edge detection
#ifndef UTILS_H
#define UTILS_H

// Math functions
int add(int a, int b);
int multiply(int a, int b);
double format_number(double n);

// Calculator struct
typedef struct {
    char name[64];
    int history[100];
    int history_count;
} Calculator;

void calculator_init(Calculator* calc, const char* name);
int calculator_add(Calculator* calc, int a, int b);
int calculator_subtract(Calculator* calc, int a, int b);
int* calculator_get_history(Calculator* calc, int* count);

#endif
