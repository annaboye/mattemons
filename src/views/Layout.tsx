import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { GameContext, GameDispatchContext } from "../contexts/CurrentGameContext";
import { gameReducer, initialState } from "../reducers/CurrentGameReducer";
import { useReducer } from "react";



export const Layout = () => {
  const [currentGame, dispatch] = useReducer(gameReducer, initialState);
    return (
      <>
      <GameContext.Provider value={currentGame}>
      <GameDispatchContext.Provider value={dispatch}>
      <header>
      <Nav></Nav>
      </header>
        <main>
          <Outlet></Outlet>
        </main>
      <footer>
      </footer>
      </GameDispatchContext.Provider>
      </GameContext.Provider>
      </>
    );
  };