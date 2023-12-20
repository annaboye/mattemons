import{ ReactNode } from 'react';
import "./Modal.scss"
import { FaWindowClose } from "react-icons/fa";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  }

export const Modal =({ isOpen, onClose, children }:ModalProps)=>{
    if (!isOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <button className="close-button" onClick={onClose} tabIndex={0} aria-label="stäng navigering">
            <FaWindowClose aria-label="stäng navigering"></FaWindowClose>
          </button>
          {children}
        </div>
      </div>
    );

}