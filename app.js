"use strict";

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

// Game state
let userChoice;
let computerChoice;
let result;

function init() {
  possibleChoices.forEach((choice) =>
    choice.addEventListener("click", handleUserChoice)
  );
}
function handleUserChoice(e) {
  const userChoice = e.target.id;
  const computerChoice = generateComputerChoice();
  const result = calculateResult(userChoice, computerChoice);

  updateDisplay(userChoiceDisplay, userChoice);
  updateDisplay(computerChoiceDisplay, computerChoice);
  updateDisplay(resultDisplay, result);
}

function updateDisplay(element, value) {
  element.innerHTML = value;
}

function genComChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function calculateResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw, mate!";
  } else if (
    (computerChoice === "rock" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "rock")
  ) {
    return "YOU LOSE!";
  } else {
    return "YOU WIN!";
  }
}

// Initialize the game
init();
