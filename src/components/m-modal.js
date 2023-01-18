import React from "react";
import poro from "../assets/poro.mp4";

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <div>You have slained {props.score} enemies.</div>
                <button>Play Again?</button>
            </div>
            <video className="poro" autoPlay muted loop>
                <source src={poro} type="video/mp4" />
            </video>
        </div>
    );
};

export default Modal;
