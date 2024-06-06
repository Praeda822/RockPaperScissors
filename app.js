"use strict";

// Game Class
class RockPaperScissors {
  constructor() {
    this.computerChoiceDisplay = document.getElementById("computer-choice");
    this.userChoiceDisplay = document.getElementById("user-choice");
    this.resultDisplay = document.getElementById("result");
    this.possibleChoices = document.querySelectorAll("button");

    // Initialize Game state
    this.userChoice = null;
    this.computerChoice = null;
    this.result = null;

    // Assign listeners to buttons
    this.init();
  }

  // Refactored Init to add bind handlers to my buttons
  init() {
    if (this.possibleChoices) {
      this.possibleChoices.forEach((choice) =>
        choice.addEventListener("click", (e) => this.handleUserChoice(e))
      );
    } else {
      console.error("Button debugger");
    }
  }

  handleUserChoice(e) {
    this.userChoice = e.target.id;
    this.computerChoice = generateComputerChoice();
    this.result = this.calculateResult(this.userChoice, this.computerChoice);

    this.updateDisplay(this.userChoiceDisplay, this.userChoice);
    this.updateDisplay(this.computerChoiceDisplay, this.computerChoice);
    this.updateDisplay(this.resultDisplay, this.result);
  }

  updateDisplay(element, value) {
    element.innerHTML = value;
  }

  generateComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  calculateResult(userChoice, computerChoice) {
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
}
// Initialize the game
new RockPaperScissors();
