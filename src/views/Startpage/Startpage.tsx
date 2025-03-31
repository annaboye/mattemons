import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import "./Startpage.scss"
import { IPlayer } from "../../models/IPlayer";
import { GameContext, GameDispatchContext } from "../../contexts/CurrentGameContext";
import { useNavigate } from "react-router-dom";
import { FaRegPlayCircle } from "react-icons/fa";

const defaultPlayerInput ={
  player: "",
};


export const Startpage= () => {
  const dispatch = useContext(GameDispatchContext);
  const currentGame= useContext(GameContext);
  const [showPlayerList, setShowPlayerList] = useState(false);
  const [userInput, setUserInput] = useState(defaultPlayerInput)
  const navigate= useNavigate();
  const [playerlist, setPlayerList]=useState<IPlayer[]>([])

    useEffect(()=> {
        const playersFromLS: IPlayer[]= (JSON.parse(localStorage.getItem("players")|| "[]"));
        if(playersFromLS.length>0){
            setShowPlayerList(true)
            setPlayerList(playersFromLS)
        }
  
    }, [])

    const submitPlayerForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newPlayer = {playerName: userInput.player, pokemonList: []}
      console.log(newPlayer)
      dispatch({type: "SET_PLAYER",
      payload: {...currentGame.player,... newPlayer}} )
      const playersFromLS: IPlayer[]= (JSON.parse(localStorage.getItem("players")|| "[]"));
      playersFromLS.push(newPlayer)
      localStorage.setItem("players", JSON.stringify(playersFromLS));
      navigate("/selectpokemon")
    };

    const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
      const name = e.target.name;
      setUserInput({ ...userInput, [name]: e.target.value });
    }

    const selectPlayer = (player: IPlayer)=>{
      dispatch({type: "SET_PLAYER",
      payload: {...currentGame.player,... player}} )
    } 

    const goToPlay =()=>{
      navigate("/selectpokemon")
    }
    return (
     <>
      <div className="start-wrapper">
        <h1>MATTEMONS</h1>
        {showPlayerList && <div className="players-wrapper">Välj ditt namn i listan:<ul className="playerslist">{playerlist.map((player, index)=>(
          <li key={index} onClick={() => selectPlayer(player)}className={player.playerName === currentGame.player.playerName ? "selected" : ""}>
            <label>
            <input tabIndex={0}
              type="radio"
              value={player.playerName}
              checked={player.playerName === currentGame.player.playerName}
              onChange={() => selectPlayer(player)}
            />
            {player.playerName}
            </label>
        </li>
        
        ))}
        </ul>
        <button tabIndex={0} className="play-btn"type="submit" onClick={goToPlay} disabled={currentGame.player.playerName === ""}>SPELA<FaRegPlayCircle /></button>
        <p>Ny spelare? <button  tabIndex={0}className="newplayerbtn" onClick={()=>{setShowPlayerList(false)}}>Lägg till</button></p>
        </div>}
        {!showPlayerList && <div className="form-wrapper">
          <p>Välkommen vad heter du?</p>
          <form onSubmit={submitPlayerForm} action="">
            <input type="text" placeholder="skriv ditt namn här..."value={userInput.player} onChange={handleChange} name="player" required />
            <button tabIndex={0} className="play-btn"type="submit">SPELA <FaRegPlayCircle /></button>
          </form> 
          </div>}
          <div className="img-wrapper">
          <img src={`${import.meta.env.BASE_URL}pokeball.webp`} alt="pokemonball" />
          </div> 
      </div>
     </>
    );
  };