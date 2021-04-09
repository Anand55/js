"use strict";

// console.log(document.querySelector(".between").textContent);
// document.querySelector(".message").textContent = "Correct Answer!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 11;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value;
// document.querySelector(".guess").value;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "NO NUMBER !!";
  } else if (guess === number) {
    document.querySelector(".message").textContent = "Correct Answer!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > number) {
    document.querySelector(".message").textContent = "Too High!!";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Too Low!!";
    score = score - 1;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
