const RulesPopup = () => {
    const header = "Maxi Yatzy Rules!";

    return (
        <div>
            <h1>{header}</h1>
            <div className="text">
                <h2>Components</h2>
                <p>6 dices</p>
                <p>chips</p>
                <p>game sheets</p>

                <h2>General rules</h2>
                <p>You can play up to 9 players in this game</p>
                <p>
                    If you fail to obtain the target you get failed symbol -,
                    which will count as 0 points when summed together
                </p>
                <p>
                    Chips is given if the user completes a goal in less than 3
                    throws, for 1 throw 2 chips are given, while for 2 throws 1
                    chip are given. The chips can be used later in the game to
                    get more throws
                </p>
                <p>
                    The game can be played either ordered or at random. With
                    ordered the players start at the top of the game sheet and
                    work themselves down to the bottom of the sheet. While with
                    random the user chooses which order they want to complete
                    the challenges.
                </p>

                <h2>Top part </h2>
                <p>
                    In the top part the goal is to gather as many of the
                    numbers.
                </p>
                <p>
                    The numbers you are to gather is one between 1 and 6 on the
                    dice.
                </p>
                <p>
                    In order to achieve the bonus you have to at least have
                    equal to 4 of each of the numbers points.
                </p>

                <h2>Max score of the top part numbers</h2>
                <p>Ones - max score is 6 points</p>
                <p>Twos - max score is 12 points</p>
                <p>Threes - max score is 18 points</p>
                <p>Fours - max score is 24 points</p>
                <p>Fives - max score is 30 points</p>
                <p>Sixes - max score is 36 points</p>
                <p>Sum - max score is 126 points</p>

                <h2>Bonus</h2>
                <p>
                    To obtain the bonus you have to have at least 84 points in
                    the sum. If you achieve the bonus you fill 100 points to the
                    bonus field.
                </p>

                <h2>Pairs</h2>
                <p>
                    1 pair is two of the same number on the dice, and 3 pairs is
                    double of 3 different numbers.
                </p>
                <p>Max score of 1 pair is 12 points </p>
                <p>Max score of 2 pair is 22 points</p>
                <p>Max score of 3 pair is 30 points</p>

                <h2>Of kind</h2>
                <p>
                    3 of kind means 3 of the same number, and 5 of kind means 5
                    of the same number
                </p>
                <p>Max score of 3 of a kind is 18 points.</p>
                <p>Max score of 4 of a kind is 24 points.</p>
                <p>Max score of 5 of a kind is 30 points.</p>

                <h2>Small straight</h2>
                <p>
                    A small straight means that you have one of each dices
                    showing the numbers: 1, 2, 3, 4, and 5.
                </p>
                <p>The max score of a small straight is 15 points</p>

                <h2>Large straight</h2>
                <p>
                    A large straight means that you have one of each dices
                    showing the numbers: 2, 3, 4, 5 and 6.
                </p>
                <p>The max score of a large straight is 20 points</p>

                <h2>Full straight</h2>
                <p>
                    A full straight means that you have one of each dices
                    showing the numbers: 1, 2, 3, 4, 5, and 6.
                </p>
                <p>The max score of a full straight is 21 points</p>

                <h2>Chance</h2>
                <p>
                    The chance is where you can throw the dices to get as much
                    points as you can. Or you can use it to gather chips before
                    you are to challenge the MaxiYatzy challenge. In ordered you
                    most likely is only going to throw once and gather 2 chips.
                    While with the random order, you normally use it if you fail
                    one one of the others.
                </p>

                <h2>MaxiYatzy</h2>
                <p>
                    MaxiYatzy is where you get 6 of kind of any of the numbers
                    between 1 and 6. If you throw 6 of a kind you get 100
                    points.
                </p>

                <h2>Total score</h2>
                <p>
                    Here you sum everything up in order to find the winner. The
                    winner is the one with the most points
                </p>
            </div>
        </div>
    );
};

export default RulesPopup;
