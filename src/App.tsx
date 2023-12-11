import { GameContext, GameDispatchContext } from "../src/contexts/CurrentGameContext";
import { gameReducer, initialState } from "../src/reducers/CurrentGameReducer";
import { useReducer } from "react";
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { router } from './Router'

function App() {
  const [currentGame, dispatch] = useReducer(gameReducer, initialState);
  

  return (
    <GameContext.Provider value={currentGame}>
     <GameDispatchContext.Provider value={dispatch}>
      <RouterProvider router={router}></RouterProvider>
     </GameDispatchContext.Provider>
    </GameContext.Provider>
  )
}

export default App
