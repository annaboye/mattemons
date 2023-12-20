import { useContext, useEffect, useState } from "react";
import "./Play.scss";
import { GameContext, GameDispatchContext} from "../../contexts/CurrentGameContext";
import { calculateAnswer } from "../../functions/mathFunctions";
import { useNavigate } from "react-router-dom";
import { IPlayer } from "../../models/IPlayer";
import { PokiEvolves } from "../../components/PokiEvolves/PokiEvolves";

interface IQuestiondata {
  question: string,
  options: {value: number, isCorrect: boolean}[],

}

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
        const questionData = generateQuestion();
        setCurrentQuestionData(questionData)
      }
      if (currentGame.finishLevel) {
        updateLs();
      }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentGame.finishLevel]);

    const generateRandomNumber = (max: number) => Math.floor(Math.random() * max) + 1;

    const generateRandomNumberInRange = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

    const generateQuestion = () => {
        let num1 = generateRandomNumber(currentGame.level.numberMax);
        let num2 = generateRandomNumber(num1);
        const question = `${num1} ${currentGame.level.calculationMethod} ${num2} = ?`
    
        if( question === currentQuestionData?.question){
          if(num1 === currentGame.level.numberMax && num2 !== 0){
            num1 --;
            num2 --;}
            if(num1 === currentGame.level.numberMax && num2 === 0){
              num1 --;
            }
            else{
              num1 ++;
            }
        }
        const correctAnswer = calculateAnswer(num1,num2, currentGame.level.calculationMethod)
        const range = currentGame.level.numberMax; 
        const incorrectOptions: number[] = [];

        for (let i = 0; i < 2; i++) {
          let option;
          do {
            option = generateRandomNumberInRange(correctAnswer - range, correctAnswer + range);
          } while (option === correctAnswer || incorrectOptions.includes(option) || option < 0);
          incorrectOptions.push(option);
        }
        
          
        const options = [
          { value: correctAnswer, isCorrect: true },
          { value: incorrectOptions[0], isCorrect: false },
          { value: incorrectOptions[1], isCorrect: false },
        ];
    
        options.sort(() => Math.random() - 0.5);

        return {
          question: `${num1} ${currentGame.level.calculationMethod} ${num2} = ?`,
          options,
        };
      };

      const handleAnswerClick = (selectedOption: { value: number; isCorrect: boolean }, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const clickedBtn = e.target as HTMLButtonElement;
        clickedBtn.blur();
        if (selectedOption.isCorrect) {
          setScore(score + 1);
        }
    
        if (currentQuestion < 9) {
          setCurrentQuestion(currentQuestion + 1);
          setCurrentQuestionData(generateQuestion());
        } else {
            if (score===9 && selectedOption.isCorrect ){
              currentGame.finishLevel= true;
              dispatch({
                type: "ADD_POKEMON_ID",
                payload: currentGame.selectedPokemon.id,
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
    
    <div className="bg-wrapper" >
        
        {!showTryAgain && !currentGame.finishLevel && <div className="play-wrapper">
         <div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.evolves_from_species_id}.png`} alt="pokemon" /></div>
          <p>Fråga {currentQuestion + 1}:</p>
          <p>{currentQuestionData?.question}</p>
          <div>
            {currentQuestionData?.options.map((option, index) => (
              <button className="toggle" key={index} onClick={(e) => handleAnswerClick(option, e)}>
                {option.value}
              </button>
            ))}
          </div>
          <p>Score: {score}</p>
        </div>}
        {showTryAgain && <div> <button className="play-btn" onClick={wantToTryAgain}>Spela igen</button><button className="cancel-btn" onClick={cancel}>Avsluta</button></div>}
        {currentGame.finishLevel && <PokiEvolves></PokiEvolves>}
      </div>)
}