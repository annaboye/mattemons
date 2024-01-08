export interface IQuestiondata {
    question: string,
    options: {value: number, isCorrect: boolean}[],
  }