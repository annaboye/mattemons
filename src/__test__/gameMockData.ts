import { ICurrentGame } from "../models/ICurrentGame";
import { IQuestiondata } from "../models/IQuestionData";

export const mockCurrentGame: ICurrentGame = {
  player: {
    playerName: "Ash",
    pokemonList: [
      {
        name: "Pikachu",
        id: 25,
        evolves_from_species_id: 172,
      },
    ],
  },
  level: {
    numberMax: 10,
    calculationMethod: "+",
  },
  selectedPokemon: {
    name: "Pikachu",
    id: 25,
    evolves_from_species_id: 172,
  },
  finishLevel: false,
};

export const mockCurrentQuestionData: IQuestiondata = {
  question: "3 + 5 = ?",
  options: [
    { value: 8, isCorrect: true },
    { value: 6, isCorrect: false },
    { value: 9, isCorrect: false },
  ],
};
