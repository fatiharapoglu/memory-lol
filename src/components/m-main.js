import React from "react";
import champions from "./c-champions";

const Main = (props) => {
    const display10 = () => {
        const numbers = [];

        const getRandomNumber = () => {
            const random = Math.floor(Math.random() * 30);
            if (numbers.includes(random)) return getRandomNumber();
            numbers.push(random);
            return random;
        };

        const getRandomImages = () => {
            const images = [];
            for (let i = 0; i < 10; i++) {
                images.push(getRandomNumber());
            }
            return images;
        };

        const images = getRandomImages();

        const checkDifferences = () => {
            const selectedChamps = [];
            for (let i = 0; i < 10; i++) {
                selectedChamps.push(champions[images[i]].props.id);
            }
            const clickedChamps = props.clickedChamps;
            if (clickedChamps.length === 30) return true;
            let diff = selectedChamps.some((x) => !clickedChamps.includes(x));
            return diff;
        };

        if (checkDifferences() === false) {
            return display10();
        } else {
            const renderJSX = (
                <div className={props.isGameOver ? "main disabled" : "main"}>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[0]]}
                        <span className="champ-name">{champions[images[0]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[1]]}
                        <span className="champ-name">{champions[images[1]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[2]]}
                        <span className="champ-name">{champions[images[2]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[3]]}
                        <span className="champ-name">{champions[images[3]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[4]]}
                        <span className="champ-name">{champions[images[4]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[5]]}
                        <span className="champ-name">{champions[images[5]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[6]]}
                        <span className="champ-name">{champions[images[6]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[7]]}
                        <span className="champ-name">{champions[images[7]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[8]]}
                        <span className="champ-name">{champions[images[8]].props.id}</span>
                    </div>
                    <div className="main-card" onClick={handleClicks}>
                        {champions[images[9]]}
                        <span className="champ-name">{champions[images[9]].props.id}</span>
                    </div>
                </div>
            );
            return renderJSX;
        }
    };

    const handleClicks = (e) => {
        props.handleClickedChamps(e.target.id);
    };

    return display10();
};

export default Main;
