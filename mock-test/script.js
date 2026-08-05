// ==============================
// CUET FIZIKS PREP
// Mock Test Script
// ==============================

let currentQuestion = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionBox = document.getElementById("question-box");
const optionsBox = document.getElementById("options");
const resultBox = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion() {

    const q = questions[currentQuestion];

    questionNumber.innerHTML =
        `<h3>Question ${currentQuestion + 1} of ${questions.length}</h3>`;

    questionBox.innerHTML = q.question;

    optionsBox.innerHTML = "";

    resultBox.innerHTML = "";

    nextBtn.style.display = "none";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option-btn";

        button.innerHTML = option;

        button.onclick = function () {
            checkAnswer(index);
        };

        optionsBox.appendChild(button);

    });

    // Render LaTeX
    if (window.MathJax) {
        MathJax.typesetPromise();
    }

}

function checkAnswer(selectedOption) {

    const correctAnswer = questions[currentQuestion].answer;

    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(button => button.disabled = true);

    if (selectedOption === correctAnswer) {

        buttons[selectedOption].classList.add("correct");

        resultBox.innerHTML = "✅ Correct Answer";

        score++;

    } else {

        buttons[selectedOption].classList.add("wrong");

        buttons[correctAnswer].classList.add("correct");

        resultBox.innerHTML =
            "❌ Wrong! Correct Answer is Option " +
            String.fromCharCode(65 + correctAnswer);

    }

    nextBtn.style.display = "block";

}

nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        document.querySelector(".quiz-container").innerHTML = `

        <h1>🎉 Test Completed</h1>

        <h2>Your Score</h2>

        <h1>${score} / ${questions.length}</h1>

        <p>You answered ${score} questions correctly.</p>

        <button class="option-btn" onclick="location.reload()">
            Restart Test
        </button>

        <br><br>

        <a href="../mock-tests.html">
            <button class="option-btn">
                Back to Mock Tests
            </button>
        </a>

        `;

    }

});
