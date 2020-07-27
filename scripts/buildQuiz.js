//https://www.sitepoint.com/simple-javascript-quiz/
// Functions
function buildQuiz(questions){
    // variable to store the HTML output
    const output = [];

    // for each question...
    questions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers){
                // ...add an HTML radio button
                answers.push(
                    `<label>
                        &emsp;<input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter}.
                        ${currentQuestion.answers[letter]}
                    </label><br>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
                    <div class="question"><b> ${currentQuestion.question} </b></div>
                    <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        }
    );
    
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults(questions) {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    questions.forEach( (currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'darkgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    }
    else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length-1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    }
    else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const testArray = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
    }
];

const Example = [
    {
        question: "",
        answer: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answer: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    },
    {
        question: "",
        answer: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: ""
    }
];

const OOP = [
    {
        question: "Question one.",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer"
        },
        correctAnswer: "a"
    },
    {
        question: "Question one.",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer"
        },
        correctAnswer: "b"
    },
    {
        question: "Question one.",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer"
        },
        correctAnswer: "c"
    }
];

// Start the quiz
// Display quiz right away
var quizName = document.getElementById("quizName").name;
switch (quizName) {
   case 'testArray': buildQuiz(testArray);
   break;

   case 'OOP': buildQuiz(OOP);
   break;

   default: buildQuiz(OOP)
}

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// Event Listeners
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// On submit, show results
/*submitButton.addEventListener('click', function(){
    showResults(testArray);
}, false);*/