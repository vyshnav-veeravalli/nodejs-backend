const add = (a, b) => a+b;
const subtract = (a, b) => a-b;
const mul = (a, b) => a*b;
const div = (a, b) => b !== 0 ? a/b: "cannot divide by zero";

module.exports = {
    add,
    subtract,
    mul,
    div,
}