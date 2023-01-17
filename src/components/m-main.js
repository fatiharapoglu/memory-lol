import React from "react";
import champions from "./c-champions";

const Main = () => {
    const numbers = [];
    const getRandomNumber = () => {
        const random = Math.floor(Math.random() * 30);
        if (numbers.includes(random)) return getRandomNumber();
        if (!numbers.includes(random)) {
            numbers.push(random);
        }
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

    return (
        <div className="main">
            <div className="main-card">
                {champions[images[0]]}
                <span className="champ-name">{champions[images[0]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[1]]}
                <span className="champ-name">{champions[images[1]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[2]]}
                <span className="champ-name">{champions[images[2]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[3]]}
                <span className="champ-name">{champions[images[3]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[4]]}
                <span className="champ-name">{champions[images[4]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[5]]}
                <span className="champ-name">{champions[images[5]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[6]]}
                <span className="champ-name">{champions[images[6]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[7]]}
                <span className="champ-name">{champions[images[7]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[8]]}
                <span className="champ-name">{champions[images[8]].props.id}</span>
            </div>
            <div className="main-card">
                {champions[images[9]]}
                <span className="champ-name">{champions[images[9]].props.id}</span>
            </div>
        </div>
    );
};

export default Main;
