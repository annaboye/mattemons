import { useContext, useState } from "react";
import { SelectPokemon } from "../../components/SelectPokemon/Selectpokemon";
import "./Game.scss"
import { SelectLevel } from "../../components/SelectLevel/SelectLevel";
import { GameContext} from "../../contexts/CurrentGameContext";





export const Game= () => {
  const currentGame= useContext(GameContext);
  const [currentPage, setCurrentPage] = useState(1);


  const pokemonIsSelected =()=>{
    setCurrentPage(2)
  }

    return (<>
 
    <div className="bg-wrapper">
    {currentGame.selectedPokemon.id !== 0 && <div>{currentGame.selectedPokemon.name}</div> }
    {currentPage===1 && <SelectPokemon pokemonIsSelected= {pokemonIsSelected}></SelectPokemon>}
    {currentPage===2 && <SelectLevel></SelectLevel>}
    </div>
    
    </>)
  };

