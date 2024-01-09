import { ICurrentGame, ILevel } from "../models/ICurrentGame";
import { IPlayer } from "../models/IPlayer";
import { IPokemon } from "../models/IPokemon";

export type GameAction =
  | { type: "SET_PLAYER"; payload: IPlayer }
  | { type: "SET_LEVEL"; payload: ILevel }
  | { type: "SET_SELECTED_POKEMON"; payload: IPokemon }
  | { type: "ADD_POKEMON"; payload: IPokemon }
  | { type: "SET_FINISH_LEVEL"; payload: boolean };

export const initialState: ICurrentGame = {
  player: { playerName: "", pokemonList: [] },
  level: { numberMax: 0, calculationMethod: "" },
  selectedPokemon: { id: 0, name: "", evolves_from_species_id: 0 },
  finishLevel: false,
};

export const currentGameReducer = (
  state: ICurrentGame = initialState,
  action: GameAction
): ICurrentGame => {
  switch (action.type) {
    case "SET_PLAYER":
      return { ...state, player: { ...state.player, ...action.payload } };
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "SET_SELECTED_POKEMON":
      return { ...state, selectedPokemon: action.payload };
    case "ADD_POKEMON":
      return {
        ...state,
        player: {
          ...state.player,
          pokemonList: [...state.player.pokemonList, action.payload],
        },
      };
    case "SET_FINISH_LEVEL":
      return { ...state, finishLevel: action.payload };
    default:
      return state;
  }
};
