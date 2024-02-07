import React, { useState } from "react";
import "./App.css";
import RulesPopup from "./Components/RulesPopup";
import Game from "./Components/Game";

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
                        float: "right",
                        width: "120px",
                        height: "100px",
                        marginTop: "-110px",
                        marginRight: "50px",
                        borderRadius: "50%",
                        backgroundColor: "aliceblue",
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
                    <Game />
                </div>
            </div>
        </div>
    );
}

export default App;
