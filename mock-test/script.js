// =======================
// CUET FIZIKS PREP
// Electrostatics Mock Test
// =======================

const questions = [

{
question: `
<p><b>Question 1</b></p>

<p>
Two point charges
$+2\\,\\mu C$ and
$+3\\,\\mu C$
are placed
$2\\,m$
apart.
The electrostatic force between them is:
</p>
`,

options:[
"$0.0135\\,N$",
"$0.027\\,N$",
"$0.0405\\,N$",
"$0.054\\,N$"
],

answer:0

},

{

question:`
<p><b>Question 2</b></p>

<p>
According to Coulomb's law, the electrostatic force is proportional to
</p>
`,

options:[
"$r$",
"$1/r$",
"$1/r^2$",
"$r^2$"
],

answer:2

},

{

question:`
<p><b>Question 3</b></p>

<p>
SI unit of electric field is
</p>
`,

options:[
"$N/C$",
"$J/C$",
"$C/N$",
"$Volt$"
],

answer:0

}

];

let currentQuestion = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionBox = document.getElementById("question-box");
const optionsBox = document.getElementById("options");
const resultBox = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

loadQuestion();

function loadQuestion(){

let q = questions[currentQuestion];

questionNumber.innerHTML =
`Question ${currentQuestion+1} of ${questions.length}`;

questionBox.innerHTML = q.question;

optionsBox.innerHTML = "";

resultBox.innerHTML = "";

nextBtn.style.display = "none";

q.options.forEach((option,index)=>{

const btn = document.createElement("button");

btn.className="option-btn";

btn.innerHTML = option;

btn.onclick = ()=>checkAnswer(index,btn);

optionsBox.appendChild(btn);

});

MathJax.typesetPromise();

}

function checkAnswer(selected,button){

const correct = questions[currentQuestion].answer;

const buttons = document.querySelectorAll(".option-btn");

buttons.forEach(btn=>btn.disabled=true);

if(selected===correct){

button.classList.add("correct");

resultBox.innerHTML =
"✅ Correct Answer";

score++;

}
else{

button.classList.add("wrong");

buttons[correct].classList.add("correct");

resultBox.innerHTML =
"❌ Wrong Answer";

}

nextBtn.style.display="inline-block";

}

nextBtn.onclick=function(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}
else{

document.querySelector(".quiz-container").innerHTML=`

<h1>🎉 Test Completed</h1>

<h2>Your Score</h2>

<h1>${score} / ${questions.length}</h1>

<p>Thank you for attempting the test.</p>

<a href="../mock-tests.html">
<button class="option-btn">
Back to Mock Tests
</button>
</a>

`;

}

};
