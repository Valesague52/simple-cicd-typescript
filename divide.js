"use strict";
/**
 * Returns the division of two numbers.
 * @throws {Error} If dividing by zero.
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
window.divide = divide;
