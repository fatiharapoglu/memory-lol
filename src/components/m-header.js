import React from "react";
import icon from "../assets/LoL-icon.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <div>
                    <img src={icon} alt="lol-icon" title="League of Legends" />
                </div>
                <div>The Memory League</div>
            </div>
            <div className="header-right">
                <span>
                    Score: <span id="score">1</span>
                </span>
                <span>
                    High Score: <span id="high-score">2</span>
                </span>
            </div>
        </header>
    );
};

export default Header;
