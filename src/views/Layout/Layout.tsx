import { Outlet, useLocation } from "react-router-dom";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import "./Layout.scss";




export const Layout = () => {
  const location = useLocation();

  // Funktion för att bestämma klassen baserat på sidans sökväg
  const getBackgroundClass = (pathname:string) => {
    if (pathname === "/") {
      return "startpage";
    }
    if (pathname === "/play") {
      return "play";
    } 
    if (pathname === "/collection") {
      return "collection";
    }
    if (pathname === "/selectpokemon") {
      return "selectpokemon";
    }
    if (pathname === "/selectlevel") {
      return "selectlevel";
    }
    else {
      return "default";
    }
  };

  const backgroundClass = getBackgroundClass(location.pathname);
    return (
      <div className={`layout-container ${backgroundClass}`}>
      <header>
      <Nav></Nav>
      </header>
        <main>
          <Outlet></Outlet>
        </main>
      <Footer></Footer>
      </div>
    );
  };