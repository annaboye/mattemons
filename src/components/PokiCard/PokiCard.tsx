
import "./PokiCard.scss"
import { IPokemon } from "../../models/IPokemon";


interface IPokiCardProps{
    pokemon: IPokemon
}

export const PokiCard = ({pokemon}:IPokiCardProps) => {
  
    return (
      <div className="pokemoncard">
      <div className="img-container">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="pokemon"
        />
      </div>
      <span>{pokemon.name}</span>
      </div>
    );
  };