import {
  calculateAnswer,
  generateRandomNumber,
  generateRandomNumberInRange,
} from "../functions/mathFunctions";
import { describe, test, expect } from "@jest/globals";

describe("calculateAnswer", () => {
  test("adds two numbers correctly", () => {
    const result = calculateAnswer(1, 2, "+");
    expect(result).toBe(3);
  });

  test("subtracts two numbers correctly", () => {
    const result = calculateAnswer(4, 2, "-");
    expect(result).toBe(2);
  });

  test("multiplies two numbers correctly", () => {
    const result = calculateAnswer(3, 2, "*");
    expect(result).toBe(6);
  });

  test("divides two numbers correctly", () => {
    const result = calculateAnswer(6, 2, "/");
    expect(result).toBe(3);
  });

  test("throws error if invalid calculation method", () => {
    expect(() => calculateAnswer(1, 2, "%")).toThrowError(
      "Invalid calculation method"
    );
  });
});

describe("generateRandomNumber", () => {
  test("should generate a random number within the specified range", () => {
    const max = 100;
    const result = generateRandomNumber(max);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(max);
  });
});

describe("generateRandomNumberInRange", () => {
  test("should generate a random number within the specified range", () => {
    const min = 10;
    const max = 20;
    const result = generateRandomNumberInRange(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  test("should generate the number 0 if min and max are both 0", () => {
    const result = generateRandomNumberInRange(0, 0);

    expect(result).toBe(0);
  });

  test("should generate a random number within the range (0, 10) if min is 0 and max is 10", () => {
    const min = 0;
    const max = 10;
    const result = generateRandomNumberInRange(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
