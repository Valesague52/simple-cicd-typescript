function subtract(a: number, b: number): number {
  return a - b;
}
(window as unknown as { subtract: typeof subtract }).subtract = subtract;