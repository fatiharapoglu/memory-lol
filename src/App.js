import React, { useState } from "react";
import Header from "./components/m-header";
import Footer from "./components/m-footer";
import Main from "./components/m-main";
import Modal from "./components/m-modal";

const App = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedChamps, setClickedChamps] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleScore = () => {
        setScore(score + 1);
    };

    const handleHighScore = () => {
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const handleClickedChamps = (newChamp) => {
        if (clickedChamps.includes(newChamp)) {
            setIsGameOver(true);
        }
        setClickedChamps([...clickedChamps, newChamp]);
    };

    return (
        <>
            <Header score={score} highScore={highScore} />
            <Main clickedChamps={clickedChamps} handleClickedChamps={handleClickedChamps} />
            {isGameOver && <Modal score={score} />}
            <Footer />
        </>
    );
};

export default App;
