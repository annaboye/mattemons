import { useContext, useState } from "react";
import { SelectPokemon } from "../../components/SelectPokemon/Selectpokemon";
import "./Game.scss"
import { SelectLevel } from "../../components/SelectLevel/SelectLevel";
import { GameContext} from "../../contexts/CurrentGameContext";
import { Play } from "../../components/Play/Play";





export const Game= () => {
  const currentGame= useContext(GameContext);
  const [currentPage, setCurrentPage] = useState(1);


  const pokemonIsSelected =()=>{
    setCurrentPage(2)
  }

  const levelIsSelected =() =>{
    setCurrentPage(3)
  }

    return (<>
 
    <div className="bg-wrapper">
    {currentPage===1 && <SelectPokemon pokemonIsSelected= {pokemonIsSelected}></SelectPokemon>}
    {currentPage===2 && <SelectLevel levelIsSelected = {levelIsSelected}></SelectLevel>}
    {currentPage===3 && <Play></Play>}

    </div>
    
    </>)
  };

