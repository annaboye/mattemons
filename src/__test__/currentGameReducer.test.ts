import { ICurrentGame, ILevel } from "../models/ICurrentGame";
import { IPlayer } from "../models/IPlayer";
import { IPokemon } from "../models/IPokemon";
import {
  GameAction,
  currentGameReducer,
  initialState,
} from "../reducers/CurrentGameReducer";

describe("currentGameReducer", () => {
  let initialStateCopy: ICurrentGame;

  beforeEach(() => {
    initialStateCopy = { ...initialState };
  });

  test("should handle actiontype SET_PLAYER", () => {
    const player: IPlayer = { playerName: "Wille", pokemonList: [] };
    const action: GameAction = { type: "SET_PLAYER", payload: player };

    const newCurrentGameState = currentGameReducer(initialStateCopy, action);

    expect(newCurrentGameState.player).toEqual(player);
  });

  test("should handle actiontype SET_LEVEL", () => {
    const level: ILevel = { numberMax: 5, calculationMethod: "-" };
    const action: GameAction = { type: "SET_LEVEL", payload: level };

    const newCurrentGameState = currentGameReducer(initialStateCopy, action);

    expect(newCurrentGameState.level).toEqual(level);
  });

  test("should handle actiontype SET_SELECTED_POKEMON", () => {
    const selectedPokemon: IPokemon = {
      id: 1,
      name: "Pikachu",
      evolves_from_species_id: 3,
    };
    const action: GameAction = {
      type: "SET_SELECTED_POKEMON",
      payload: selectedPokemon,
    };

    const newCurrentGameState = currentGameReducer(initialStateCopy, action);

    expect(newCurrentGameState.selectedPokemon).toEqual(selectedPokemon);
  });

  test("should handle actiontype ADD_POKEMON", () => {
    const pokemon: IPokemon = {
      id: 2,
      name: "Charmander",
      evolves_from_species_id: 1,
    };
    const action: GameAction = { type: "ADD_POKEMON", payload: pokemon };

    const newCurrentGameState = currentGameReducer(initialStateCopy, action);

    expect(newCurrentGameState.player.pokemonList).toEqual([pokemon]);
  });

  test("should handle actiontype SET_FINISH_LEVEL", () => {
    const action: GameAction = { type: "SET_FINISH_LEVEL", payload: true };

    const newCurrentGameState = currentGameReducer(initialStateCopy, action);

    expect(newCurrentGameState.finishLevel).toEqual(true);
  });
});


