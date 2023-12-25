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
    <div className="pokis-wrapper">{currentGame.player.pokemonList.map((pokemon)=>(<div className="pokemon"> <div key={pokemon.id} className="img-container"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
    alt="pokemon"/></div>
    <span>{pokemon.name}</span></div>))}
    </div>
    <button className="play-btn" onClick={ ()=>{ navigate('/selectpokemon')} }>spela igen</button>
    <button className="cancel-btn" onClick={()=>{ navigate('/')}}>avsluta</button>
    </div>
    </div></>)
}