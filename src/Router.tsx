import { createBrowserRouter } from "react-router-dom";
import { Startpage } from "./views/Startpage/Startpage";
import { Error } from "./views/Error/Error";
import { Game } from "./views/Game/Game";
import { About } from "./views/About/About";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Startpage></Startpage>,
      errorElement: <Error></Error>,
    },
    {
      path: "/game",
      element: <Game></Game>,
      errorElement: <Error></Error>,
    },
    {
      path: "/about",
      element: <About></About>,
      errorElement: <Error></Error>,
    },
  ]);