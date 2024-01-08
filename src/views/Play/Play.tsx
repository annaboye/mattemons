import { useContext, useEffect, useState } from "react";
import "./Play.scss";
import { GameContext, GameDispatchContext} from "../../contexts/CurrentGameContext";
import { generateQuestion} from "../../functions/gameFunctions";
import { useNavigate } from "react-router-dom";
import { IPlayer } from "../../models/IPlayer";
import { PokiEvolves } from "../../components/PokiEvolves/PokiEvolves";
import { IQuestiondata } from "../../models/IQuestionData";



export const Play = () =>{
    const currentGame= useContext(GameContext);
    const dispatch = useContext(GameDispatchContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showTryAgain, setShowTryAgain] = useState(false)
    const navigate= useNavigate();
    const [currentQuestionData, setCurrentQuestionData] = useState<IQuestiondata>();

    useEffect(() => {
            if (currentGame.player.playerName === '') {
        navigate('/');
      }
      else{
        const questionData = generateQuestion(currentGame, currentQuestionData);
        setCurrentQuestionData(questionData)
      }
      if (currentGame.finishLevel) {
        updateLs();
      }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentGame.finishLevel]);


      const handleAnswerClick = (selectedOption: { value: number; isCorrect: boolean }, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const clickedBtn = e.target as HTMLButtonElement;
        clickedBtn.blur();
        if (selectedOption.isCorrect) {
          setScore(score + 1);
        }
        if (currentQuestion < 9) {
          setCurrentQuestion(currentQuestion + 1);
          setCurrentQuestionData(generateQuestion(currentGame, currentQuestionData));
        } else {
            if (score===9 && selectedOption.isCorrect ){
              currentGame.finishLevel= true;
              dispatch({
                type: "ADD_POKEMON",
                payload: currentGame.selectedPokemon,
              });

            }
            else{
                setShowTryAgain(true)
            }
        }
      };

      const updateLs = () => {
        const playersFromLS: IPlayer[] = JSON.parse(localStorage.getItem("players") || "[]");
      
        let playerFound = false;
      
        for (let i = 0; i < playersFromLS.length; i++) {
          if (playersFromLS[i].playerName === currentGame.player.playerName) {
            playersFromLS[i] = currentGame.player;
            playerFound = true;
            break;
          }
        }
      
        if (!playerFound) {
          playersFromLS.push(currentGame.player);
        }
      
        console.log(playersFromLS);
      
        localStorage.setItem("players", JSON.stringify(playersFromLS));
      };
      
      const wantToTryAgain=()=>{
        setShowTryAgain(false)
        setScore(0)
        setCurrentQuestion(0)
      }
      const cancel =()=>{
        navigate("/")
      }
    
    return(
    
    <div className="play-wrapper" >
        
        {!showTryAgain && !currentGame.finishLevel && <div className="gameon-wrapper">
         <div className="img-container"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.evolves_from_species_id}.png`} alt="pokemon" /></div>
          <p>Fråga {currentQuestion + 1}:</p>
          <p>{currentQuestionData?.question}</p>
          <div>
            {currentQuestionData?.options.map((option, index) => (
              <button className="toggle" key={index} onClick={(e) => handleAnswerClick(option, e)}>
                {option.value}
              </button>
            ))}
          </div>
          <p>Poäng: {score}</p>
        </div>}
        {showTryAgain && <div><p>{score}/10 poäng</p><p>Bra kämpat, försök igen!</p><button className="play-btn" onClick={wantToTryAgain}>Spela igen</button><button className="cancel-btn" onClick={cancel}>Avsluta</button></div>}
        {currentGame.finishLevel && <PokiEvolves></PokiEvolves>}
      </div>)
}