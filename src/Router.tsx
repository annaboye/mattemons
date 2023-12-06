import { createBrowserRouter } from "react-router-dom";
import { Startpage } from "./views/Startpage/Startpage";
import { Error } from "./views/Error/Error";
import { Game } from "./views/Game/Game";
import { About } from "./views/About/About";
import { Layout } from "./views/Layout";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
    children: [
        {
          path: "/",
          element: <Startpage></Startpage>,
          index: true,
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
      ],
    },
 
  ]);