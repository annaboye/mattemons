import { IPlayer } from "./IPlayer";
import { IPokemon } from "./IPokemon";

export interface ICurrentGame {
  player: IPlayer;
  level: ILevel;
  selectedPokemon: IPokemon;
  finishLevel: boolean;
}

export interface ILevel {
  level: number;
  calculationMethod: string;
}
