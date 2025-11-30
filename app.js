//QUIZDATA 
const quizdata = [
    {
        question:"whats my name?",
        options:["mg","ng","og","pg"],
        answer:"mg"
        
    },
    {
        question:"who do i like?",
        options:["sd","ng","og","pg"],
        answer:"sd"
        
    },
    {
        question:"how old is he",
        options:["20","19","18","17"],
        answer:"18"
        
    },
    {
        question:"His bday when",
        options:["april 23","may 24","feb 12","march 30"],
        answer:"march 30"
        
    },
    {
        question:"so his sign will be a...?",
        options:["aries","taurus","cancer","scorpio"],
        answer:"aries"
        
    },
]

//VARIABLES
let currentQuestion = 0;
let currentscore = 0;
let timeLeft = 30;
let timerInterval;

//DOM ELEMENTS
const timer = document.getElementById('time');
const score = document.getElementById('score');
const question = document.querySelector('.question');
const options = document.querySelector('.options');
const result = document.querySelector('.result');
const restartbtn = document.querySelector('.restart-btn');


//Function to load questions

function loadQuestion(){
    if (currentQuestion >= quizdata.length) {
        endQuiz();
        return;
    }
    clearInterval(timerInterval);
    timeLeft=30;
    timer.textContent = timeLeft;
    startTimer();
    const currentQuiz = quizdata[currentQuestion];
    question.textContent = currentQuiz.question;
    options.innerHTML = '';
    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        options.appendChild(button);
    });
}

//Function to check if selected answer is correct

function checkAnswer(selectedOption){
    if (selectedOption === quizdata[currentQuestion].answer) {
        currentscore++ ;  
    }
    currentQuestion++;
    loadQuestion();
}

//Function to start timer

function startTimer(){
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz()
            
        }
    },1000);
}

//Function to end da quiz and show da results

function endQuiz(){
    clearInterval(timerInterval);
    question.style.display = 'none';
    options.style.display = 'none';
    result.style.display = 'block';
    score.textContent = currentscore;
    restartbtn.style.display = 'block';
}

//Resetting the quizz
restartbtn.addEventListener('click', () => {

//Resetting the variables
currentQuestion = 0;
currentscore = 0;
timeLeft = 30;
timer.textContent = timeLeft;

//Reset the display
question.style.display = 'block';
options.style.display = 'flex';
result.style.display = 'none';
restartbtn.style.display = 'none';

//Load the first question
loadQuestion();

})

loadQuestion();