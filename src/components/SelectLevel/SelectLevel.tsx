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
    <div className="level-wrapper">
    <div><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.evolves_from_species_id}.png`} alt="pokemon" /></div>
      <div>Välj räknesätt:</div>
        <div>
        <button className={`toggle ${currentGame.level.calculationMethod=== "addition"? "active" : ""}`} onClick={() => setCalculationMethod("addition")}><i className="icon fa-solid fa-plus"></i>
        </button>
        <button className={`toggle ${currentGame.level.calculationMethod=== "subtraction"? "active" : ""}`} onClick={() => setCalculationMethod("subtraction")}><i className="icon fa-solid fa-minus"></i></button>
        <button className={`toggle ${currentGame.level.calculationMethod=== "multiplication"? "active" : ""}`} onClick={() => setCalculationMethod("multiplication")}><i className="icon fa-solid fa-xmark"></i></button>
        
        <button className={`toggle ${currentGame.level.calculationMethod=== "division"? "active" : ""}`} onClick={() => setCalculationMethod("division")}><i className="icon fa-solid fa-divide"></i></button>
      </div>
       
       <div>Välj svårighetsgrad:</div>
      <div className="selectlevel">
        <button className={`toggle-long ${currentGame.level.level===1 ? "active" : ""}`} onClick={() => setLevel(1)}>Nivå 1: Siffror upp till 5</button>
        <button className={`toggle-long ${currentGame.level.level===2 ? "active" : ""}`} onClick={() => setLevel(2)}>Nivå 2: Siffror upp till 10</button>
        <button className={`toggle-long ${currentGame.level.level===3 ? "active" : ""}`} onClick={() => setLevel(3)}>Nivå 3: Siffror upp till 20</button>
      </div>
      <button className="btn-start"type="button" onClick={startTheGame} disabled={currentGame.level.level=== 0 || currentGame.level.calculationMethod === "" }>START</button>
      </div>
      </>
    );
  };