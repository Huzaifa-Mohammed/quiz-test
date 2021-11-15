const MainPage = document.getElementById("main-page");
const quizPage = document.getElementById("quiz-page");
const questionAsked = document.getElementById("question-title");
const endingPage = document.getElementById("ending-page");

var Index = 0;

let questions = [{
        Question: "What does HTML stands for: ",
        Options: ["HyperText PreProcessor", "Hyper text markup LAnguage", "Hyper Multiple language", "Hyper multi Language"],
        Answer: "Hyper text markup LAnguage",
    },
    {
        Question: "What does Css stand for",
        Options: ["Common style sheet", "computer style sheet", "cascading style sheet", "colorful style sheet"],
        Answer: "cascading style sheet",
    },
    {
        Question: "What does PHP stand for",
        Options: [
            "hyper text preprocessor",
            "hyper Preprogramming",
            "Hometext Preprocessor",
            "None",
        ],
        Answer: "hyper text preprocessor",
    },
    {
        Question: "What does SQL stand for ",
        Options: ["Stylish Question language", "statement question language", "structured query language", "styleSheet query language"],
        Answer: "structured query language",
    },
    {
        Question: "scripting language",
        Options: ["JavaScript", "HTML", "CSS", "Java"],
        Answer: "JavaScript",
    },
];

//onclick

MainPage.addEventListener("click", startQuiz);

function startQuiz() {

    displayQuestion();
}


function displayQuestion() {
    quizPage.textContent = "";
    MainPage.classList.add("hide");
    quizPage.classList.remove("hide");

    let Question1 = document.createElement("h2");
    Question1.classList.add("question-title");
    Question1.innerHTML = questions[Index].Question;
    quizPage.appendChild(Question1);

    let orderedList = document.createElement("ol");

    for (let i = 0; i < 4; i++) {
        let myOptions = document.createElement("li");
        myOptions.classList.add("btn");
        myOptions.innerHTML = questions[Index].Options[i];

        Question1.appendChild(orderedList);
        orderedList.appendChild(myOptions);
    }
    quizPage.appendChild(orderedList);

    var button = document.querySelectorAll(".btn");
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function() {
            var userChoice = this.textContent;
            var Message = document.createElement("p");
            if (userChoice === questions[Index].Answer) {
                Message.textContent = "Correct";
            } else {
                Message.textContent = "Incorrect";

            }

            quizPage.appendChild(Message);
            Index++;


            if (Index < questions.length) {
                setTimeout(displayQuestion, 1000);
            } else {
                clearInterval(clockId);

                quizPage.classList.add("hide");
            }
        });
    }
}