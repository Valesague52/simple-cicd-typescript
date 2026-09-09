/**
 * Returns the division of two numbers.
 * @throws {Error} If dividing by zero.
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

(window as unknown as { divide: typeof divide }).divide = divide;