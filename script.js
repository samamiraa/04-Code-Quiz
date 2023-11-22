var questionPackages = [
    {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language",
              "Hotdogs Tacoos Muffins Linguini", 
              "Home Tv Makeup Living", 
              "Hyperlinks Text Markup Language"],
    answer: "Hyper Text Markup Language"
}, 
{
    question: "What does CSS stand for?",
    options: ["Cute Style Sheets",
              "Cut Style Shave",
              "Cascading Style Sheets",
              "Cascading Styling Sheet"],
    answer: "Cascading Style Sheets"
},
{
    question: "What does API stand for?",
    options: ["App Programming Iteration",
              "Apple Programming Interface",
              "Application Program Iteration",
              "Application Programming Interface"],
    answer: "Application Programming Interface"
},
{
    question: "What HTML element will have the largest heading?",
    options: ["<h6>",
              "<h1>",
              "<h3>",
              "<h4>"],
    answer: "<h1>"
},
{
    question: "What is the default direction for flexbox unless specified?",
    options: ["Row",
              "Column",
              "Flex-start",
              "Flex-end"],
    answer: "Row"
},
{
    question: "What value does a Boolean have?",
    options: ["A string",
              "An Array",
              "A number",
              "True/False"],
    answer: "True/False"
},
{
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<p>",
              "<br>",
              "<div>",
              "id"],
    answer: "<br>"
},
{
    question: "Which property is used to set text color?",
    options: ["text-color",
              "background-color",
              "color",
              "textColor"],
    answer: "color"
},
{
    question: "What HTML element do we use to link the external Javascript?",
    options: ["<javascript>",
              "<scripts>",
              "<js>",
              "<script>"],
    answer: "<script>"
},
{
    question: "How does a for loop start?",
    options: ["for(i = 0; i < 5; i++)",
              "for i = 0; i < 5; i++",
              "for(i = 0; i ++)",
              "for(i =; i < 5)"],
    answer: "for(i = 0; i < 5; i++)"
}];

var timer = document.getElementById("timer");
var scoreCard = document.getElementById("score-card");
var start = document.getElementById("start-quiz");
var save = document.getElementById("save");
var pTags = document.querySelectorAll("p");
var time = document.getElementById("time");
var quizTitle = document.getElementById("quiz-title");
var startBtn = document.getElementById("start-quiz");
var saveBtn = document.getElementById("save");

document.body.style.backgroundColor = "#ffecec";
document.body.style.textAlign = "center";
time.setAttribute("style", "font-size: 25px; font-weight: bold;");
quizTitle.setAttribute("style", "text-align: center;");
scoreCard.setAttribute("style", "text-align: left;");

