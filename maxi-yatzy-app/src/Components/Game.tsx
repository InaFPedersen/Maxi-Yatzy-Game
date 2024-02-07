import { useState } from "react";
import Chance from "./Input-fields/Chance";
import Sum from "./Input-fields/Sum";
import TotalScore from "./Input-fields/TotalScore";
import Bonus from "./Select-boxes/Bonus";
import Cabin from "./Select-boxes/Cabin";
import FiveOfKind from "./Select-boxes/FiveOfKind";
import Fives from "./Select-boxes/Fives";
import FourOfKind from "./Select-boxes/FourOfKind";
import Fours from "./Select-boxes/Fours";
import FullStraight from "./Select-boxes/FullStraight";
import House from "./Select-boxes/House";
import LargeStraight from "./Select-boxes/LargeStraight";
import MaxiYatzy from "./Select-boxes/MaxiYatzy";
import OnePair from "./Select-boxes/OnePair";
import Ones from "./Select-boxes/Ones";
import Sixes from "./Select-boxes/Sixes";
import SmallStraight from "./Select-boxes/SmallStraight";
import ThreeOfKind from "./Select-boxes/ThreeOfKind";
import ThreePair from "./Select-boxes/ThreePair";
import Threes from "./Select-boxes/Threes";
import Tower from "./Select-boxes/Tower";
import TwoPair from "./Select-boxes/TwoPair";
import Twos from "./Select-boxes/Twos";

const Game = () => {
    // States for the game setup
    const [startNewGame, setStartNewGame] = useState(true);
    const [gameVariant, setGameVariant] = useState("");
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [twoPlayerChosen, setTwoPlayerChosen] = useState(false);
    const [threePlayerChosen, setThreePlayerChosen] = useState(false);
    const [fourPlayerChosen, setFourPlayerChosen] = useState(false);
    const [fivePlayerChosen, setFivePlayerChosen] = useState(false);
    const [sixPlayerChosen, setSixPlayerChosen] = useState(false);
    const [sevenPlayerChosen, setSevenPlayerChosen] = useState(false);
    const [eightPlayerChosen, setEightPlayerChosen] = useState(false);
    const [ninePlayerChosen, setNinePlayerChosen] = useState(false);
    const [tenPlayerChosen, setTenPlayerChosen] = useState(false);
    const [chosenHowManyPlayers, setChosenHowManyPlayers] = useState(false);
    const [twoPlayerGame, setTwoPlayerGame] = useState(false);
    const [threePlayerGame, setThreePlayerGame] = useState(false);
    const [fourPlayerGame, setFourPlayerGame] = useState(false);
    const [fivePlayerGame, setFivePlayerGame] = useState(false);
    const [sixPlayerGame, setSixPlayerGame] = useState(false);
    const [sevenPlayerGame, setSevenPlayerGame] = useState(false);
    const [eightPlayerGame, setEightPlayerGame] = useState(false);
    const [ninePlayerGame, setNinePlayerGame] = useState(false);
    const [tenPlayerGame, setTenPlayerGame] = useState(false);
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [player3, setPlayer3] = useState("");
    const [player4, setPlayer4] = useState("");
    const [player5, setPlayer5] = useState("");
    const [player6, setPlayer6] = useState("");
    const [player7, setPlayer7] = useState("");
    const [player8, setPlayer8] = useState("");
    const [player9, setPlayer9] = useState("");
    const [player10, setPlayer10] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [dice1number, setDice1Number] = useState("");
    const [dice2number, setDice2Number] = useState("");
    const [dice3number, setDice3Number] = useState("");
    const [dice4number, setDice4Number] = useState("");
    const [dice5number, setDice5Number] = useState("");
    const [dice6number, setDice6Number] = useState("");
    const [dice1CanBeChanged, setDice1CanBeChanged] = useState(true);
    const [dice2CanBeChanged, setDice2CanBeChanged] = useState(true);
    const [dice3CanBeChanged, setDice3CanBeChanged] = useState(true);
    const [dice4CanBeChanged, setDice4CanBeChanged] = useState(true);
    const [dice5CanBeChanged, setDice5CanBeChanged] = useState(true);
    const [dice6CanBeChanged, setDice6CanBeChanged] = useState(true);
    const [roundNr, setRoundNr] = useState("1");
    const [roundText, setRoundText] = useState("");
    const [turnNr, setTurnNr] = useState("");
    const randomDice1 = Math.floor(Math.random() * 6) + 1;
    const randomDice2 = Math.floor(Math.random() * 6) + 1;
    const randomDice3 = Math.floor(Math.random() * 6) + 1;
    const randomDice4 = Math.floor(Math.random() * 6) + 1;
    const randomDice5 = Math.floor(Math.random() * 6) + 1;
    const randomDice6 = Math.floor(Math.random() * 6) + 1;

    const HoldDice1 = () => {
        setDice1CanBeChanged(false);
    };
    const HoldDice2 = () => {
        setDice2CanBeChanged(false);
    };
    const HoldDice3 = () => {
        setDice3CanBeChanged(false);
    };
    const HoldDice4 = () => {
        setDice4CanBeChanged(false);
    };
    const HoldDice5 = () => {
        setDice5CanBeChanged(false);
    };
    const HoldDice6 = () => {
        setDice6CanBeChanged(false);
    };

    // Roll all the dices, but check if any dice is hold
    const RollDices = () => {
        if (dice1CanBeChanged) {
            setDice1Number(`${randomDice1}`);
        }
        if (dice2CanBeChanged) {
            setDice2Number(`${randomDice2}`);
        }
        if (dice3CanBeChanged) {
            setDice3Number(`${randomDice3}`);
        }
        if (dice4CanBeChanged) {
            setDice4Number(`${randomDice4}`);
        }
        if (dice5CanBeChanged) {
            setDice5Number(`${randomDice5}`);
        }
        if (dice6CanBeChanged) {
            setDice6Number(`${randomDice6}`);
        }
        setDice1CanBeChanged(true);
        setDice2CanBeChanged(true);
        setDice3CanBeChanged(true);
        setDice4CanBeChanged(true);
        setDice5CanBeChanged(true);
        setDice6CanBeChanged(true);
    };

    // Setting character names based on how many players is playing!
    const renderCharacterNaming = () => {
        if (numberOfPlayers === "2") {
            setTwoPlayerChosen(true);
            setThreePlayerChosen(false);
            setFourPlayerChosen(false);
            setFivePlayerChosen(false);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(false);
            setNinePlayerChosen(false);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "3") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(true);
            setFourPlayerChosen(false);
            setFivePlayerChosen(false);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(false);
            setNinePlayerChosen(false);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "4") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(false);
            setFourPlayerChosen(true);
            setFivePlayerChosen(false);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(false);
            setNinePlayerChosen(false);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "5") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(false);
            setFourPlayerChosen(false);
            setFivePlayerChosen(true);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(false);
            setNinePlayerChosen(false);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "6") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(false);
            setFourPlayerChosen(false);
            setFivePlayerChosen(false);
            setSixPlayerChosen(true);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(false);
            setNinePlayerChosen(false);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "7") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(false);
            setFourPlayerChosen(false);
            setFivePlayerChosen(false);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(true);
            setEightPlayerChosen(false);
            setNinePlayerChosen(false);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "8") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(false);
            setFourPlayerChosen(false);
            setFivePlayerChosen(false);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(true);
            setNinePlayerChosen(false);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "9") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(false);
            setFourPlayerChosen(false);
            setFivePlayerChosen(false);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(false);
            setNinePlayerChosen(true);
            setTenPlayerChosen(false);
            setChosenHowManyPlayers(true);
        } else if (numberOfPlayers === "10") {
            setTwoPlayerChosen(false);
            setThreePlayerChosen(false);
            setFourPlayerChosen(false);
            setFivePlayerChosen(false);
            setSixPlayerChosen(false);
            setSevenPlayerChosen(false);
            setEightPlayerChosen(false);
            setNinePlayerChosen(false);
            setTenPlayerChosen(true);
            setChosenHowManyPlayers(true);
        } else {
            alert("You should fill out how many players you are!");
        }
    };

    // Build games based on how many players are playing
    const BuildTheGame = () => {
        if (twoPlayerChosen) {
            setTwoPlayerGame(true);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        }
        if (threePlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(true);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        }
        if (fourPlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(true);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        }
        if (fivePlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(true);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        }
        if (sixPlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(true);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        }
        if (sevenPlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(true);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        }
        if (eightPlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(true);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        }
        if (ninePlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(true);
            setTenPlayerGame(false);
        }
        if (tenPlayerChosen) {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(true);
        }
        setChosenHowManyPlayers(false);
        setStartNewGame(false);
        setGameStarted(true);
    };

    // Start a new game from scratch
    const StartNewGame = () => {
        setStartNewGame(true);
        setTwoPlayerGame(false);
        setThreePlayerGame(false);
        setFourPlayerGame(false);
        setFivePlayerGame(false);
        setSixPlayerGame(false);
        setSevenPlayerGame(false);
        setEightPlayerGame(false);
        setNinePlayerGame(false);
        setTenPlayerGame(false);
        setTwoPlayerChosen(false);
        setThreePlayerChosen(false);
        setFourPlayerChosen(false);
        setFivePlayerChosen(false);
        setSixPlayerChosen(false);
        setSevenPlayerChosen(false);
        setEightPlayerChosen(false);
        setNinePlayerChosen(false);
        setTenPlayerChosen(false);
        setChosenHowManyPlayers(false);
        setGameStarted(false);
        setPlayer1("");
        setPlayer2("");
        setPlayer3("");
        setPlayer4("");
        setPlayer5("");
        setPlayer6("");
        setPlayer7("");
        setPlayer8("");
        setPlayer9("");
        setPlayer10("");
    };

    // Restart the game you just played
    const RestartGame = () => {
        setStartNewGame(true);
        setTwoPlayerGame(false);
        setThreePlayerGame(false);
        setFourPlayerGame(false);
        setFivePlayerGame(false);
        setSixPlayerGame(false);
        setSevenPlayerGame(false);
        setEightPlayerGame(false);
        setNinePlayerGame(false);
        setTenPlayerGame(false);
        setTwoPlayerChosen(false);
        setThreePlayerChosen(false);
        setFourPlayerChosen(false);
        setFivePlayerChosen(false);
        setSixPlayerChosen(false);
        setSevenPlayerChosen(false);
        setEightPlayerChosen(false);
        setNinePlayerChosen(false);
        setTenPlayerChosen(false);
        setChosenHowManyPlayers(false);
        setGameStarted(false);
    };

    // Quit game and close window
    const EndGame = () => {
        setStartNewGame(false);
        setTwoPlayerGame(false);
        setThreePlayerGame(false);
        setFourPlayerGame(false);
        setFivePlayerGame(false);
        setSixPlayerGame(false);
        setSevenPlayerGame(false);
        setEightPlayerGame(false);
        setNinePlayerGame(false);
        setTenPlayerGame(false);
        setTwoPlayerChosen(false);
        setThreePlayerChosen(false);
        setFourPlayerChosen(false);
        setFivePlayerChosen(false);
        setSixPlayerChosen(false);
        setSevenPlayerChosen(false);
        setEightPlayerChosen(false);
        setNinePlayerChosen(false);
        setTenPlayerChosen(false);
        setChosenHowManyPlayers(false);
        window.close();
    };

    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div>
                {startNewGame ? (
                    <div>
                        <h2 style={{ alignSelf: "center" }}>Game setup</h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontFamily: "monospace",
                                fontSize: "24px",
                            }}
                        >
                            <div style={{ marginLeft: "100px" }}>
                                <label>How do you want to play the game?</label>
                                <select
                                    id="game-variant"
                                    value={gameVariant}
                                    onChange={(e) =>
                                        setGameVariant(e.target.value)
                                    }
                                    style={{
                                        marginLeft: "20px",
                                        fontSize: "24px",
                                    }}
                                >
                                    <option></option>
                                    <option>Ordered</option>
                                    <option>Random</option>
                                </select>
                            </div>
                            <div style={{ marginLeft: "100px" }}>
                                <label>
                                    How many players are going to play?
                                </label>
                                <select
                                    id="number-of-players"
                                    value={numberOfPlayers}
                                    onChange={(e) =>
                                        setNumberOfPlayers(e.target.value)
                                    }
                                    style={{
                                        marginLeft: "20px",
                                        fontSize: "24px",
                                    }}
                                >
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <button
                                onClick={renderCharacterNaming}
                                id="submit-button"
                                style={{ margin: "100px" }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {chosenHowManyPlayers ? (
                    <div>
                        <h2>Insert the players names: </h2>
                        {twoPlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div>
                                    <label>Player 1:</label>
                                    <input
                                        id="player1"
                                        type="text"
                                        value={player1}
                                        onChange={(e) =>
                                            setPlayer1(e.target.value)
                                        }
                                        style={{
                                            marginLeft: "10px",
                                            alignItems: "center",
                                            fontSize: "24px",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Player 2:</label>
                                    <input
                                        id="player2"
                                        type="text"
                                        value={player2}
                                        onChange={(e) =>
                                            setPlayer2(e.target.value)
                                        }
                                        style={{
                                            marginLeft: "10px",
                                            alignItems: "center",
                                            fontSize: "24px",
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {threePlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div>
                                    <label>Player 1:</label>
                                    <input
                                        id="player1"
                                        type="text"
                                        value={player1}
                                        onChange={(e) =>
                                            setPlayer1(e.target.value)
                                        }
                                        style={{
                                            marginLeft: "10px",
                                            alignItems: "center",
                                            fontSize: "24px",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Player 2:</label>
                                    <input
                                        id="player2"
                                        type="text"
                                        value={player2}
                                        onChange={(e) =>
                                            setPlayer2(e.target.value)
                                        }
                                        style={{
                                            marginLeft: "10px",
                                            alignItems: "center",
                                            fontSize: "24px",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label>Player 3:</label>
                                    <input
                                        id="player3"
                                        type="text"
                                        value={player3}
                                        onChange={(e) =>
                                            setPlayer3(e.target.value)
                                        }
                                        style={{
                                            marginLeft: "10px",
                                            alignItems: "center",
                                            fontSize: "24px",
                                        }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {fourPlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 1:</label>
                                        <input
                                            id="player1"
                                            type="text"
                                            value={player1}
                                            onChange={(e) =>
                                                setPlayer1(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 2:</label>
                                        <input
                                            id="player2"
                                            type="text"
                                            value={player2}
                                            onChange={(e) =>
                                                setPlayer2(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 3:</label>
                                        <input
                                            id="player3"
                                            type="text"
                                            value={player3}
                                            onChange={(e) =>
                                                setPlayer3(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 4:</label>
                                        <input
                                            id="player4"
                                            type="text"
                                            value={player4}
                                            onChange={(e) =>
                                                setPlayer4(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {fivePlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 1:</label>
                                        <input
                                            id="player1"
                                            type="text"
                                            value={player1}
                                            onChange={(e) =>
                                                setPlayer1(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 2:</label>
                                        <input
                                            id="player2"
                                            type="text"
                                            value={player2}
                                            onChange={(e) =>
                                                setPlayer2(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 3:</label>
                                        <input
                                            id="player3"
                                            type="text"
                                            value={player3}
                                            onChange={(e) =>
                                                setPlayer3(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 4:</label>
                                        <input
                                            id="player4"
                                            type="text"
                                            value={player4}
                                            onChange={(e) =>
                                                setPlayer4(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 5:</label>
                                        <input
                                            id="player5"
                                            type="text"
                                            value={player5}
                                            onChange={(e) =>
                                                setPlayer5(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {sixPlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 1:</label>
                                        <input
                                            id="player1"
                                            type="text"
                                            value={player1}
                                            onChange={(e) =>
                                                setPlayer1(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 2:</label>
                                        <input
                                            id="player2"
                                            type="text"
                                            value={player2}
                                            onChange={(e) =>
                                                setPlayer2(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 3:</label>
                                        <input
                                            id="player3"
                                            type="text"
                                            value={player3}
                                            onChange={(e) =>
                                                setPlayer3(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 4:</label>
                                        <input
                                            id="player4"
                                            type="text"
                                            value={player4}
                                            onChange={(e) =>
                                                setPlayer4(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 5:</label>
                                        <input
                                            id="player5"
                                            type="text"
                                            value={player5}
                                            onChange={(e) =>
                                                setPlayer5(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 6:</label>
                                        <input
                                            id="player6"
                                            type="text"
                                            value={player6}
                                            onChange={(e) =>
                                                setPlayer6(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {sevenPlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 1:</label>
                                        <input
                                            id="player1"
                                            type="text"
                                            value={player1}
                                            onChange={(e) =>
                                                setPlayer1(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 2:</label>
                                        <input
                                            id="player2"
                                            type="text"
                                            value={player2}
                                            onChange={(e) =>
                                                setPlayer2(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 3:</label>
                                        <input
                                            id="player3"
                                            type="text"
                                            value={player3}
                                            onChange={(e) =>
                                                setPlayer3(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 4:</label>
                                        <input
                                            id="player4"
                                            type="text"
                                            value={player4}
                                            onChange={(e) =>
                                                setPlayer4(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 5:</label>
                                        <input
                                            id="player5"
                                            type="text"
                                            value={player5}
                                            onChange={(e) =>
                                                setPlayer5(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 6:</label>
                                        <input
                                            id="player6"
                                            type="text"
                                            value={player6}
                                            onChange={(e) =>
                                                setPlayer6(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 7:</label>
                                        <input
                                            id="player7"
                                            type="text"
                                            value={player7}
                                            onChange={(e) =>
                                                setPlayer7(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {eightPlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 1:</label>
                                        <input
                                            id="player1"
                                            type="text"
                                            value={player1}
                                            onChange={(e) =>
                                                setPlayer1(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 2:</label>
                                        <input
                                            id="player2"
                                            type="text"
                                            value={player2}
                                            onChange={(e) =>
                                                setPlayer2(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 3:</label>
                                        <input
                                            id="player3"
                                            type="text"
                                            value={player3}
                                            onChange={(e) =>
                                                setPlayer3(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 4:</label>
                                        <input
                                            id="player4"
                                            type="text"
                                            value={player4}
                                            onChange={(e) =>
                                                setPlayer4(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 5:</label>
                                        <input
                                            id="player5"
                                            type="text"
                                            value={player5}
                                            onChange={(e) =>
                                                setPlayer5(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 6:</label>
                                        <input
                                            id="player6"
                                            type="text"
                                            value={player6}
                                            onChange={(e) =>
                                                setPlayer6(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 7:</label>
                                        <input
                                            id="player7"
                                            type="text"
                                            value={player7}
                                            onChange={(e) =>
                                                setPlayer7(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 8:</label>
                                        <input
                                            id="player8"
                                            type="text"
                                            value={player8}
                                            onChange={(e) =>
                                                setPlayer8(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {ninePlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 1:</label>
                                        <input
                                            id="player1"
                                            type="text"
                                            value={player1}
                                            onChange={(e) =>
                                                setPlayer1(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 2:</label>
                                        <input
                                            id="player2"
                                            type="text"
                                            value={player2}
                                            onChange={(e) =>
                                                setPlayer2(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 3:</label>
                                        <input
                                            id="player3"
                                            type="text"
                                            value={player3}
                                            onChange={(e) =>
                                                setPlayer3(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 4:</label>
                                        <input
                                            id="player4"
                                            type="text"
                                            value={player4}
                                            onChange={(e) =>
                                                setPlayer4(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 5:</label>
                                        <input
                                            id="player5"
                                            type="text"
                                            value={player5}
                                            onChange={(e) =>
                                                setPlayer5(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 6:</label>
                                        <input
                                            id="player6"
                                            type="text"
                                            value={player6}
                                            onChange={(e) =>
                                                setPlayer6(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 7:</label>
                                        <input
                                            id="player7"
                                            type="text"
                                            value={player7}
                                            onChange={(e) =>
                                                setPlayer7(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 8:</label>
                                        <input
                                            id="player8"
                                            type="text"
                                            value={player8}
                                            onChange={(e) =>
                                                setPlayer8(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 9:</label>
                                        <input
                                            id="player9"
                                            type="text"
                                            value={player9}
                                            onChange={(e) =>
                                                setPlayer9(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        {tenPlayerChosen ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-evenly",
                                    fontSize: "24px",
                                    marginBottom: "20px",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 1:</label>
                                        <input
                                            id="player1"
                                            type="text"
                                            value={player1}
                                            onChange={(e) =>
                                                setPlayer1(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 2:</label>
                                        <input
                                            id="player2"
                                            type="text"
                                            value={player2}
                                            onChange={(e) =>
                                                setPlayer2(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 3:</label>
                                        <input
                                            id="player3"
                                            type="text"
                                            value={player3}
                                            onChange={(e) =>
                                                setPlayer3(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 4:</label>
                                        <input
                                            id="player4"
                                            type="text"
                                            value={player4}
                                            onChange={(e) =>
                                                setPlayer4(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 5:</label>
                                        <input
                                            id="player5"
                                            type="text"
                                            value={player5}
                                            onChange={(e) =>
                                                setPlayer5(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 6:</label>
                                        <input
                                            id="player6"
                                            type="text"
                                            value={player6}
                                            onChange={(e) =>
                                                setPlayer6(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 7:</label>
                                        <input
                                            id="player7"
                                            type="text"
                                            value={player7}
                                            onChange={(e) =>
                                                setPlayer7(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 8:</label>
                                        <input
                                            id="player8"
                                            type="text"
                                            value={player8}
                                            onChange={(e) =>
                                                setPlayer8(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Player 9:</label>
                                        <input
                                            id="player9"
                                            type="text"
                                            value={player9}
                                            onChange={(e) =>
                                                setPlayer9(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        fontSize: "24px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div>
                                        <label>Player 10:</label>
                                        <input
                                            id="player10"
                                            type="text"
                                            value={player10}
                                            onChange={(e) =>
                                                setPlayer10(e.target.value)
                                            }
                                            style={{
                                                marginLeft: "10px",
                                                alignItems: "center",
                                                fontSize: "24px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        <button onClick={BuildTheGame}>Start game</button>
                    </div>
                ) : (
                    <></>
                )}
                {twoPlayerGame ? (
                    <div
                        style={{
                            width: "400px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {threePlayerGame ? (
                    <div
                        style={{
                            width: "400px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {fourPlayerGame ? (
                    <div
                        style={{
                            width: "400px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                            <div
                                className="player4"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player4}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                                <div className="player4-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                                <div className="player4-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                                <div className="player4-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                                <div className="player4-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                                <div className="player4-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                                <div className="player4-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player4-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                                <div className="player4-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player4-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player4-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player4-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player4-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player4-4-of-kind">
                                    <FourOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player4-5-of-kind">
                                    <FiveOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player4-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player4-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player4-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                                <div className="player4-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                                <div className="player4-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                                <div className="player4-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                                <div className="player4-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player4-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player4-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {fivePlayerGame ? (
                    <div
                        style={{
                            width: "500px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                            <div
                                className="player4"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player4}
                            </div>
                            <div
                                className="player5"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player5}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                                <div className="player4-ones">
                                    <Ones />
                                </div>
                                <div className="player5-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                                <div className="player4-twos">
                                    <Twos />
                                </div>
                                <div className="player5-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                                <div className="player4-threes">
                                    <Threes />
                                </div>
                                <div className="player5-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                                <div className="player4-fours">
                                    <Fours />
                                </div>
                                <div className="player5-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                                <div className="player4-fives">
                                    <Fives />
                                </div>
                                <div className="player5-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                                <div className="player4-sixes">
                                    <Sixes />
                                </div>
                                <div className="player5-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player4-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player5-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                                <div className="player4-bonus">
                                    <Bonus />
                                </div>
                                <div className="player5-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player4-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player5-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player4-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player5-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player4-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player5-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player4-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player5-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player4-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player5-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player4-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player5-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player4-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player5-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player4-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player5-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player4-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player5-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                                <div className="player4-cabin">
                                    <Cabin />
                                </div>
                                <div className="player5-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                                <div className="player4-house">
                                    <House />
                                </div>
                                <div className="player5-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                                <div className="player4-tower">
                                    <Tower />
                                </div>
                                <div className="player5-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                                <div className="player4-Chance">
                                    <Chance />
                                </div>
                                <div className="player5-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player4-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player5-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player4-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player5-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {sixPlayerGame ? (
                    <div
                        style={{
                            width: "600px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                            <div
                                className="player4"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player4}
                            </div>
                            <div
                                className="player5"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player5}
                            </div>
                            <div
                                className="player6"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player6}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                                <div className="player4-ones">
                                    <Ones />
                                </div>
                                <div className="player5-ones">
                                    <Ones />
                                </div>
                                <div className="player6-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                                <div className="player4-twos">
                                    <Twos />
                                </div>
                                <div className="player5-twos">
                                    <Twos />
                                </div>
                                <div className="player6-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                                <div className="player4-threes">
                                    <Threes />
                                </div>
                                <div className="player5-threes">
                                    <Threes />
                                </div>
                                <div className="player6-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                                <div className="player4-fours">
                                    <Fours />
                                </div>
                                <div className="player5-fours">
                                    <Fours />
                                </div>
                                <div className="player6-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                                <div className="player4-fives">
                                    <Fives />
                                </div>
                                <div className="player5-fives">
                                    <Fives />
                                </div>
                                <div className="player6-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                                <div className="player4-sixes">
                                    <Sixes />
                                </div>
                                <div className="player5-sixes">
                                    <Sixes />
                                </div>
                                <div className="player6-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player4-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player5-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player6-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                                <div className="player4-bonus">
                                    <Bonus />
                                </div>
                                <div className="player5-bonus">
                                    <Bonus />
                                </div>
                                <div className="player6-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player4-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player5-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player6-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player4-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player5-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player6-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player4-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player5-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player6-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player4-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player5-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player4-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player5-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player4-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player5-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player4-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player5-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player6-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player4-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player5-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player6-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player4-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player5-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player6-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                                <div className="player4-cabin">
                                    <Cabin />
                                </div>
                                <div className="player5-cabin">
                                    <Cabin />
                                </div>
                                <div className="player6-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                                <div className="player4-house">
                                    <House />
                                </div>
                                <div className="player5-house">
                                    <House />
                                </div>
                                <div className="player6-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                                <div className="player4-tower">
                                    <Tower />
                                </div>
                                <div className="player5-tower">
                                    <Tower />
                                </div>
                                <div className="player6-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                                <div className="player4-Chance">
                                    <Chance />
                                </div>
                                <div className="player5-Chance">
                                    <Chance />
                                </div>
                                <div className="player6-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player4-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player5-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player6-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player4-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player5-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player6-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {sevenPlayerGame ? (
                    <div
                        style={{
                            width: "700px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                            <div
                                className="player4"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player4}
                            </div>
                            <div
                                className="player5"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player5}
                            </div>
                            <div
                                className="player6"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player6}
                            </div>
                            <div
                                className="player7"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player7}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                                <div className="player4-ones">
                                    <Ones />
                                </div>
                                <div className="player5-ones">
                                    <Ones />
                                </div>
                                <div className="player6-ones">
                                    <Ones />
                                </div>
                                <div className="player7-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                                <div className="player4-twos">
                                    <Twos />
                                </div>
                                <div className="player5-twos">
                                    <Twos />
                                </div>
                                <div className="player6-twos">
                                    <Twos />
                                </div>
                                <div className="player7-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                                <div className="player4-threes">
                                    <Threes />
                                </div>
                                <div className="player5-threes">
                                    <Threes />
                                </div>
                                <div className="player6-threes">
                                    <Threes />
                                </div>
                                <div className="player7-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                                <div className="player4-fours">
                                    <Fours />
                                </div>
                                <div className="player5-fours">
                                    <Fours />
                                </div>
                                <div className="player6-fours">
                                    <Fours />
                                </div>
                                <div className="player7-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                                <div className="player4-fives">
                                    <Fives />
                                </div>
                                <div className="player5-fives">
                                    <Fives />
                                </div>
                                <div className="player6-fives">
                                    <Fives />
                                </div>
                                <div className="player7-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                                <div className="player4-sixes">
                                    <Sixes />
                                </div>
                                <div className="player5-sixes">
                                    <Sixes />
                                </div>
                                <div className="player6-sixes">
                                    <Sixes />
                                </div>
                                <div className="player7-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player4-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player5-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player6-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player7-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                                <div className="player4-bonus">
                                    <Bonus />
                                </div>
                                <div className="player5-bonus">
                                    <Bonus />
                                </div>
                                <div className="player6-bonus">
                                    <Bonus />
                                </div>
                                <div className="player7-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player4-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player5-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player6-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player7-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player4-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player5-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player6-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player7-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player4-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player5-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player6-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player7-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player4-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player5-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player4-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player5-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player4-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player5-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player4-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player5-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player6-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player7-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player4-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player5-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player6-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player7-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player4-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player5-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player6-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player7-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                                <div className="player4-cabin">
                                    <Cabin />
                                </div>
                                <div className="player5-cabin">
                                    <Cabin />
                                </div>
                                <div className="player6-cabin">
                                    <Cabin />
                                </div>
                                <div className="player7-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                                <div className="player4-house">
                                    <House />
                                </div>
                                <div className="player5-house">
                                    <House />
                                </div>
                                <div className="player6-house">
                                    <House />
                                </div>
                                <div className="player7-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                                <div className="player4-tower">
                                    <Tower />
                                </div>
                                <div className="player5-tower">
                                    <Tower />
                                </div>
                                <div className="player6-tower">
                                    <Tower />
                                </div>
                                <div className="player7-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                                <div className="player4-Chance">
                                    <Chance />
                                </div>
                                <div className="player5-Chance">
                                    <Chance />
                                </div>
                                <div className="player6-Chance">
                                    <Chance />
                                </div>
                                <div className="player7-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player4-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player5-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player6-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player7-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player4-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player5-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player6-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player7-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {eightPlayerGame ? (
                    <div
                        style={{
                            width: "800px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                            <div
                                className="player4"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player4}
                            </div>
                            <div
                                className="player5"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player5}
                            </div>
                            <div
                                className="player6"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player6}
                            </div>
                            <div
                                className="player7"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player7}
                            </div>
                            <div
                                className="player8"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player8}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                                <div className="player4-ones">
                                    <Ones />
                                </div>
                                <div className="player5-ones">
                                    <Ones />
                                </div>
                                <div className="player6-ones">
                                    <Ones />
                                </div>
                                <div className="player7-ones">
                                    <Ones />
                                </div>
                                <div className="player8-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                                <div className="player4-twos">
                                    <Twos />
                                </div>
                                <div className="player5-twos">
                                    <Twos />
                                </div>
                                <div className="player6-twos">
                                    <Twos />
                                </div>
                                <div className="player7-twos">
                                    <Twos />
                                </div>
                                <div className="player8-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                                <div className="player4-threes">
                                    <Threes />
                                </div>
                                <div className="player5-threes">
                                    <Threes />
                                </div>
                                <div className="player6-threes">
                                    <Threes />
                                </div>
                                <div className="player7-threes">
                                    <Threes />
                                </div>
                                <div className="player8-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                                <div className="player4-fours">
                                    <Fours />
                                </div>
                                <div className="player5-fours">
                                    <Fours />
                                </div>
                                <div className="player6-fours">
                                    <Fours />
                                </div>
                                <div className="player7-fours">
                                    <Fours />
                                </div>
                                <div className="player8-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                                <div className="player4-fives">
                                    <Fives />
                                </div>
                                <div className="player5-fives">
                                    <Fives />
                                </div>
                                <div className="player6-fives">
                                    <Fives />
                                </div>
                                <div className="player7-fives">
                                    <Fives />
                                </div>
                                <div className="player8-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                                <div className="player4-sixes">
                                    <Sixes />
                                </div>
                                <div className="player5-sixes">
                                    <Sixes />
                                </div>
                                <div className="player6-sixes">
                                    <Sixes />
                                </div>
                                <div className="player7-sixes">
                                    <Sixes />
                                </div>
                                <div className="player8-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player4-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player5-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player6-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player7-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player8-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                                <div className="player4-bonus">
                                    <Bonus />
                                </div>
                                <div className="player5-bonus">
                                    <Bonus />
                                </div>
                                <div className="player6-bonus">
                                    <Bonus />
                                </div>
                                <div className="player7-bonus">
                                    <Bonus />
                                </div>
                                <div className="player8-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player4-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player5-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player6-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player7-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player8-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player4-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player5-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player6-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player7-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player8-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player4-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player5-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player6-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player7-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player8-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player4-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player5-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player4-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player5-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player4-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player5-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player4-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player5-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player6-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player7-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player8-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player4-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player5-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player6-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player7-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player8-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player4-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player5-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player6-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player7-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player8-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                                <div className="player4-cabin">
                                    <Cabin />
                                </div>
                                <div className="player5-cabin">
                                    <Cabin />
                                </div>
                                <div className="player6-cabin">
                                    <Cabin />
                                </div>
                                <div className="player7-cabin">
                                    <Cabin />
                                </div>
                                <div className="player8-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                                <div className="player4-house">
                                    <House />
                                </div>
                                <div className="player5-house">
                                    <House />
                                </div>
                                <div className="player6-house">
                                    <House />
                                </div>
                                <div className="player7-house">
                                    <House />
                                </div>
                                <div className="player8-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                                <div className="player4-tower">
                                    <Tower />
                                </div>
                                <div className="player5-tower">
                                    <Tower />
                                </div>
                                <div className="player6-tower">
                                    <Tower />
                                </div>
                                <div className="player7-tower">
                                    <Tower />
                                </div>
                                <div className="player8-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                                <div className="player4-Chance">
                                    <Chance />
                                </div>
                                <div className="player5-Chance">
                                    <Chance />
                                </div>
                                <div className="player6-Chance">
                                    <Chance />
                                </div>
                                <div className="player7-Chance">
                                    <Chance />
                                </div>
                                <div className="player8-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player4-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player5-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player6-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player7-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player8-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player4-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player5-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player6-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player7-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player8-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {ninePlayerGame ? (
                    <div
                        style={{
                            width: "900px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                            <div
                                className="player4"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player4}
                            </div>
                            <div
                                className="player5"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player5}
                            </div>
                            <div
                                className="player6"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player6}
                            </div>
                            <div
                                className="player7"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player7}
                            </div>
                            <div
                                className="player8"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player8}
                            </div>
                            <div
                                className="player9"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player9}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                                <div className="player4-ones">
                                    <Ones />
                                </div>
                                <div className="player5-ones">
                                    <Ones />
                                </div>
                                <div className="player6-ones">
                                    <Ones />
                                </div>
                                <div className="player7-ones">
                                    <Ones />
                                </div>
                                <div className="player8-ones">
                                    <Ones />
                                </div>
                                <div className="player9-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                                <div className="player4-twos">
                                    <Twos />
                                </div>
                                <div className="player5-twos">
                                    <Twos />
                                </div>
                                <div className="player6-twos">
                                    <Twos />
                                </div>
                                <div className="player7-twos">
                                    <Twos />
                                </div>
                                <div className="player8-twos">
                                    <Twos />
                                </div>
                                <div className="player9-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                                <div className="player4-threes">
                                    <Threes />
                                </div>
                                <div className="player5-threes">
                                    <Threes />
                                </div>
                                <div className="player6-threes">
                                    <Threes />
                                </div>
                                <div className="player7-threes">
                                    <Threes />
                                </div>
                                <div className="player8-threes">
                                    <Threes />
                                </div>
                                <div className="player9-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                                <div className="player4-fours">
                                    <Fours />
                                </div>
                                <div className="player5-fours">
                                    <Fours />
                                </div>
                                <div className="player6-fours">
                                    <Fours />
                                </div>
                                <div className="player7-fours">
                                    <Fours />
                                </div>
                                <div className="player8-fours">
                                    <Fours />
                                </div>
                                <div className="player9-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                                <div className="player4-fives">
                                    <Fives />
                                </div>
                                <div className="player5-fives">
                                    <Fives />
                                </div>
                                <div className="player6-fives">
                                    <Fives />
                                </div>
                                <div className="player7-fives">
                                    <Fives />
                                </div>
                                <div className="player8-fives">
                                    <Fives />
                                </div>
                                <div className="player9-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                                <div className="player4-sixes">
                                    <Sixes />
                                </div>
                                <div className="player5-sixes">
                                    <Sixes />
                                </div>
                                <div className="player6-sixes">
                                    <Sixes />
                                </div>
                                <div className="player7-sixes">
                                    <Sixes />
                                </div>
                                <div className="player8-sixes">
                                    <Sixes />
                                </div>
                                <div className="player9-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player4-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player5-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player6-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player7-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player8-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player9-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                                <div className="player4-bonus">
                                    <Bonus />
                                </div>
                                <div className="player5-bonus">
                                    <Bonus />
                                </div>
                                <div className="player6-bonus">
                                    <Bonus />
                                </div>
                                <div className="player7-bonus">
                                    <Bonus />
                                </div>
                                <div className="player8-bonus">
                                    <Bonus />
                                </div>
                                <div className="player9-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player4-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player5-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player6-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player7-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player8-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player9-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player4-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player5-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player6-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player7-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player8-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player9-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player4-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player5-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player6-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player7-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player8-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player9-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player4-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player5-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player9-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player4-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player5-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player9-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player4-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player5-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player9-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player4-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player5-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player6-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player7-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player8-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player9-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player4-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player5-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player6-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player7-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player8-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player9-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player4-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player5-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player6-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player7-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player8-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player9-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                                <div className="player4-cabin">
                                    <Cabin />
                                </div>
                                <div className="player5-cabin">
                                    <Cabin />
                                </div>
                                <div className="player6-cabin">
                                    <Cabin />
                                </div>
                                <div className="player7-cabin">
                                    <Cabin />
                                </div>
                                <div className="player8-cabin">
                                    <Cabin />
                                </div>
                                <div className="player9-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                                <div className="player4-house">
                                    <House />
                                </div>
                                <div className="player5-house">
                                    <House />
                                </div>
                                <div className="player6-house">
                                    <House />
                                </div>
                                <div className="player7-house">
                                    <House />
                                </div>
                                <div className="player8-house">
                                    <House />
                                </div>
                                <div className="player9-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                                <div className="player4-tower">
                                    <Tower />
                                </div>
                                <div className="player5-tower">
                                    <Tower />
                                </div>
                                <div className="player6-tower">
                                    <Tower />
                                </div>
                                <div className="player7-tower">
                                    <Tower />
                                </div>
                                <div className="player8-tower">
                                    <Tower />
                                </div>
                                <div className="player9-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                                <div className="player4-Chance">
                                    <Chance />
                                </div>
                                <div className="player5-Chance">
                                    <Chance />
                                </div>
                                <div className="player6-Chance">
                                    <Chance />
                                </div>
                                <div className="player7-Chance">
                                    <Chance />
                                </div>
                                <div className="player8-Chance">
                                    <Chance />
                                </div>
                                <div className="player9-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player4-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player5-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player6-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player7-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player8-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player9-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player4-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player5-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player6-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player7-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player8-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player9-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {tenPlayerGame ? (
                    <div
                        style={{
                            width: "1000px",
                            backgroundColor: "aliceblue",
                            border: "1px solid brown",
                        }}
                    >
                        <h2>Game sheet</h2>
                        <div
                            className="table-header"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                border: "1px solid brown",
                                marginBottom: "10px",
                            }}
                        >
                            <div
                                className="names"
                                style={{ fontWeight: "bolder" }}
                            >
                                Names:
                            </div>
                            <div
                                className="player1"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player1}
                            </div>
                            <div
                                className="player2"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player2}
                            </div>
                            <div
                                className="player3"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player3}
                            </div>
                            <div
                                className="player4"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player4}
                            </div>
                            <div
                                className="player5"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player5}
                            </div>
                            <div
                                className="player6"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player6}
                            </div>
                            <div
                                className="player7"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player7}
                            </div>
                            <div
                                className="player8"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player8}
                            </div>
                            <div
                                className="player9"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player9}
                            </div>
                            <div
                                className="player10"
                                style={{ fontWeight: "bolder" }}
                            >
                                {player10}
                            </div>
                        </div>
                        <div
                            className="top-part"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                border: "2px solid black",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="table-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="ones"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Ones:
                                </div>
                                <div className="player1-ones">
                                    <Ones />
                                </div>
                                <div className="player2-ones">
                                    <Ones />
                                </div>
                                <div className="player3-ones">
                                    <Ones />
                                </div>
                                <div className="player4-ones">
                                    <Ones />
                                </div>
                                <div className="player5-ones">
                                    <Ones />
                                </div>
                                <div className="player6-ones">
                                    <Ones />
                                </div>
                                <div className="player7-ones">
                                    <Ones />
                                </div>
                                <div className="player8-ones">
                                    <Ones />
                                </div>
                                <div className="player9-ones">
                                    <Ones />
                                </div>
                                <div className="player10-ones">
                                    <Ones />
                                </div>
                            </div>
                            <div
                                className="table-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="twos"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Twos:
                                </div>
                                <div className="player1-twos">
                                    <Twos />
                                </div>
                                <div className="player2-twos">
                                    <Twos />
                                </div>
                                <div className="player3-twos">
                                    <Twos />
                                </div>
                                <div className="player4-twos">
                                    <Twos />
                                </div>
                                <div className="player5-twos">
                                    <Twos />
                                </div>
                                <div className="player6-twos">
                                    <Twos />
                                </div>
                                <div className="player7-twos">
                                    <Twos />
                                </div>
                                <div className="player8-twos">
                                    <Twos />
                                </div>
                                <div className="player9-twos">
                                    <Twos />
                                </div>
                                <div className="player10-twos">
                                    <Twos />
                                </div>
                            </div>
                            <div
                                className="table-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="threes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Threes:
                                </div>
                                <div className="player1-threes">
                                    <Threes />
                                </div>
                                <div className="player2-threes">
                                    <Threes />
                                </div>
                                <div className="player3-threes">
                                    <Threes />
                                </div>
                                <div className="player4-threes">
                                    <Threes />
                                </div>
                                <div className="player5-threes">
                                    <Threes />
                                </div>
                                <div className="player6-threes">
                                    <Threes />
                                </div>
                                <div className="player7-threes">
                                    <Threes />
                                </div>
                                <div className="player8-threes">
                                    <Threes />
                                </div>
                                <div className="player9-threes">
                                    <Threes />
                                </div>
                                <div className="player10-threes">
                                    <Threes />
                                </div>
                            </div>
                            <div
                                className="table-fourth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fours"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fours:
                                </div>
                                <div className="player1-fours">
                                    <Fours />
                                </div>
                                <div className="player2-fours">
                                    <Fours />
                                </div>
                                <div className="player3-fours">
                                    <Fours />
                                </div>
                                <div className="player4-fours">
                                    <Fours />
                                </div>
                                <div className="player5-fours">
                                    <Fours />
                                </div>
                                <div className="player6-fours">
                                    <Fours />
                                </div>
                                <div className="player7-fours">
                                    <Fours />
                                </div>
                                <div className="player8-fours">
                                    <Fours />
                                </div>
                                <div className="player9-fours">
                                    <Fours />
                                </div>
                                <div className="player10-fours">
                                    <Fours />
                                </div>
                            </div>
                            <div
                                className="table-fifth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="fives"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Fives:
                                </div>
                                <div className="player1-fives">
                                    <Fives />
                                </div>
                                <div className="player2-fives">
                                    <Fives />
                                </div>
                                <div className="player3-fives">
                                    <Fives />
                                </div>
                                <div className="player4-fives">
                                    <Fives />
                                </div>
                                <div className="player5-fives">
                                    <Fives />
                                </div>
                                <div className="player6-fives">
                                    <Fives />
                                </div>
                                <div className="player7-fives">
                                    <Fives />
                                </div>
                                <div className="player8-fives">
                                    <Fives />
                                </div>
                                <div className="player9-fives">
                                    <Fives />
                                </div>
                                <div className="player10-fives">
                                    <Fives />
                                </div>
                            </div>
                            <div
                                className="table-sixth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sixes"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sixes:
                                </div>
                                <div className="player1-sixes">
                                    <Sixes />
                                </div>
                                <div className="player2-sixes">
                                    <Sixes />
                                </div>
                                <div className="player3-sixes">
                                    <Sixes />
                                </div>
                                <div className="player4-sixes">
                                    <Sixes />
                                </div>
                                <div className="player5-sixes">
                                    <Sixes />
                                </div>
                                <div className="player6-sixes">
                                    <Sixes />
                                </div>
                                <div className="player7-sixes">
                                    <Sixes />
                                </div>
                                <div className="player8-sixes">
                                    <Sixes />
                                </div>
                                <div className="player9-sixes">
                                    <Sixes />
                                </div>
                                <div className="player10-sixes">
                                    <Sixes />
                                </div>
                            </div>
                            <div
                                className="table-seventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Sum:
                                </div>
                                <div
                                    className="player1-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player2-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player3-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player4-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player5-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player6-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player7-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player8-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player9-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                                <div
                                    className="player10-sum"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <Sum />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-part">
                            <div
                                className="table-eight-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    border: "1px solid brown",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="bonus"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Bonus:
                                </div>
                                <div className="player1-bonus">
                                    <Bonus />
                                </div>
                                <div className="player2-bonus">
                                    <Bonus />
                                </div>
                                <div className="player3-bonus">
                                    <Bonus />
                                </div>
                                <div className="player4-bonus">
                                    <Bonus />
                                </div>
                                <div className="player5-bonus">
                                    <Bonus />
                                </div>
                                <div className="player6-bonus">
                                    <Bonus />
                                </div>
                                <div className="player7-bonus">
                                    <Bonus />
                                </div>
                                <div className="player8-bonus">
                                    <Bonus />
                                </div>
                                <div className="player9-bonus">
                                    <Bonus />
                                </div>
                                <div className="player10-bonus">
                                    <Bonus />
                                </div>
                            </div>
                            <div
                                className="table-ninth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="1-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    1 Pair:
                                </div>
                                <div className="player1-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player2-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player3-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player4-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player5-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player6-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player7-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player8-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player9-one-pair">
                                    <OnePair />
                                </div>
                                <div className="player10-one-pair">
                                    <OnePair />
                                </div>
                            </div>
                            <div
                                className="table-tenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="2-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    2 Pair:
                                </div>
                                <div className="player1-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player2-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player3-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player4-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player5-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player6-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player7-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player8-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player9-two-pair">
                                    <TwoPair />
                                </div>
                                <div className="player10-two-pair">
                                    <TwoPair />
                                </div>
                            </div>
                            <div
                                className="table-eleventh-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-pair"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 Pair:
                                </div>
                                <div className="player1-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player2-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player3-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player4-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player5-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player6-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player7-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player8-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player9-three-pair">
                                    <ThreePair />
                                </div>
                                <div className="player10-three-pair">
                                    <ThreePair />
                                </div>
                            </div>
                            <div
                                className="table-twelfth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="3-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    3 of kind:
                                </div>
                                <div className="player1-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player2-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player3-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player4-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player5-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player9-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player10-3-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-thirteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="4-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    4 of kind:
                                </div>
                                <div className="player1-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player2-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player3-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player4-4-of-kind">
                                    <FourOfKind />
                                </div>
                                <div className="player5-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player9-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player10-4-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fourteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="5-of-kind"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    5 of kind:
                                </div>
                                <div className="player1-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player2-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player3-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player4-5-of-kind">
                                    <FiveOfKind />
                                </div>
                                <div className="player5-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player6-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player7-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player8-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player9-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                                <div className="player10-5-of-kind">
                                    <ThreeOfKind />
                                </div>
                            </div>
                            <div
                                className="table-fifteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="small-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Small straight:
                                </div>
                                <div className="player1-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player2-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player3-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player4-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player5-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player6-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player7-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player8-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player9-small-straight">
                                    <SmallStraight />
                                </div>
                                <div className="player10-small-straight">
                                    <SmallStraight />
                                </div>
                            </div>
                            <div
                                className="table-sixteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="large-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Large straight:
                                </div>
                                <div className="player1-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player2-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player3-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player4-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player5-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player6-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player7-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player8-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player9-large-straight">
                                    <LargeStraight />
                                </div>
                                <div className="player10-large-straight">
                                    <LargeStraight />
                                </div>
                            </div>
                            <div
                                className="table-seventeenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="full-straight"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Full straight:
                                </div>
                                <div className="player1-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player2-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player3-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player4-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player5-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player6-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player7-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player8-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player9-full-straight">
                                    <FullStraight />
                                </div>
                                <div className="player10-full-straight">
                                    <FullStraight />
                                </div>
                            </div>
                            <div
                                className="table-eighteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="cabin"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Cabin 2 + 3:
                                </div>
                                <div className="player1-cabin">
                                    <Cabin />
                                </div>
                                <div className="player2-cabin">
                                    <Cabin />
                                </div>
                                <div className="player3-cabin">
                                    <Cabin />
                                </div>
                                <div className="player4-cabin">
                                    <Cabin />
                                </div>
                                <div className="player5-cabin">
                                    <Cabin />
                                </div>
                                <div className="player6-cabin">
                                    <Cabin />
                                </div>
                                <div className="player7-cabin">
                                    <Cabin />
                                </div>
                                <div className="player8-cabin">
                                    <Cabin />
                                </div>
                                <div className="player9-cabin">
                                    <Cabin />
                                </div>
                                <div className="player10-cabin">
                                    <Cabin />
                                </div>
                            </div>
                            <div
                                className="table-nineteenth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="house"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    House 3 + 3:
                                </div>
                                <div className="player1-house">
                                    <House />
                                </div>
                                <div className="player2-house">
                                    <House />
                                </div>
                                <div className="player3-house">
                                    <House />
                                </div>
                                <div className="player4-house">
                                    <House />
                                </div>
                                <div className="player5-house">
                                    <House />
                                </div>
                                <div className="player6-house">
                                    <House />
                                </div>
                                <div className="player7-house">
                                    <House />
                                </div>
                                <div className="player8-house">
                                    <House />
                                </div>
                                <div className="player9-house">
                                    <House />
                                </div>
                                <div className="player10-house">
                                    <House />
                                </div>
                            </div>
                            <div
                                className="table-twentieth-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="tower"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Tower 2 + 4:
                                </div>
                                <div className="player1-tower">
                                    <Tower />
                                </div>
                                <div className="player2-tower">
                                    <Tower />
                                </div>
                                <div className="player3-tower">
                                    <Tower />
                                </div>
                                <div className="player4-tower">
                                    <Tower />
                                </div>
                                <div className="player5-tower">
                                    <Tower />
                                </div>
                                <div className="player6-tower">
                                    <Tower />
                                </div>
                                <div className="player7-tower">
                                    <Tower />
                                </div>
                                <div className="player8-tower">
                                    <Tower />
                                </div>
                                <div className="player9-tower">
                                    <Tower />
                                </div>
                                <div className="player10-tower">
                                    <Tower />
                                </div>
                            </div>
                            <div
                                className="table-twenty-first-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="Chance"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Chance:
                                </div>
                                <div className="player1-Chance">
                                    <Chance />
                                </div>
                                <div className="player2-Chance">
                                    <Chance />
                                </div>
                                <div className="player3-Chance">
                                    <Chance />
                                </div>
                                <div className="player4-Chance">
                                    <Chance />
                                </div>
                                <div className="player5-Chance">
                                    <Chance />
                                </div>
                                <div className="player6-Chance">
                                    <Chance />
                                </div>
                                <div className="player7-Chance">
                                    <Chance />
                                </div>
                                <div className="player8-Chance">
                                    <Chance />
                                </div>
                                <div className="player9-Chance">
                                    <Chance />
                                </div>
                                <div className="player10-Chance">
                                    <Chance />
                                </div>
                            </div>
                            <div
                                className="table-twenty-second-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                }}
                            >
                                <div
                                    className="MaxiYatzy"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    MaxiYatzy:
                                </div>
                                <div className="player1-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player2-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player3-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player4-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player5-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player6-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player7-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player8-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player9-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                                <div className="player10-MaxiYatzy">
                                    <MaxiYatzy />
                                </div>
                            </div>
                            <div
                                className="table-twenty-third-row"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: "50px",
                                }}
                            >
                                <div
                                    className="total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    Total score:
                                </div>
                                <div
                                    className="player1-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player2-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player3-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player4-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player5-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player6-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player7-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player8-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player9-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                                <div
                                    className="player10-total-score"
                                    style={{ fontWeight: "bolder" }}
                                >
                                    <TotalScore />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div>
                {gameStarted ? (
                    <div>
                        <div>
                            <h2>Round {roundNr}</h2>
                        </div>
                        <div
                            className="dices"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignContent: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                className="dicegroup1"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                }}
                            >
                                <div
                                    className="dice1"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h2>Dice 1</h2>
                                    <p
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "25px",
                                            border: "1px solid black",
                                            fontFamily: "fantasy",
                                            fontSize: "72px",
                                            textAlign: "center",
                                            margin: "5px",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        {dice1number}
                                    </p>
                                    <button onClick={HoldDice1}>Hold</button>
                                </div>
                                <div
                                    className="dice2"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h2>Dice 2</h2>
                                    <p
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "25px",
                                            border: "1px solid black",
                                            fontFamily: "fantasy",
                                            fontSize: "72px",
                                            textAlign: "center",
                                            margin: "5px",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        {dice2number}
                                    </p>
                                    <button onClick={HoldDice2}>Hold</button>
                                </div>
                                <div
                                    className="dice3"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h2>Dice 3</h2>
                                    <p
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "25px",
                                            border: "1px solid black",
                                            fontFamily: "fantasy",
                                            fontSize: "72px",
                                            textAlign: "center",
                                            margin: "5px",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        {dice3number}
                                    </p>
                                    <button onClick={HoldDice3}>Hold</button>
                                </div>
                            </div>
                            <div
                                className="dicegroup2"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-around",
                                    marginTop: "100px",
                                }}
                            >
                                <div
                                    className="dice4"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h2>Dice 4</h2>
                                    <p
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "25px",
                                            border: "1px solid black",
                                            fontFamily: "fantasy",
                                            fontSize: "72px",
                                            textAlign: "center",
                                            margin: "5px",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        {dice4number}
                                    </p>
                                    <button onClick={HoldDice4}>Hold</button>
                                </div>
                                <div
                                    className="dice5"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h2>Dice 5</h2>
                                    <p
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "25px",
                                            border: "1px solid black",
                                            fontFamily: "fantasy",
                                            fontSize: "72px",
                                            textAlign: "center",
                                            margin: "5px",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        {dice5number}
                                    </p>
                                    <button onClick={HoldDice5}>Hold</button>
                                </div>
                                <div
                                    className="dice6"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <h2>Dice 6</h2>
                                    <p
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            borderRadius: "25px",
                                            border: "1px solid black",
                                            fontFamily: "fantasy",
                                            fontSize: "72px",
                                            textAlign: "center",
                                            margin: "5px",
                                            backgroundColor: "white",
                                        }}
                                    >
                                        {dice6number}
                                    </p>
                                    <button onClick={HoldDice6}>Hold</button>
                                </div>
                            </div>
                            <button
                                onClick={RollDices}
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    position: "absolute",
                                    marginTop: "700px",
                                    marginLeft: "1150px",
                                    borderRadius: "50%",
                                    backgroundColor: "beige",
                                }}
                            >
                                Roll dices
                            </button>
                        </div>
                        <div
                            className="button-group"
                            style={{
                                float: "left",
                                margin: "25px",
                                marginTop: "400px",
                                marginLeft: "1000px",
                            }}
                        >
                            <button
                                onClick={StartNewGame}
                                style={{
                                    backgroundColor: "thistle",
                                    borderRadius: "50%",
                                    height: "100px",
                                }}
                            >
                                New Game
                            </button>
                            <button
                                onClick={RestartGame}
                                style={{
                                    backgroundColor: "aliceblue",
                                    borderRadius: "50%",
                                    marginLeft: "25px",
                                    height: "100px",
                                }}
                            >
                                Restart Game
                            </button>
                            <button
                                onClick={EndGame}
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                    marginLeft: "25px",
                                    borderRadius: "50%",
                                    height: "100px",
                                }}
                            >
                                Quit Game
                            </button>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Game;
