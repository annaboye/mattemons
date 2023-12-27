import { Link, useLocation } from "react-router-dom";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import "./Nav.scss"
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export const Nav= () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
    return (
    <header className="header">
      <ul className="menu">
        <li>
        <button onClick={openModal} tabIndex={0} aria-label="öppna navigering">
        <MdOutlineCatchingPokemon className="navicon"  aria-label="öppna navigering" />
        </button>
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Vart vill du gå?</h2>
        <Link to={"/"}><button className="long-btn">STARTSIDA</button></Link>
        {location.pathname !== "/" && <Link to={"/collection"}><button className="long-btn">MIN POKEMONSAMLING</button></Link>}
      </Modal>
    </header>
   )

  };