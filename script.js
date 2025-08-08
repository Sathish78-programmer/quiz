const quizData = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"],
    correct: 0
  },
  {
    question: "What does CSS stand for?",
    answers: ["Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
    correct: 1
  },
  {
    question: "Which language is used for web apps?",
    answers: ["PHP", "Python", "JavaScript", "All"],
    correct: 3
  },
  {
    question: "Which tag is used to define a JavaScript in HTML?",
    answers: ["<script>", "<js>", "<javascript>", "<code>"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function showQuestion() {
  let q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns.forEach((btn, index) => {
    btn.textContent = q.answers[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#007BFF";
  });
  nextBtn.style.display = "none";
}

answerBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let selectedIndex = parseInt(btn.getAttribute("data-index"));
    let correctIndex = quizData[currentQuestion].correct;

    if (selectedIndex === correctIndex) {
      score++;
      btn.style.backgroundColor = "green";
    } else {
      btn.style.backgroundColor = "red";
      answerBtns[correctIndex].style.backgroundColor = "green";
    }

    answerBtns.forEach(b => b.disabled = true);
    nextBtn.style.display = "block";
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").style.display = "none";
  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `✅ You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>`;
}

// Initialize first question
showQuestion();
