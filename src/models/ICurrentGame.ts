import { IPlayer } from "./IPlayer";
import { IPokemon } from "./IPokemon";

export interface ICurrentGame {
    player: IPlayer;
    selectedPokemon: IPokemon;
    finishLevel: boolean;
  }