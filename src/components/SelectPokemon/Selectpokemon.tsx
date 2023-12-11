import { useContext, useEffect, useState } from "react";
import { getPokemonData } from "../../services/getPokemon";
import { IPokemon } from "../../models/IPokemon";
import "./SelectPokemon.scss"
import { GameContext, GameDispatchContext } from "../../contexts/CurrentGameContext";

interface SelectPokemonProps {
  pokemonIsSelected: () => void;
}

export const SelectPokemon= ({pokemonIsSelected}: SelectPokemonProps) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const dispatch = useContext(GameDispatchContext);
  const currentGame= useContext(GameContext);

  const selectPokemon = (pokemon: IPokemon)=> {
    dispatch({type: "SET_SELECTED_POKEMON",
    payload: pokemon})
    pokemonIsSelected();
  }
    
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
    <p>{currentGame.player.playerName } nu ska du välja din pokemon som du vill ska utvecklas till nästa nivå:</p>
      <div className="poki-wrapper">{pokemons.map((pokemon)=>( <div className="img-container"><img onClick={() => selectPokemon(pokemon)} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.evolves_from_species_id}.png`}
      alt="pokemon" key={pokemon.id} /> </div>
      ))}</div>
    </>
  );
  };