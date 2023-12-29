import { useEffect, useContext } from "react";
import "./PokiEvolves.scss";
import { GameContext } from "../../contexts/CurrentGameContext";
import { useNavigate } from "react-router-dom";

export const PokiEvolves = () => {
  const navigate= useNavigate();
  
  const currentGame = useContext(GameContext);

  useEffect(() => {
   
  }, [currentGame.finishLevel]);

  return (
    <div className="evolving-wrapper">
    <div className="evolving">
        <img className="first"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.evolves_from_species_id}.png`}
        alt="pokemon"
      />
      <img className="second"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.id}.png`}
        alt="pokemon"
      />
    </div>
    <button className="play-btn" onClick={ ()=>{ navigate('/selectpokemon')} }>spela igen</button>
    <button className="collection-btn" onClick={()=>{ navigate('/collection')}}>Gå till min samling</button>
    <button className="cancel-btn" onClick={()=>{ navigate('/')}}>avsluta</button>
    </div>
  );
};