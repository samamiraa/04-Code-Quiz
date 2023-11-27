// Questions array for quiz
var questionPackages = [
    {
    // Question
    question: "What does HTML stand for?",
    options: [
        // Options for questions, true false string values
        { text: "Hyper Text Markup Language", correct: "true"},
        { text: "Hotdogs Tacos Muffins Linguini", correct: "false"}, 
        { text: "Home Tv Makeup Living", correct: "false"}, 
        { text: "Hyperlinks Text Markup Language", correct: "false"}
    ]
}, 
{
    // Question
    question: "What does CSS stand for?",
    options: [
        // Options for questions, true false string values
        { text:"Cute Style Sheets", correct: "false"},
        { text:"Cut Style Shave", correct: "false"},
        { text:"Cascading Style Sheets", correct: "true"},
        { text:"Cascading Styling Sheet", correct: "false"}
    ]
},
{
    // Question
    question: "What does API stand for?",
    options: [
        // Options for questions, true false string values
        { text:"App Programming Iteration", correct: "false"},
        { text:"Apple Programming Interface", correct: "false"},
        { text:"Application Program Iteration", correct: "false"},
        { text:"Application Programming Interface", correct: "true"}
    ]
},
{
    // Question
    question: "What HTML element will have the largest heading?",
    options: [
        // Options for questions, true false string values
        { text:"<h6>", correct: "false"},
        { text:"<h1>", correct: "true"},
        { text:"<h3>", correct: "false"},
        { text:"<h4>", correct: "false"}
    ]
},
{
    // Question
    question: "What is the default direction for flexbox unless specified?",
    options: [
        // Options for questions, true false string values
        { text:"Row", correct: "true"},
        { text:"Column", correct: "false"},
        { text:"Flex-start", correct: "false"},
        { text:"Flex-end", correct: "false"}
    ]
},
{
    // Question
    question: "What value does a Boolean have?",
    options: [
        // Options for questions, true false string values
        { text:"A string", correct: "false"},
        { text:"An Array", correct: "false"},
        { text:"A number", correct: "false"},
        { text:"True/False", correct: "true"}
    ]
},
{
    // Question
    question: "What is the correct HTML element for inserting a line break?",
    options: [
        // Options for questions, true false string values
        { text:"<p>", correct: "false"},
        { text:"<br>", correct: "true"},
        { text:"<div>", correct: "false"},
        { text:"id", correct: "false"}
    ]
},
{
    // Question
    question: "Which property is used to set text color?",
    options: [
        // Options for questions, true false string values
        { text:"text-color", correct: "false"},
        { text:"background-color", correct: "false"},
        { text:"color", correct: "true"},
        { text:"textColor", correct: "false"}
    ]
},
{
    // Question
    question: "What HTML element do we use to link the external Javascript?",
    options: [
        // Options for questions, true false string values
        { text:"<javascript>", correct: "false"},
        { text:"<scripts>", correct: "false"},
        { text:"<js>", correct: "false"},
        { text:"<script>", correct: "true"}
    ]
},
{
    // Question
    question: "How does a for loop start?",
    options: [
        // Options for questions, true false string values
        { text:"for(i = 0; i < 5; i++)", correct: "true"},
        { text:"for i = 0; i < 5; i++", correct: "false"},
        { text:"for(i = 0; i ++)", correct: "false"},
        { text:"for(i =; i < 5)", correct: "false"}
    ]
}];

// DOM for HTML elements
var startBtn = document.getElementById("start-quiz");
var quizContainer = document.getElementById("quiz-container");
var time = document.querySelector("time");
var scoreCard = document.getElementById("score");
var restart = document.getElementById("restart");

// Sets time limit to 60
var secondsLeft = 60;

// Function to start quiz once start button pressed
function startQuiz() {
    startBtn.addEventListener("click", function() {
        // Shows quiz conrainer after start button is clicked
        quizContainer.setAttribute("style", "display: flex;");
        // Hides start button
        startBtn.classList.add("hide");

        // Calls to run functions
        timeInterval();
        getQuestion();
    });
};

// Var to clear timer in later functions 
var timer;

// Function to start timer
 function timeInterval() {
        timer = setInterval(function() {
        // Start minusing time 
        secondsLeft--;
            document.getElementById("timer").textContent = secondsLeft;

        // Stops timer at 0, calls gameOver function
        if (secondsLeft === 0) {
            clearInterval(timer);
            gameOver();
        }
        // Subracts time by 1000ms intervals
    }, 1000); 
}

// Variables for index and score 
var index = 0;
var score = 0;

// Function to get question from question array
function getQuestion() {
    // DOM for question container & option buttons IDs
    var questionContainer = document.getElementById("question-container");
    var optionButtons = document.getElementById("option-buttons");

    // Gets first question and sets in question container
    var currentQuestion = questionPackages[index];
    questionContainer.textContent = currentQuestion.question;

    // Clears previous question options
    optionButtons.innerHTML = "";

    // Creates button for each option 
    currentQuestion.options.forEach(option => {
        var button = document.createElement("button");
        // Places options from array on each button
        button.textContent = option.text;
        // Stores correct true/false data
        button.dataset.correct = option.correct
        // Adds class list options container to buttons
        button.classList.add("options-container");
        // Appends new buttons to options container
        optionButtons.appendChild(button);
        // Adds event listen to new optionButtons, calls answerQuestion fybction
        button.addEventListener("click", answerQuestion);
    });

};

// Function to answer questions
function answerQuestion(e) {
    // Event after option buttons are clicked
    var chosenBtn = e.target;
    // Checks to see if stored true data matches chosen button
    if (chosenBtn.dataset.correct == "true") {
        // adds 1 to score
        score ++;
        // Changes bg color to green
        chosenBtn.setAttribute("style", "background-color: green;");
    } else {
        // if correct data is false, bg color changes to red
        chosenBtn.setAttribute("style", "background-color: red;");
        // Minus 5 seconds from timer
        secondsLeft -= 5;
    }

    // Goes to next question
    index++;

    // If questionPackages length not reached, goes to next question
    if (index < questionPackages.length) {
        // Waits 500 ms before gets next question
        var countdown = setTimeout(function(){
            getQuestion();
            // 500 ms delay
        }, 500
        )
    } else {
        // One questionPackages length reached, calls gameOver function
        gameOver();
    }
};

// Function when questions all answered or timer reaches 0
function gameOver() {
    // Hide quiz container
    quizContainer.setAttribute("style", "display: none;");
    // Shows score container
    scoreCard.classList.remove("hide");
    // Shows score
    scoreCard.innerHTML = "You got " + score + " out of 10!";
    // Stops timer
    clearInterval(timer);
    // Calls saveLastScore function
    saveLastScore();
};

// DOM HTML Elements
var fName = document.getElementById("fname");
var label = document.getElementById("name-input");
var saveBtn = document.getElementById("saveBtn")

// Function to store name in local storage
function saveLastScore() {
    // Shows Input label
    label.classList.remove("hide");
    // Shows name input
    fName.classList.remove("hide");
    // Shows save button
    saveBtn.classList.remove("hide");
    // Takes value entered from name input
    var firstName = fName.value
    var scoreValue = score
    // Stores name input in local Storage
    localStorage.setItem("fname", firstName);
    // Stores score in local storage
    localStorage.setItem("scoreValue", scoreValue);
};

// Function to show saved name & score
function renderLastScore() {
    // Gets name from local storage
    var nameInput = localStorage.getItem("fname");
    // Gets score from local Storage
    var getScore = localStorage.getItem("scoreValue");

    // Runs if not null
    if (nameInput !== null) {
        // Prevents name input from disappearing
        event.preventDefault();
        // Displays name and score
        document.getElementById("saved-score").innerHTML = nameInput + " " + getScore + " out of 10";
    };
};

// One save button is clicked, shows name score
saveBtn.addEventListener("click", function(){
    // Prevents name and score from disappearing
    event.preventDefault();
    // Calls these functions to run
    saveLastScore();
    renderLastScore();

    // Hides Score
    scoreCard.classList.add("hide");
    // Hides label input
    label.classList.add("hide");
    // Hides name input
    fName.classList.add("hide");
    // Hides save button
    saveBtn.classList.add("hide");

    // Shows restart button
    restart.classList.remove("hide");

    // Once restart button clicked, page is reloaded to start screen
    restart.addEventListener("click", function(){
        location.reload();
    })
});

// Calls startQuiz function to run entire quiz
startQuiz();
