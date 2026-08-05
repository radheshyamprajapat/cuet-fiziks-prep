const questions = [

{
image:"images/q1.png",

options:[
"5 × 10⁻⁶ N",
"10 × 10⁻⁶ N",
"15 × 10⁻⁶ N",
"20 × 10⁻⁶ N"
],

answer:1

},

{
image:"images/q2.png",

options:[
"2 C",
"4 C",
"6 C",
"8 C"
],

answer:2

}

];

let currentQuestion = 0;
let score = 0;

const questionImage=document.getElementById("question-image");
const questionNumber=document.getElementById("question-number");
const options=document.getElementById("options");
const result=document.getElementById("result");
const nextBtn=document.getElementById("nextBtn");

loadQuestion();

function loadQuestion(){

let q=questions[currentQuestion];

questionNumber.innerHTML=
`Question ${currentQuestion+1} of ${questions.length}`;

questionImage.src=q.image;

options.innerHTML="";

result.innerHTML="";

nextBtn.style.display="none";

q.options.forEach((option,index)=>{

let btn=document.createElement("button");

btn.innerHTML=option;

btn.className="option-btn";

btn.onclick=()=>checkAnswer(index,btn);

options.appendChild(btn);

});

}

function checkAnswer(selected,button){

let correct=questions[currentQuestion].answer;

let buttons=document.querySelectorAll(".option-btn");

buttons.forEach(btn=>btn.disabled=true);

if(selected===correct){

button.classList.add("correct");

result.innerHTML="✅ Correct!";

score++;

}else{

button.classList.add("wrong");

buttons[correct].classList.add("correct");

result.innerHTML="❌ Wrong!";

}

nextBtn.style.display="inline-block";

}

nextBtn.onclick=function(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

document.querySelector(".quiz-container").innerHTML=`
<h1>🎉 Test Completed</h1>

<h2>Your Score</h2>

<h1>${score}/${questions.length}</h1>

<a href="../mock-tests.html">Back to Mock Tests</a>
`;

}

}
