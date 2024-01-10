import { ICurrentGame, ILevel } from "../models/ICurrentGame";
import { IQuestiondata } from "../models/IQuestionData";

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

export const generateRandomNumber = (max: number): number => {
  return Math.floor(Math.random() * max) + 1;
};

export const generateRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateQuestion = (
  currentGame: ICurrentGame,
  currentQuestionData: IQuestiondata | undefined
) => {
  let num1 = generateRandomNumber(currentGame.level.numberMax);
  let num2 = generateRandomNumber(num1);
  let question = `${num1} ${currentGame.level.calculationMethod} ${num2} = ?`;
  // check so next question will be different from current:
  if (question === currentQuestionData?.question) {
    if (num1 === currentGame.level.numberMax && num2 !== 0) {
      num1--;
      num2--;
    }
    if (num1 === currentGame.level.numberMax && num2 === 0) {
      num1--;
    } else {
      num1++;
    }
  }
  let correctAnswer = calculateAnswer(
    num1,
    num2,
    currentGame.level.calculationMethod
  );
  // Ensure that the correct answer is not a decimal number
  while (correctAnswer % 1 !== 0) {
    num1 = generateRandomNumber(currentGame.level.numberMax);
    num2 = generateRandomNumber(num1);

    if (num2 === 0) {
      num2++;
    }

    question = `${num1} ${currentGame.level.calculationMethod} ${num2} = ?`;
    correctAnswer = calculateAnswer(
      num1,
      num2,
      currentGame.level.calculationMethod
    );
  }
  // generate incorrectoptions and check that they differ from each other and from the correct answer:
  const range = currentGame.level.numberMax;
  const incorrectOptions: number[] = [];
  for (let i = 0; i < 2; i++) {
    let option;
    do {
      option = generateRandomNumberInRange(
        correctAnswer - range,
        correctAnswer + range
      );
    } while (
      option === correctAnswer ||
      incorrectOptions.includes(option) ||
      option < 0
    );
    incorrectOptions.push(option);
  }
  const options = [
    { value: correctAnswer, isCorrect: true },
    { value: incorrectOptions[0], isCorrect: false },
    { value: incorrectOptions[1], isCorrect: false },
  ];
  // shuffle the list:
  options.sort(() => Math.random() - 0.5);
  return {
    question: `${num1} ${currentGame.level.calculationMethod} ${num2} = ?`,
    options,
  };
};
