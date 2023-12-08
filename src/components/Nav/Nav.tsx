import { Link } from "react-router-dom";
import "./Nav.scss"

export const Nav= () => {
    return (
    <header className="header">
      <ul className="menu">
        <li>
        <Link to={"/about"}>
                  info
                </Link>
        </li>
   
      </ul>
    </header>
   )

  };