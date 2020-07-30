//the whole game comes under this function
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start game function from lets play to the match screen
    const startGame = () => {
        const playBtn = document.querySelector(" .intro button");
        const introScrn = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const scoreBoard = document.querySelector(".score")

        playBtn.addEventListener("click", () => {
            introScrn.classList.add("fadeout");
            match.classList.add("fadein");
            scoreBoard.classList.add("fadein")
        });
    };

    //play function
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hands");
        const computerHand = document.querySelector(".computer-hands");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = ""
            })
        })



        const computerOptions = ["rock", "paper", "scissors"]; //compueter options

        options.forEach((Option) => {
            Option.addEventListener("click", function () {
                let computerNumber = Math.floor(Math.random() * 3);
                //console.log(computerNumber)
                setTimeout(() => {
                    const computerChoice = computerOptions[computerNumber];
                    //console.log(computerChoice)
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;

                    setTimeout(() => {
                        playerHand.src = `./img/rock.png`
                        computerHand.src = `./img/rock.png`


                    }, 500)
                }, 2000)


                playerHand.style.animation = "playerHandsShakes  2s ease"
                computerHand.style.animation = "computerHandsShakes  2s ease"
            });
        });
    };

    //function to update score

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };
    //function to compare the hands

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        //we need to update the text according to the comparison

        if (playerChoice === computerChoice) {
            winner.textContent = "it's a tie";

            //ends the function
            return;
        }
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "you win!!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "computer win!!";
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "you win!!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "computer win!!";
                cScore++;
                updateScore();
                return;
            }
        }

        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "you win!!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "computer win!!";
                cScore++;
                updateScore();
                return;
            }
        }
    };

    //funtion to typewrite
    const typewrite = () => {
        const words = ["rock", "paper", "scissors"];
        const field = document.querySelector("#type")
        count = 0;
        index = 0;

        (
            (function type() {
                if (count === words.length) {
                    count = 0;
                }

                let text = words[count]
                field.textContent = text.slice(0, ++index)
                if (index === text.length) {
                    index = 0;
                    count++;
                }
                setTimeout(type, 500);
            })()
        );

    }





    //start game function called
    startGame();
    playMatch();
    typewrite();
};

//here start the game function
game();
