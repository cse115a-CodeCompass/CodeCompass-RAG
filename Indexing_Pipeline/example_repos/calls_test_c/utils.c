// Utility functions implementation for testing CALLS edge detection

#include "utils.h"
#include <string.h>
#include <math.h>

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

double format_number(double n) {
    return round(n * 100) / 100;
}

void calculator_init(Calculator* calc, const char* name) {
    strncpy(calc->name, name, sizeof(calc->name) - 1);
    calc->name[sizeof(calc->name) - 1] = '\0';
    calc->history_count = 0;
}

int calculator_add(Calculator* calc, int a, int b) {
    int result = add(a, b);
    if (calc->history_count < 100) {
        calc->history[calc->history_count++] = result;
    }
    return result;
}

int calculator_subtract(Calculator* calc, int a, int b) {
    int result = a - b;
    if (calc->history_count < 100) {
        calc->history[calc->history_count++] = result;
    }
    return result;
}

int* calculator_get_history(Calculator* calc, int* count) {
    *count = calc->history_count;
    return calc->history;
}
