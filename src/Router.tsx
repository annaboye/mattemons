import { createBrowserRouter } from "react-router-dom";
import { Startpage } from "./views/Startpage/Startpage";
import { Error } from "./views/Error/Error";
import { About } from "./components/About/About";
import { Layout } from "./views/Layout";
import { SelectPokemon } from "./views/SelectPokemon/Selectpokemon";
import { SelectLevel } from "./views/SelectLevel/SelectLevel";
import { Play } from "./views/Play/Play";
import { PokemonCollection } from "./views/PokemonCollection/PokemonCollection";


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
            path: "/selectpokemon",
            element: <SelectPokemon></SelectPokemon>,
            errorElement: <Error></Error>,
          },
          {
            path: "/selectlevel",
            element: <SelectLevel></SelectLevel>,
            errorElement: <Error></Error>,
          },
          {
            path: "/play",
            element: <Play></Play>,
            errorElement: <Error></Error>,
          },
          {
            path: "/collection",
            element: <PokemonCollection></PokemonCollection>,
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