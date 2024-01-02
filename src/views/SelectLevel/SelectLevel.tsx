import { useContext, useEffect } from "react";
import { GameContext, GameDispatchContext } from "../../contexts/CurrentGameContext";
import "./SelectLevel.scss"
import { useNavigate } from "react-router-dom";
import { FaPlus,  FaMinus, FaDivide } from "react-icons/fa";
import { ImCross } from "react-icons/im";


export const SelectLevel= () => {
  const dispatch = useContext(GameDispatchContext);
  const currentGame= useContext(GameContext);
  const navigate = useNavigate();
 
  useEffect(() => {
    if (currentGame.player.playerName === '') {
      navigate('/');
    }
  }, [currentGame.player, navigate]);

  const setLevel = (numberMax: number) => {
    dispatch({ type: "SET_LEVEL", payload: { ...currentGame.level, numberMax: numberMax } });
    
  };

  const setCalculationMethod = (method: string) => {
    dispatch({ type: "SET_LEVEL", payload: { ...currentGame.level, calculationMethod: method } });
  };

  const startTheGame =()=>{
   navigate("/play")
  }
    return (
    <>
    <div className="level-wrapper">
  
    <div className="img-container"><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentGame.selectedPokemon.evolves_from_species_id}.png`} alt="pokemon" /></div>
      <div>Välj räknesätt:</div>
        <div className="setcalculation-wrapper">
        <button tabIndex= {0} className={`toggle ${currentGame.level.calculationMethod=== "+"? "active" : ""}`} onClick={() => setCalculationMethod("+")}><FaPlus className="icon" ></FaPlus>
        </button>
        <button tabIndex= {0} className={`toggle ${currentGame.level.calculationMethod=== "-"? "active" : ""}`} onClick={() => setCalculationMethod("-")}><FaMinus className="icon"></FaMinus></button>
        <button tabIndex= {0} className={`toggle ${currentGame.level.calculationMethod=== "*"? "active" : ""}`} onClick={() => setCalculationMethod("*")}><ImCross className="icon"></ImCross></button>
        <button tabIndex= {0} className={`toggle ${currentGame.level.calculationMethod=== "/"? "active" : ""}`} onClick={() => setCalculationMethod("/")}><FaDivide className="icon"></FaDivide></button>
      </div>
       

      <div className="setlevel-wrapper">
      <div>Välj svårighetsgrad:</div>
        <button tabIndex= {0} className={`toggle-long ${currentGame.level.numberMax===5 ? "active" : ""}`} onClick={() => setLevel(5)}>Nivå 1: Siffror upp till 5</button>
        <button tabIndex= {0} className={`toggle-long ${currentGame.level.numberMax===10 ? "active" : ""}`} onClick={() => setLevel(10)}>Nivå 2: Siffror upp till 10</button>
        <button tabIndex= {0}className={`toggle-long ${currentGame.level.numberMax===20 ? "active" : ""}`} onClick={() => setLevel(20)}>Nivå 3: Siffror upp till 20</button>
      </div>
      <button  tabIndex= {0}className="btn-start" onClick={startTheGame} disabled={currentGame.level.numberMax=== 0 || currentGame.level.calculationMethod === "" }>START</button>

    
     
      </div>
      </>
    );
  };