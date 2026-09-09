/**
 * Unit tests for multiply()
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  it("multiplica enteros positivos", () => {
    expect(window.multiply(4, 3)).toBe(12);
  });

  it("maneja casos con cero", () => {
    expect(window.multiply(7, 0)).toBe(0);
    expect(window.multiply(0, 7)).toBe(0);
    expect(window.multiply(0, 0)).toBe(0);
  });

  it("maneja números negativos", () => {
    expect(window.multiply(-4, 3)).toBe(-12);
    expect(window.multiply(-4, -3)).toBe(12);
  });
});

export {};