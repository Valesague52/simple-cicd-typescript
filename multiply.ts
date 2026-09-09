function multiply(a: number, b: number): number {
  return a * b;
}
(window as unknown as { multiply: typeof multiply }).multiply = multiply;