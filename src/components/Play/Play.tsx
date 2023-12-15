import { useContext, useState } from "react";
import "./Play.scss";
import { GameContext} from "../../contexts/CurrentGameContext";
import { calculateAnswer } from "../../functions/mathFunctions";
import { useNavigate } from "react-router-dom";

interface IPlayProps {
    finishGame: () => void;
  }

export const Play = ({ finishGame }: IPlayProps) =>{
    const currentGame= useContext(GameContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showTryAgain, setShowTryAgain] = useState(false)
    const navigate= useNavigate();

    const generateRandomNumber = (max: number) => Math.floor(Math.random() * max) + 1;

    const generateRandomNumberInRange = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

    const generateQuestion = () => {
        const num1 = generateRandomNumber(currentGame.level.numberMax);
        const num2 = generateRandomNumber(num1);
        const correctAnswer = calculateAnswer(num1,num2, currentGame.level.calculationMethod)
        const range = currentGame.level.numberMax; 
        const incorrectOptions: number[] = [];

   // loop to create an array of incorrect answers that are not indentical to anwser or each other:
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

      //create and set a state with generated questions using generateQuestion functin
      const [currentQuestionData, setCurrentQuestionData] = useState(generateQuestion());

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
                finishGame();
            }
            else{
                setShowTryAgain(true)
            }
          
        }
      };

      const wantToTryAgain=()=>{
        setShowTryAgain(false)
        setScore(0)
        setCurrentQuestion(0)
      }
      const cancel =()=>{
        navigate("/")
      }
    
    return(<div className="play-wrapper">
        
        {!showTryAgain && <div>
         <div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.evolves_from_species_id}.png`} alt="pokemon" /></div>
          <p>Fråga {currentQuestion + 1}:</p>
          <p>{currentQuestionData.question}</p>
          <div>
            {currentQuestionData.options.map((option, index) => (
              <button className="toggle" key={index} onClick={(e) => handleAnswerClick(option, e)}>
                {option.value}
              </button>
            ))}
          </div>
        </div>}
        {showTryAgain && <div> <button className="play-btn" onClick={wantToTryAgain}>Spela igen</button><button className="cancel-btn" onClick={cancel}>Avsluta</button></div>}
        <p>Score: {score}</p>
      </div>)
}