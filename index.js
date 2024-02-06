let userScorePara = document.querySelector("#userScore");
let compScorePara = document.querySelector("#compScore");
let currMode = "light";
let btn = document.querySelector("#mode");
let body = document.querySelector("body");
let heading = document.querySelector("h1");
let label = document.querySelector("label");
let text = document.querySelector("#text");
let text1 = document.querySelector("#text1");
let reset = document.querySelector("#reset");

reset.addEventListener("click", (userScore, compScore) => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Let's Play!";
  playerChoices.forEach((choice) => {
    choice.style.opacity = 1;
  });
  compChoices.forEach((choice) => {
    choice.style.opacity = 1;
  });
});

btn.addEventListener("click", () => {
  if (currMode === "light") {
    body.classList.add("dark");
    body.classList.remove("light");
    heading.style.backgroundColor = "#1282a2";
    text.style.color = "white";
    text1.style.color = "white";
    userScorePara.style.color = "white";
    compScorePara.style.color = "white";
    currMode = "dark";
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
    heading.style.backgroundColor = "#001f54";
    currMode = "light";
  }
});

let playerChoices = document.querySelectorAll(".playerChoice");
let compChoices = document.querySelectorAll(".compChoice");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
  const op = ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random() * 3);
  return op[num];
};

const playGame = (userChoice, compChoice) => {
  playerChoices.forEach((choice) => {
    if (choice.getAttribute("id") !== userChoice) {
      choice.style.opacity = 0.2;
    } else {
      choice.style.opacity = 1;
    }
  });
  compChoices.forEach((choice1) => {
    if (choice1.getAttribute("id") !== compChoice) {
      choice1.style.opacity = 0.2;
    } else {
      choice1.style.opacity = 1;
    }
  });

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
    const userScore = userScorePara.innerText;
    userScorePara.innerText = Number(userScore) + 1;
    msg.innerText = "You Win!";
  } else {
    const compScore = compScorePara.innerText;
    compScorePara.innerText = Number(compScore) + 1;
    msg.innerText = "You Lose!";
  }
};

const drawGame = () => {
  msg.innerText = "The Game was draw!";
  msg.style.Color = "white";
};

playerChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    const compChoice = genCompChoice();
    playGame(userChoice, compChoice);
  });
});
