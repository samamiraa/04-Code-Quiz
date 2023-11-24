var startBtn = document.getElementById("start-quiz");
var quizContainer = document.getElementById("quiz-container");

var questionPackages = [
    {
    question: "What does HTML stand for?",
    options: [
        { text: "Hyper Text Markup Language", correct: "true"},
        { text: "Hotdogs Tacoos Muffins Linguini", correct: "false"}, 
        { text: "Home Tv Makeup Living", correct: "false"}, 
        { text: "Hyperlinks Text Markup Language", correct: "false"}
    ]
}, 
{
    question: "What does CSS stand for?",
    options: [
        { text:"Cute Style Sheets", correct: "false"},
        { text:"Cut Style Shave", correct: "false"},
        { text:"Cascading Style Sheets", correct: "true"},
        { text:"Cascading Styling Sheet", correct: "false"}
    ]
},
{
    question: "What does API stand for?",
    options: [
        { text:"App Programming Iteration", correct: "false"},
        { text:"Apple Programming Interface", correct: "false"},
        { text:"Application Program Iteration", correct: "false"},
        { text:"Application Programming Interface", correct: "true"}
    ]
},
{
    question: "What HTML element will have the largest heading?",
    options: [
        { text:"<h6>", correct: "false"},
        { text:"<h1>", correct: "true"},
        { text:"<h3>", correct: "false"},
        { text:"<h4>", correct: "false"}
    ]
},
{
    question: "What is the default direction for flexbox unless specified?",
    options: [
        { text:"Row", correct: "true"},
        { text:"Column", correct: "false"},
        { text:"Flex-start", correct: "false"},
        { text:"Flex-end", correct: "false"}
    ]
},
{
    question: "What value does a Boolean have?",
    options: [
        { text:"A string", correct: "false"},
        { text:"An Array", correct: "false"},
        { text:"A number", correct: "false"},
        { text:"True/False", correct: "true"}
    ]
},
{
    question: "What is the correct HTML element for inserting a line break?",
    options: [
        { text:"<p>", correct: "false"},
        { text:"<br>", correct: "true"},
        { text:"<div>", correct: "false"},
        { text:"id", correct: "false"}
    ]
},
{
    question: "Which property is used to set text color?",
    options: [
        { text:"text-color", correct: "false"},
        { text:"background-color", correct: "false"},
        { text:"color", correct: "true"},
        { text:"textColor", correct: "false"}
    ]
},
{
    question: "What HTML element do we use to link the external Javascript?",
    options: [
        { text:"<javascript>", correct: "false"},
        { text:"<scripts>", correct: "false"},
        { text:"<js>", correct: "false"},
        { text:"<script>", correct: "true"}
    ]
},
{
    question: "How does a for loop start?",
    options: [
        { text:"for(i = 0; i < 5; i++)", correct: "true"},
        { text:"for i = 0; i < 5; i++", correct: "false"},
        { text:"for(i = 0; i ++)", correct: "false"},
        { text:"for(i =; i < 5)", correct: "false"}
    ]
}];

startBtn.addEventListener("click", function() {
    var secondsLeft = 60;

    var timeInterval = setInterval(function() {
        document.getElementById("timer").innerHTML = secondsLeft;
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000); 

    quizContainer.setAttribute("style", "display: flex;");
    startBtn.setAttribute("style", "display: none;");

    getQuestion();
});

var currentQuestionIndex = 0;
var score = 0;

function getQuestion() {
    var questionContainer = document.getElementById("question-container");
    var optionButtons = document.getElementById("option-buttons");

    var currentQuestion = questionPackages[0];
    questionContainer.textContent = currentQuestion.question;

    currentQuestion.options.forEach(options => {
        var button = document.createElement("button");
        button.innerHTML = options.text;
        button.classList.add("options-container");
        optionButtons.appendChild(button);
        button.addEventListener("click", answerQuestion);
    });

    answerQuestion();
};

function answerQuestion() {
    var correctAnswer = options.correct;
}



