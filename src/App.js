import React, { useState } from "react";
import Header from "./components/m-header";
import Footer from "./components/m-footer";
import Main from "./components/m-main";

const App = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [clickedChamps, setClickedChamps] = useState([]);

    const handleScore = () => {
        setScore(score + 1);
    };

    const handleHighScore = () => {
        if (score > highScore) {
            setHighScore(score);
        }
    };

    const handleClickedChamps = (newChamp) => {
        setClickedChamps([...clickedChamps, newChamp]);
        console.log(clickedChamps);
    };

    return (
        <>
            <Header score={score} highScore={highScore} />
            <Main clickedChamps={clickedChamps} handleClickedChamps={handleClickedChamps} />
            <Footer />
        </>
    );
};

export default App;
