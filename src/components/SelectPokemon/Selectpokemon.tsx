import { useEffect, useState } from "react";
import { getPokemonData } from "../../services/getPokemon";
import { IPokemon } from "../../models/IPokemon";
import "./SelectPokemon.scss"

interface SelectPokemonProps {
  selectPokemon: (selectedPokemon: IPokemon) => void;
}

export const SelectPokemon= ({selectPokemon}: SelectPokemonProps) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    
  useEffect(()=> {
      const fetchData = async () => {
          try {
            const pokemonList = await getPokemonData();
            setPokemons(pokemonList);
          } catch (error) {
            console.error('Error fetching Pokemon data:', error);
          }
        };
      
        fetchData();

  }, [])
  return (
    <>
      <div className="poki-wrapper">{pokemons.map((pokemon)=>( <img onClick={() => selectPokemon(pokemon)} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.evolves_from_species_id}.png`}
      alt="pokemon" key={pokemon.id} />
      ))}</div>
    </>
  );
  };