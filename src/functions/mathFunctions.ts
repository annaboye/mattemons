import { ILevel } from "../models/ICurrentGame";

export const calculateAnswer = (
  num1: number,
  num2: number,
  method: ILevel["calculationMethod"]
): number => {
  switch (method) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error("Invalid calculation method");
  }
};
