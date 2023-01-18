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

    const checkHighScore = () => {
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const handleClickedChamps = (newChamp) => {
        if (clickedChamps.includes(newChamp)) {
            setIsGameOver(true);
            checkHighScore();
        } else {
            setClickedChamps([...clickedChamps, newChamp]);
            setScore(score + 1);
        }
    };

    const playAgain = () => {
        setScore(0);
        setIsGameOver(false);
        setClickedChamps([]);
    };

    return (
        <>
            <Header score={score} highScore={highScore} />
            <Main
                clickedChamps={clickedChamps}
                handleClickedChamps={handleClickedChamps}
                isGameOver={isGameOver}
            />
            {isGameOver && <Modal score={score} playAgain={playAgain} />}
            <Footer />
        </>
    );
};

export default App;
