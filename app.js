"use strict";

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    genComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    getResult();
    resultDisplay.innerHTML = result;
  })
);

function genComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    computerChoice = "rock";
  }

  if (randomNum === 2) {
    computerChoice = "paper";
  }

  if (randomNum === 3) {
    computerChoice = "scissors";
  }
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw, mate!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "YOU LOSE!";
  }
}
