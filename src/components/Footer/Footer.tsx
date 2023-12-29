import { useLocation, useNavigate } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import "./Footer.scss";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { About } from "../About/About";

export const Footer= () => {
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);
    const location = useLocation();

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
    <footer className="footer">
      <ul className="menu">
        <li>
            {location.pathname !== "/" &&
        <button onClick={ ()=>{navigate(-1)}} tabIndex={0} aria-label="tillbaka">
        <GiReturnArrow className="navicon" aria-label="tillbaka" />
        </button>}
        </li>
        <li>
        <button onClick={openModal} aria-label="hjälp och info">
        <IoMdHelpCircleOutline className="navicon" aria-label="hjälp och info"/>
        </button>
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <About></About>
      </Modal>
    </footer>
   )

  };