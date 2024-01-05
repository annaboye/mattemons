
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
      <span>{pokemon.name.toLocaleUpperCase()}</span>
      <span className="smallfont">Utvecklas från:</span>
      <div className="smallimg-container">
      <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.evolves_from_species_id}.png`}
          alt="pokemon"
        />
        </div>
      </div>
    );
  };