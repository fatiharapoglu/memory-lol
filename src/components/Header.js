import icon from "../assets/LoL-icon.png";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-left">
                <div>
                    <img src={icon} alt="lol-icon" title="League of Legends" />
                </div>
                <div>The Memory League</div>
            </div>
            <div className="header-middle">
                HOW TO PLAY?{" "}
                <span className="how-to-play">
                    Your goal is to avoid clicking the same champion twice. Max score is 30!
                </span>
            </div>
            <div className="header-right">
                <span>
                    Score: <span id="score"> {props.score} </span>
                </span>
                <span>
                    High Score: <span id="high-score"> {props.highScore} </span>
                </span>
            </div>
        </header>
    );
};

export default Header;
