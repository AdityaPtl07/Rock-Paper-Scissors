let compScore = 0;
let userScore = 0;
let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");
let currMode = "light";
let btn = document.querySelector("#mode");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  if (currMode === "light") {
    body.classList.add("dark");
    body.classList.remove("light");
    currMode = "dark";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    currMode = "light";
  }
});

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
  const op = ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random() * 3);
  return op[num];
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};
const showWinner = (userWin) => {
  if (userWin === true) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "darkred";
  }
};
const drawGame = () => {
  msg.innerText = "The Game was draw!";
  msg.style.backgroundColor = "darkblue";
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
