import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { Footer } from "../components/Footer/Footer";




export const Layout = () => {
    return (
      <>
      <header>
      <Nav></Nav>
      </header>
        <main>
          <Outlet></Outlet>
        </main>

      <Footer></Footer>
     
   
      </>
    );
  };