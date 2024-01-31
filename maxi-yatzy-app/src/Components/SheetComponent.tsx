const SheetComponent = () => {
    const test = "Maxi Yatzy";
    let player1 = "";
    let player2 = "";
    let player3 = "";
    let player4 = "";
    let player5 = "";
    let player6 = "";
    let player7 = "";
    let player8 = "";
    let player9 = "";

    return (
        <div>
            <h1>{test}</h1>
            <div>
                <div className="board-header">
                    <div className="emptyCell"></div>
                    <div className="player1">
                        <h2>{player1}</h2>
                    </div>
                    <div className="player2">
                        <h2>{player2}</h2>
                    </div>
                    <div className="player3">
                        <h2>{player3}</h2>
                    </div>
                    <div className="player4">
                        <h2>{player4}</h2>
                    </div>
                    <div className="player5">
                        <h2>{player5}</h2>
                    </div>
                    <div className="player6">
                        <h2>{player6}</h2>
                    </div>
                    <div className="player7">
                        <h2>{player7}</h2>
                    </div>
                    <div className="player8">
                        <h2>{player8}</h2>
                    </div>
                    <div className="player9">
                        <h2>{player9}</h2>
                    </div>
                </div>
                <div className="board-left-side">
                    <div className="top-part">
                        <div className="Ones">
                            <h2>Ones</h2>
                        </div>
                        <div className="Twos">
                            <h2>Twos</h2>
                        </div>
                        <div className="Threes">
                            <h2>Threes</h2>
                        </div>
                        <div className="Fours">
                            <h2>Fours</h2>
                        </div>
                        <div className="Fives">
                            <h2>Fives</h2>
                        </div>
                        <div className="Sixes">
                            <h2>Sixes</h2>
                        </div>
                        <div className="Sum">
                            <h2>Sum</h2>
                        </div>
                    </div>
                    <div className="middle-part">
                        <div className="Bonus">
                            <h2>Bonus</h2>
                        </div>
                        <div className="1-pair">
                            <h2>1 Pair</h2>
                        </div>
                        <div className="2-pair">
                            <h2>2 Pair</h2>
                        </div>
                        <div className="3-pair">
                            <h2>3 Pair</h2>
                        </div>
                        <div className="3-like">
                            <h2>3 of kind</h2>
                        </div>
                        <div className="4-like">
                            <h2>4 of kind</h2>
                        </div>
                        <div className="5-like">
                            <h2>5 of kind</h2>
                        </div>
                        <div className="small-straight">
                            <h2>Small straight</h2>
                        </div>
                        <div className="large-straight">
                            <h2>Large straight</h2>
                        </div>
                        <div className="full-straight">
                            <h2>Full straight</h2>
                        </div>
                        <div className="full-straight">
                            <h2>Cabin 2 + 3 </h2>
                        </div>
                        <div className="full-straight">
                            <h2>House 3 + 3</h2>
                        </div>
                        <div className="full-straight">
                            <h2>Tower 2 + 4</h2>
                        </div>
                    </div>
                    <div className="bottom-part">
                        <div className="Chance">
                            <h2>Chance</h2>
                        </div>
                        <div className="maxi-Yatzy">
                            <h2>MaxiYatzy</h2>
                        </div>
                        <div className="total-score">
                            <h2>Total score</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SheetComponent;
