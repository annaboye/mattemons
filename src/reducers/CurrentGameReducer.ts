import { ICurrentGame, ILevel } from "../models/ICurrentGame";
import { IPlayer } from "../models/IPlayer";
import { IPokemon } from "../models/IPokemon";

export type GameAction =
  | { type: "SET_PLAYER"; payload: IPlayer }
  | { type: "SET_LEVEL"; payload: ILevel }
  | { type: "SET_SELECTED_POKEMON"; payload: IPokemon }
  | { type: "ADD_POKEMON_ID"; payload: number }
  | { type: "SET_FINISH_LEVEL"; payload: boolean };

export const initialState: ICurrentGame = {
  player: { playerName: "", pokemonsIdList: [] },
  level: { level: 0, calculationMethod: "" },
  selectedPokemon: { id: 0, name: "", evolves_from_species_id: 0 },
  finishLevel: false,
};

export const gameReducer = (
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
    case "ADD_POKEMON_ID":
      return {
        ...state,
        player: {
          ...state.player,
          pokemonsIdList: [...state.player.pokemonsIdList, action.payload],
        },
      };
    case "SET_FINISH_LEVEL":
      return { ...state, finishLevel: action.payload };
    default:
      return state;
  }
};
