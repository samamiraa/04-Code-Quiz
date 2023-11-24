var startBtn = document.getElementById("start-quiz");
var quizContainer = document.getElementById("quiz-container");

var questionPackages = [
    {
    question: "What does HTML stand for?",
    options: [
        { text: "Hyper Text Markup Language"},
        { text: "Hotdogs Tacoos Muffins Linguini"}, 
        { text: "Home Tv Makeup Living"}, 
        { text: "Hyperlinks Text Markup Language"}
    ],
    answer: "Hyper Text Markup Language"
}, 
{
    question: "What does CSS stand for?",
    options: [
        { text:"Cute Style Sheets"},
        { text:"Cut Style Shave"},
        { text:"Cascading Style Sheets"},
        { text:"Cascading Styling Sheet"}
    ],
    answer: "Cascading Style Sheets"
},
{
    question: "What does API stand for?",
    options: [
        { text:"App Programming Iteration"},
        { text:"Apple Programming Interface"},
        { text:"Application Program Iteration"},
        { text:"Application Programming Interface"}
    ],
    answer: "Application Programming Interface"
},
{
    question: "What HTML element will have the largest heading?",
    options: [
        { text:"<h6>"},
        { text:"<h1>"},
        { text:"<h3>"},
        { text:"<h4>"}
    ],
    answer: "<h1>"
},
{
    question: "What is the default direction for flexbox unless specified?",
    options: [
        { text:"Row"},
        { text:"Column"},
        { text:"Flex-start"},
        { text:"Flex-end"}
    ],
    answer: "Row"
},
{
    question: "What value does a Boolean have?",
    options: [
        { text:"A string"},
        { text:"An Array"},
        { text:"A number"},
        { text:"True/False"}
    ],
    answer: "True/False"
},
{
    question: "What is the correct HTML element for inserting a line break?",
    options: [
        { text:"<p>"},
        { text:"<br>"},
        { text:"<div>"},
        { text:"id"}
    ],
    answer: "<br>"
},
{
    question: "Which property is used to set text color?",
    options: [
        { text:"text-color"},
        { text:"background-color"},
        { text:"color"},
        { text:"textColor"}
    ],
    answer: "color"
},
{
    question: "What HTML element do we use to link the external Javascript?",
    options: [
        { text:"<javascript>"},
        { text:"<scripts>"},
        { text:"<js>"},
        { text:"<script>"}
    ],
    answer: "<script>"
},
{
    question: "How does a for loop start?",
    options: [
        { text:"for(i = 0; i < 5; i++)"},
        { text:"for i = 0; i < 5; i++"},
        { text:"for(i = 0; i ++)"},
        { text:"for(i =; i < 5)"}
    ],
    answer: "for(i = 0; i < 5; i++)"
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
    });


};



