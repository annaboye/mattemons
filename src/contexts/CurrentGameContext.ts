import { Dispatch, createContext } from "react";
import { ICurrentGame } from "../models/ICurrentGame";
import { GameAction, initialState } from "../reducers/CurrentGameReducer";

export const GameContext = createContext<ICurrentGame>(initialState);

export const GameDispatchContext = createContext<Dispatch<GameAction>>(
  () => {}
);
