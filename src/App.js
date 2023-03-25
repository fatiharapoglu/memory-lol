import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Modal from "./components/Modal";
import trueSound from "./assets/media/true.wav";
import falseSound from "./assets/media/false.wav";

const App = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedChamps, setClickedChamps] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (score === 30) {
            setIsGameOver(true);
            setHighScore(30);
        }
    }, [score]);

    const checkHighScore = () => {
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const handleClickedChamps = (newChamp) => {
        if (clickedChamps.includes(newChamp)) {
            setIsGameOver(true);
            checkHighScore();
            new Audio(falseSound).play();
        } else {
            setClickedChamps([...clickedChamps, newChamp]);
            setScore(score + 1);
            new Audio(trueSound).play();
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
