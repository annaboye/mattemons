import { useContext } from "react";
import { GameContext, GameDispatchContext } from "../../contexts/CurrentGameContext";
import "./SelectLevel.scss"

interface ISelectLevelProps{
  levelIsSelected: () => void;
}


export const SelectLevel= ({levelIsSelected}: ISelectLevelProps) => {
  const dispatch = useContext(GameDispatchContext);
  const currentGame= useContext(GameContext);


  const setLevel = (numberMax: number) => {
    dispatch({ type: "SET_LEVEL", payload: { ...currentGame.level, numberMax: numberMax } });
    
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
        <button className={`toggle ${currentGame.level.calculationMethod=== "+"? "active" : ""}`} onClick={() => setCalculationMethod("+")}><i className="icon fa-solid fa-plus"></i>
        </button>
        <button className={`toggle ${currentGame.level.calculationMethod=== "-"? "active" : ""}`} onClick={() => setCalculationMethod("-")}><i className="icon fa-solid fa-minus"></i></button>
        <button className={`toggle ${currentGame.level.calculationMethod=== "*"? "active" : ""}`} onClick={() => setCalculationMethod("*")}><i className="icon fa-solid fa-xmark"></i></button>
        
        <button className={`toggle ${currentGame.level.calculationMethod=== "/"? "active" : ""}`} onClick={() => setCalculationMethod("/")}><i className="icon fa-solid fa-divide"></i></button>
      </div>
       
       <div>Välj svårighetsgrad:</div>
      <div className="selectlevel">
        <button className={`toggle-long ${currentGame.level.numberMax===5 ? "active" : ""}`} onClick={() => setLevel(5)}>Nivå 1: Siffror upp till 5</button>
        <button className={`toggle-long ${currentGame.level.numberMax===10 ? "active" : ""}`} onClick={() => setLevel(10)}>Nivå 2: Siffror upp till 10</button>
        <button className={`toggle-long ${currentGame.level.numberMax===20 ? "active" : ""}`} onClick={() => setLevel(20)}>Nivå 3: Siffror upp till 20</button>
      </div>
      <button className="btn-start"type="button" onClick={startTheGame} disabled={currentGame.level.numberMax=== 0 || currentGame.level.calculationMethod === "" }>START</button>
      </div>
      </>
    );
  };