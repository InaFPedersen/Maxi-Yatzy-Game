import { useState } from "react";

const GameSetup = () => {
    // States for the game setup
    const [gameVariant, setGameVariant] = useState("");
    const [numberOfPlayers, setNumberOfPlayers] = useState("");
    const [twoPlayerGame, setTwoPlayerGame] = useState(false);
    const [threePlayerGame, setThreePlayerGame] = useState(false);
    const [fourPlayerGame, setFourPlayerGame] = useState(false);
    const [fivePlayerGame, setFivePlayerGame] = useState(false);
    const [sixPlayerGame, setSixPlayerGame] = useState(false);
    const [sevenPlayerGame, setSevenPlayerGame] = useState(false);
    const [eightPlayerGame, setEightPlayerGame] = useState(false);
    const [ninePlayerGame, setNinePlayerGame] = useState(false);
    const [tenPlayerGame, setTenPlayerGame] = useState(false);
    const [chosenHowManyPlayers, setChosenHowManyPlayers] = useState(false);
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

    // Setting character names based on how many players is playing!
    const renderCharacterNaming = () => {
        if (numberOfPlayers === "2") {
            setTwoPlayerGame(true);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "3") {
            setTwoPlayerGame(false);
            setThreePlayerGame(true);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "4") {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(true);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "5") {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(true);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "6") {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(true);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "7") {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(true);
            setEightPlayerGame(false);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "8") {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(true);
            setNinePlayerGame(false);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "9") {
            setTwoPlayerGame(false);
            setThreePlayerGame(false);
            setFourPlayerGame(false);
            setFivePlayerGame(false);
            setSixPlayerGame(false);
            setSevenPlayerGame(false);
            setEightPlayerGame(false);
            setNinePlayerGame(true);
            setTenPlayerGame(false);
        } else if (numberOfPlayers === "10") {
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
        setChosenHowManyPlayers(true);
    };

    return (
        <div>
            <div>
                <h2>Game setup</h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        fontFamily: "monospace",
                        fontSize: "24px",
                    }}
                >
                    <div>
                        <label>How do you want to play the game?</label>
                        <select
                            id="game-variant"
                            value={gameVariant}
                            onChange={(e) => setGameVariant(e.target.value)}
                            style={{ marginLeft: "20px", fontSize: "24px" }}
                        >
                            <option></option>
                            <option>Ordered</option>
                            <option>Random</option>
                        </select>
                    </div>
                    <div>
                        <label>How many players are going to play?</label>
                        <select
                            id="number-of-players"
                            value={numberOfPlayers}
                            onChange={(e) => setNumberOfPlayers(e.target.value)}
                            style={{ marginLeft: "20px", fontSize: "24px" }}
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
                        style={{ fontSize: "24px" }}
                    >
                        Sumbit
                    </button>
                </div>

                {chosenHowManyPlayers ? (
                    <div>
                        <h2>Insert the players names: </h2>
                        {twoPlayerGame ? (
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
                        {threePlayerGame ? (
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
                        {fourPlayerGame ? (
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
                        {fivePlayerGame ? (
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
                        {sixPlayerGame ? (
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
                        {sevenPlayerGame ? (
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
                        {eightPlayerGame ? (
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
                        {ninePlayerGame ? (
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
                        {tenPlayerGame ? (
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
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default GameSetup;
