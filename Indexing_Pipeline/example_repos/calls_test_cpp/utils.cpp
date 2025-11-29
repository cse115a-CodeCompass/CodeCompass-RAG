// Utility functions implementation for testing CALLS edge detection

#include "utils.hpp"
#include <sstream>
#include <iomanip>

namespace utils {

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}

std::string formatNumber(double n) {
    std::ostringstream oss;
    oss << std::fixed << std::setprecision(2) << n;
    return oss.str();
}

Calculator::Calculator(const std::string& name)
    : name_(name)
    , history_()
{
}

int Calculator::add(int a, int b) {
    int result = utils::add(a, b);  // Calls the free function
    history_.push_back(result);
    return result;
}

int Calculator::subtract(int a, int b) {
    int result = a - b;
    history_.push_back(result);
    return result;
}

const std::vector<int>& Calculator::getHistory() const {
    return history_;
}

const std::string& Calculator::getName() const {
    return name_;
}

} // namespace utils
