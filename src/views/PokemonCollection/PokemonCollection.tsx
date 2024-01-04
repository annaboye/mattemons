import { useContext } from "react";
import "./PokemonCollection.scss";
import { GameContext } from "../../contexts/CurrentGameContext";
import { useNavigate } from "react-router-dom";
import { PokiCard } from "../../components/PokiCard/PokiCard";


export const PokemonCollection = () =>{
    const currentGame= useContext(GameContext);
    const navigate= useNavigate();
    return(
    <>
    <div className="collection-wrapper">
    <div className="pokis-wrapper">{currentGame.player.pokemonList.map((pokemon)=>(<PokiCard pokemon={pokemon}></PokiCard>))}
    </div>
    <button className="play-btn" onClick={ ()=>{ navigate('/selectpokemon')} }>spela igen</button>
    <button className="cancel-btn" onClick={()=>{ navigate('/')}}>avsluta</button>
    </div>
    </>)
}