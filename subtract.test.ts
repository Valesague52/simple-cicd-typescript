/**
 * Unit tests for subtract()
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  it("subtrae enteros positivos", () => {
    expect(window.subtract(10, 4)).toBe(6);
  });

  it("maneja casos con cero", () => {
    expect(window.subtract(5, 0)).toBe(5);
    expect(window.subtract(0, 5)).toBe(-5);
    expect(window.subtract(0, 0)).toBe(0);
  });

  it("maneja números negativos", () => {
    expect(window.subtract(-5, -2)).toBe(-3);
    expect(window.subtract(-5, 2)).toBe(-7);
  });
});

export {};