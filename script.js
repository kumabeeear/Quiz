let answers = [];

window.onload = function () {
  localStorage.removeItem("answers");
};

function selectAnswer(button, type) {
  let questionDiv = button.parentElement;

  let buttons = questionDiv.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("selected"));

  button.classList.add("selected");

  let allQuestions = document.querySelectorAll(".question");
  let questionIndex = Array.from(allQuestions).indexOf(questionDiv);

  answers[questionIndex] = type;

  localStorage.setItem("answers", JSON.stringify(answers));
}

function showResult() {
  let answers = JSON.parse(localStorage.getItem("answers")) || [];

  if (answers.length < 8 || answers.includes(undefined)) {
    alert("Please answer all 8 questions before seeing your result.");
    return;
  }

  let bulbasaur = 0;
  let charmander = 0;
  let squirtle = 0;

  answers.forEach(ans => {
    if (ans === "bulbasaur") bulbasaur++;
    if (ans === "charmander") charmander++;
    if (ans === "squirtle") squirtle++;
  });

  if (bulbasaur >= charmander && bulbasaur >= squirtle) {
    window.location.href = "bulbasaur.html";
  } else if (charmander >= bulbasaur && charmander >= squirtle) {
    window.location.href = "charmander.html";
  } else {
    window.location.href = "squirtle.html";
  }
}