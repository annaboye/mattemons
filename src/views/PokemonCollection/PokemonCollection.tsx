import { useContext } from "react";
import "./PokemonCollection.scss";
import { GameContext } from "../../contexts/CurrentGameContext";
import { useNavigate } from "react-router-dom";


export const PokemonCollection = () =>{
    const currentGame= useContext(GameContext);
    const navigate= useNavigate();

    return(
    <>
    <div className="collection-wrapper">
    <div className="content-wrapper">
    <div className="poki-wrapper">{currentGame.player.pokemonsIdList.map((pokemonId)=>( <div key={pokemonId} className="img-container"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
    alt="pokemon"/></div>))}
    </div>
    <button className="play-btn" onClick={ ()=>{ navigate('/selectpokemon')} }>spela igen</button>
    <button className="cancel-btn" onClick={()=>{ navigate('/')}}>avsluta</button>
    </div>
    </div></>)
}