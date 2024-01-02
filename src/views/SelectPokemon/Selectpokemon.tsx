import { useContext, useEffect, useState } from "react";
import { getPokemons } from "../../services/getPokemons";
import { IPokemon } from "../../models/IPokemon";
import "./SelectPokemon.scss"
import { GameContext, GameDispatchContext } from "../../contexts/CurrentGameContext";
import { useNavigate } from "react-router-dom";



export const SelectPokemon= () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const dispatch = useContext(GameDispatchContext);
  const currentGame= useContext(GameContext);
  const navigate= useNavigate();

  useEffect(() => {
    currentGame.finishLevel= false;
    if (currentGame.player.playerName === '') {
      navigate('/');
    }
  }, [currentGame.player]);

  const selectPokemon = (pokemon: IPokemon)=> {
    dispatch({type: "SET_SELECTED_POKEMON",
    payload: pokemon})
    navigate("/selectlevel")
  }
    
  useEffect(()=> {
      const fetchData = async () => {
          try {
            const pokemonList = await getPokemons();
            setPokemons(pokemonList);
          } catch (error) {
            console.error('Error fetching Pokemon data:', error);
          }
        };
      
        fetchData();

  }, [])

 
  return (
    <>
    <div className="select-bg">
      
      <span className="player">Hej {currentGame.player.playerName}!<p>Fånga din pokemon som ska utvecklas till nästa nivå:</p></span> 
      <div className="poki-wrapper">{pokemons.map((pokemon)=>( <div key={pokemon.id} className="img-container"><img onClick={() => selectPokemon(pokemon)} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.evolves_from_species_id}.png`}
      alt="pokemon"  />
      </div>
      ))}
      </div>
    
    </div>
    </>
  );
  };

  