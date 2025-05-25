"use strict";
let secretnumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector("#scorecount").textContent = 20;
document.querySelector("#highscorecount").textContent = 0;

document.querySelector(".check").addEventListener("click", function () {
  const input = Number(document.querySelector(".input").value);
  console.log(input);

  let count = 0;
  if (!input) {
    document.querySelector("#currentposition").textContent = "⛔No Number";
  }
  if (input > secretnumber) {
    document.querySelector("#currentposition").textContent = "📈Too High";
    count++;
  }
  if (input < secretnumber) {
    document.querySelector("#currentposition").textContent = "📉Too Low";
    count++;
  }
  if (input == secretnumber) {
    document.querySelector("#currentposition").textContent = "🎉Correct Answer";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".Block").style.width = "25%";
    document.querySelector(".block").textContent = secretnumber;

    if (
      document.querySelector("#highscorecount").textContent <
      document.querySelector("#scorecount").textContent
    ) {
      document.querySelector("#highscorecount").textContent =
        document.querySelector("#scorecount").textContent;
    }
  }
  document.querySelector("#scorecount").textContent =
    document.querySelector("#scorecount").textContent - count;

  if (document.querySelector("#scorecount").textContent == 0) {
    document.querySelector("#currentposition").textContent =
      "💣You Lost the Game";
    document.querySelector("body").style.backgroundColor = "rgb(200, 39, 39)";
  }
});

document.querySelector(".topleft").addEventListener("click", function () {
  document.querySelector("#currentposition").textContent = "Start guessing...";
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("#scorecount").textContent = 20;
  document.querySelector(".input").value = Number("0");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".Block").style.width = "100px";
  document.querySelector(".block").textContent = "?";
});
