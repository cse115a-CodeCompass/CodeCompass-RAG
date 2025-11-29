// Utility functions header for testing CALLS edge detection
#ifndef UTILS_HPP
#define UTILS_HPP

#include <string>
#include <vector>

namespace utils {

// Free functions
int add(int a, int b);
int multiply(int a, int b);
std::string formatNumber(double n);

// Calculator class
class Calculator {
public:
    explicit Calculator(const std::string& name);

    int add(int a, int b);
    int subtract(int a, int b);

    const std::vector<int>& getHistory() const;
    const std::string& getName() const;

private:
    std::string name_;
    std::vector<int> history_;
};

} // namespace utils

#endif
