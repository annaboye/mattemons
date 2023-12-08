import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import "./Startpage.scss"
import { IPlayer } from "../../models/IPlayer";
import { GameContext, GameDispatchContext } from "../../contexts/CurrentGameContext";
import { useNavigate } from "react-router-dom";

const defaultPlayerInput ={
  player: "",
};


export const Startpage= () => {
  const dispatch = useContext(GameDispatchContext);
  const currentGame= useContext(GameContext);
  const [showPlayerList, setShowPlayerList] = useState(false);
  const [userInput, setUserInput] = useState(defaultPlayerInput)
  const navigate= useNavigate();

    useEffect(()=> {
        const playersFromLS: IPlayer[]= (JSON.parse(localStorage.getItem("players")|| "[]"));
        if(playersFromLS.length>1){
            setShowPlayerList(true)
        }
  
    }, [])

    const submitPlayerForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const newPlayer = {playerName: userInput.player, pokemonIdList: []}
      console.log(newPlayer)
      dispatch({type: "SET_PLAYER",
      payload: {...currentGame.player,... newPlayer}} )
      
     navigate("/game")
    };

    const handleChange =(e: ChangeEvent<HTMLInputElement>)=>{
      const name = e.target.name;
      setUserInput({ ...userInput, [name]: e.target.value });
    }
   
    return (
      <>

        <div className="start-wrapper">
        <h1>MATTEMONS</h1>
        <div>{currentGame.player.playerName}</div>
        {showPlayerList && <div>Visa listan</div>}
        {!showPlayerList && <div className="form-wrapper"><p>Välkommen vad heter du?</p><form onSubmit={submitPlayerForm} action=""> <input type="text" placeholder="skriv ditt namn här..."value={userInput.player} onChange={handleChange} name="player" /><button className="play-btn"type="submit">PLAY</button></form> </div>}
            <div className="img-wrapper">
            <img src="https://cdn.pixabay.com/photo/2016/08/15/00/50/pokeball-1594373_640.png" alt="pokemonball" />
            </div>
            
        </div>
      </>
    );
  };