const SheetComponent = () => {
    const title = "Maxi Yatzy sheet";

    let player1 = "";
    let player2 = "";
    let player3 = "";
    let player4 = "";
    let player5 = "";
    let player6 = "";
    let player7 = "";
    let player8 = "";
    let player9 = "";
    let player10 = "";

    return (
        <div>
            {/* {fourPlayerGame ? (
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
                        <div className="names" style={{ fontWeight: "bolder" }}>
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
            )} */}
        </div>
    );
};

export default SheetComponent;
