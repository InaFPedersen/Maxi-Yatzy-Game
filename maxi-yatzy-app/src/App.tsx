import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RulesPopup from "./Components/RulesPopup";
import GameSetup from "./Components/GameSettup";

function App() {
    const [rulesOpen, setRulesOpen] = useState(false);

    const RulesButton = () => {
        setRulesOpen(!rulesOpen);
    };
    return (
        <div className="App">
            {rulesOpen ? (
                <div
                    style={{
                        position: "absolute",
                    }}
                >
                    <button
                        onClick={RulesButton}
                        style={{
                            position: "absolute",
                            marginLeft: "800px",

                            marginTop: "6px",
                            fontSize: "24px",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            backgroundColor: "lightgrey",
                        }}
                    >
                        X
                    </button>
                    <RulesPopup />
                </div>
            ) : (
                <></>
            )}
            <div>
                <h1> Maxi Yatzy</h1>
                <button
                    onClick={RulesButton}
                    style={{
                        position: "absolute",
                        marginLeft: "900px",
                        width: "120px",
                        height: "60px",
                        marginTop: "-90px",
                    }}
                >
                    Game Rules
                </button>
                <div
                    style={{
                        backgroundColor: "whitesmoke",
                        margin: "25px",
                        paddingBottom: "20px",
                        border: "1px solid brown",
                    }}
                >
                    <GameSetup />
                </div>
            </div>
        </div>
    );
}

export default App;
