/**
 * Unit tests for divide()
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  it("divide enteros positivos", () => {
    expect(window.divide(10, 2)).toBe(5);
  });

  it("maneja cero en el numerador", () => {
    expect(window.divide(0, 5)).toBe(0);
  });

  it("maneja números negativos", () => {
    expect(window.divide(-10, 2)).toBe(-5);
    expect(window.divide(-10, -2)).toBe(5);
  });

  it("lanza un error en el caso límite de división por cero", () => {
    expect(() => window.divide(10, 0)).toThrow("Cannot divide by zero");
  });
});

export {};