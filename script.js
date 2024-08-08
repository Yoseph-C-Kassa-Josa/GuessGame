"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
console.log(document.querySelector(".message").textContent);

// for input
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector(".message").textContent = "No number";
    displayMessage("No number");
    document.querySelector(".highscore").textContent = high;
  } else if (guess === number) {
    document.querySelector("h1").textContent =
      "Congratulations, You are the winner:)";
    if (score > high) {
      high = score;
      document.querySelector(".highscore").textContent = high;
    }

    document.querySelector(".number").textContent = number;
    // document.querySelector(".message").textContent = "CorrectNumber";
    displayMessage("CorrectNumber");
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".number").style.width = "25rem";
  } else if (guess !== number) {
    document.querySelector(".highscore").textContent = high;
    if (score > 0) {
      displayMessage(guess > number ? "Too High" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".highscore").textContent = 0;
    } else {
      displayMessage("You lost the game");

      document.querySelector(".score").textContent = 0;
    }
  }
}); // for button of check

// for the button of again

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
