import { useContext } from "react";
import { GameContext, GameDispatchContext } from "../../contexts/CurrentGameContext";
import "./SelectLevel.scss"

interface ISelectLevelProps{
  levelIsSelected: () => void;
}


export const SelectLevel= ({levelIsSelected}: ISelectLevelProps) => {
  const dispatch = useContext(GameDispatchContext);
  const currentGame= useContext(GameContext);


  const setLevel = (level: number) => {
    dispatch({ type: "SET_LEVEL", payload: { ...currentGame.level, level } });
    
  };

  const setCalculationMethod = (method: string) => {
    dispatch({ type: "SET_LEVEL", payload: { ...currentGame.level, calculationMethod: method } });
  };

  const startTheGame =()=>{
 levelIsSelected();
  }
    return (
      <>
       <div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.evolves_from_species_id}.png`} alt="pokemon" /></div>
       <div>Select level:</div>
      <div>
        <button className={`toggle ${currentGame.level.level===1 ? "active" : ""}`} onClick={() => setLevel(1)}>Level 1</button>
        <button className={`toggle ${currentGame.level.level===2 ? "active" : ""}`} onClick={() => setLevel(2)}>Level 2</button>
        <button className={`toggle ${currentGame.level.level===3 ? "active" : ""}`} onClick={() => setLevel(3)}>Level 3</button>
      </div>
      <div>Select calculation method:</div>
      <div>
        <button className={`toggle ${currentGame.level.calculationMethod=== "addition"? "active" : ""}`} onClick={() => setCalculationMethod("addition")}>Addition</button>
        <button className={`toggle ${currentGame.level.calculationMethod=== "multiplication"? "active" : ""}`} onClick={() => setCalculationMethod("multiplication")}>Multiplication</button>
        <button className={`toggle ${currentGame.level.calculationMethod=== "subtraction"? "active" : ""}`} onClick={() => setCalculationMethod("subtraction")}>Subtraction</button>
        <button className={`toggle ${currentGame.level.calculationMethod=== "division"? "active" : ""}`} onClick={() => setCalculationMethod("division")}>Division</button>
      </div>
      <button className="btn-start"type="button" onClick={startTheGame}>START</button>
      </>
    );
  };