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

const Example = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctanswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctanswer: ""
    },
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctanswer: ""
    }
];

const OOP = [
    {
        question: "Which of the following statements is true about Abstraction?",
        answers: {
            a: "Data abstraction is the process of hiding certain details and showing only essential information to the user.",
            b: "Managing the complexity of a system through the use of hierarchical classifications.",
            c: "On a high level we are hiding the functionality of the underlying systems.",
            d: "All of the above."
        },
        correctanswer: "d"
    },
    {
        question: "Question one.",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer"
        },
        correctanswer: "b"
    },
    {
        question: "Question one.",
        answers: {
            a: "answer",
            b: "answer",
            c: "answer"
        },
        correctanswer: "c"
    }
];

const HTML = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: "Home Tool Markup Language",
            b: "Hyper Text Markup Language",
            c: "Hyperlinks and Text Markup Language"
        },
        correctanswer: "b"
    },
    {
        question: "Who is making the web standards?",
        answers: {
            a: "Google",
            b: "The World Wide Web Consortium",
            c: "Mozilla",
            d: "Microsoft"
        },
        correctanswer: "b"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: {
            a: "<h1>",
            b: "<head>",
            c: "<h6>",
            d: "<heading>"
        },
        correctanswer: "a"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answers: {
            a: "<br>",
            b: "<break>",
            c: "<lb>"
        },
        correctanswer: "a"
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answers: {
            a: "<body style='background-color:yellow;'",
            b: "<background>yellow</background>",
            c: "<body bg='yellow'>"
        },
        correctanswer: "a"
    },
    {
        question: "Choose the correct HTML element to define important text",
        answers: {
            a: "<strong>",
            b: "<i>",
            c: "<b>",
            d: "<important>"
        },
        correctanswer: "a"
    },
    {
        question: "Choose the correct HTML element to define emphasized text",
        answers: {
            a: "<em>",
            b: "<i>",
            c: "<italic>"
        },
        correctanswer: "a"
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        answers: {
            a: "<a>http://w3schools.com</a>",
            b: "<a url='http://www.w3schools.com'>W3Schools.com</a>",
            c: "<a href='http://www.w3schools.com'>W3Schools</a>",
            d: "<a name='http://www.w3schools.com'>W3Schools.com</a>"
        },
        correctanswer: "c"
    },
    {
        question: "Which character is used to indicate an end tag?",
        answers: {
            a: "/",
            b: "<",
            c: "*",
            d: "^"
        },
        correctanswer: "a"
    },
    {
        question: "How can you open a link in a new tab/browser window?",
        answers: {
            a: "<a href='url' new>",
            b: "<a href='url' target='_blank'>",
            c: "<a href='url' target='new'>"
        },
        correctanswer: "b"
    },
    {
        question: "Which of these elements are all &lt;table&gt; elements?",
        answers: {
            a: "&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;",
            b: "&lt;table&gt;&lt;tr&gt;&lt;tt&gt;",
            c: "&lt;table&gt;&lt;tr&gt;&lt;td&gt;",
            d: "&lt;thead&gt;&lt;body&gt;&lt;tr&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "Inline elements are normally displayed without starting a new line.",
        answers: {
            a: "True",
            b: "False"
        },
        correctanswer: "a"
    },
    {
        question: "How can you make a numbered list?",
        answers: {
            a: "&lt;list&gt;",
            b: "&lt;ol&gt;",
            c: "&lt;ul&gt;",
            d: "&lt;dl&gt;"
        },
        correctanswer: "b"
    },
    {
        question: "How can you make a bulleted list?",
        answers: {
            a: "&lt;ol&gt;",
            b: "&lt;ul&gt;",
            c: "&lt;dl&gt;",
            d: "&lt;list&gt;"
        },
        correctanswer: "b"
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        answers: {
            a: "&lt;input type='check'",
            b: "&lt;check&gt;",
            c: "&lt;input type='checkbox'&gt;",
            d: "&lt;checkbox&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "What is the correct HTML for making a text input field?",
        answers: {
            a: "&lt;input type='textfield'&gt;",
            b: "&lt;textbox&gt;",
            c: "&lt;input type='text'&gt;",
            d: "&lt;textinput type='text'&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        answers: {
            a: "&lt;input type='list'&gt;",
            b: "&lt;list&gt;",
            c: "&lt;select&gt;",
            d: "&lt;input type='list'&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "What is the correct HTML for making a text area?",
        answers: {
            a: "&lt;textarea&gt;",
            b: "&lt;input type='textarea'&gt;",
            c: "&lt;input type='textbox'&gt;"
        },
        correctanswer: "a"
    },
    {
        question: "What is the correct HTML for inserting an image?",
        answers: {
            a: "&lt;image src='image.gif' alt='MyImage'&gt;",
            b: "&lt;img alt='MyImage'&gt;image.gif&lt;/img&gt;",
            c: "&lt;img src='image.gif' alt='MyImage'&gt;",
            d: "&lt;img href='image.gif' alt='MyImage'&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "What is the correct HTML for inserting a background image?",
        answers: {
            a: "&lt;body style='background-image:url(background.gif)'&gt;",
            b: "&lt;body bg='background.gif'&gt;",
            c: "&lt;background img='background.gif'&gt;"
        },
        correctanswer: "a"
    },
    {
        question: "An &lt;iframe&gt; is used to display a web page within a web page.",
        answers: {
            a: "False",
            b: "True",
            c: "There is no such thing as an &lt;iframe&gt;"
        },
        correctanswer: "b"
    },
    {
        question: "HTML comments start with &lt;!-- and end with --&gt;",
        answers: {
            a: "False",
            b: "True"
        },
        correctanswer: "b"
    },
    {
        question: "Block elements are normally displayed without starting a new line.",
        answers: {
            a: "False",
            b: "True"
        },
        correctanswer: "a"
    },
    {
        question: "Which HTML element defines the title of a document?",
        answers: {
            a: "&lt;head&gt;",
            b: "&lt;meta&gt;",
            c: "&lt;title&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: {
            a: "src",
            b: "title",
            c: "longdesc",
            d: "alt"
        },
        correctanswer: "d"
    },
    {
        question: "Which doctype is correct for HTML5?",
        answers: {
            a: "&lt;!DOCTYPE HTML5&gt;",
            b: "&lt;!DOCTYPE html&gt;",
            c: "&lt;!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 5.0//EN' 'http://www.w3.org/TR/html5/strict.dtd'&gt;"
        },
        correctanswer: "b"
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        answers: {
            a: "&lt;section&gt;",
            b: "&lt;bottom&gt;",
            c: "&lt;footer&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "In HTML, you can embed SVG elements directly into an HTML page.",
        answers: {
            a: "True",
            b: "False"
        },
        correctanswer: "a"
    },
    {
        question: "What is the correct HTML element for playing video files?",
        answers: {
            a: "&lt;media&gt;",
            b: "&lt;video&gt;",
            c: "&lt;movie&gt;"
        },
        correctanswer: "b"
    },
    {
        question: "What is the correct HTML element for playing audio files?",
        answers: {
            a: "&lt;audio&gt;",
            b: "&lt;mp3&gt;",
            c: "&lt;sound&gt;"
        },
        correctanswer: "a"
    },
    {
        question: "The HTML global attribute, 'contenteditable' is used to:",
        answers: {
            a: "Return the position of the first found occurrence of content inside a string",
            b: "Specify whether the content of an element should be editable or not",
            c: "Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
            d: "Update content from the server"
        },
        correctanswer: "b"
    },
    {
        question: "In HTML, onblur and onfocus are:",
        answers: {
            a: "Event attributes",
            b: "Style attributes",
            c: "HTML elements"
        },
        correctanswer: "a"
    },
    {
        question: "Graphics defined by SVG is in which format?",
        answers: {
            a: "HTML",
            b: "XML",
            c: "CSS"
        },
        correctanswer: "b"
    },
    {
        question: "The HTML &lt;canvas&gt; element is used to:",
        answers: {
            a: "display database records",
            b: "manipulate data in MySQL",
            c: "create draggable elements",
            d: "draw graphics"
        },
        correctanswer: "d"
    },
    {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        answers: {
            a: "validate",
            b: "formvalidate",
            c: "placeholder",
            d: "required"
        },
        correctanswer: "d"
    },
    {
        question: "Which input type defines a slider control?",
        answers: {
            a: "range",
            b: "controls",
            c: "slider",
            d: "search"
        },
        correctanswer: "a"
    },
    {
        question: "Which HTML element is used to display a scalar measurement within a range?",
        answers: {
            a: "&lt;meter&gt;",
            b: "&lt;gauge&gt;",
            c: "&lt;range&gt;",
            d: "&lt;measure&gt;"
        },
        correctanswer: "a"
    },
    {
        question: "Which HTML element defines navigation links?",
        answers: {
            a: "&lt;navigation&gt;",
            b: "&lt;navigate&gt;",
            c: "&lt;nav&gt;"
        },
        correctanswer: "c"
    },
    {
        question: "In HTML, what does the &lt;aside&gt; element define?",
        answers: {
            a: "A navigation list to be shown at the left side of the page",
            b: "The ASCII character-set; to send information between computers on the internet",
            c: "Content aside from the page content"
        },
        correctanswer: "c"
    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        answers: {
            a: "&lt;section&gt;",
            b: "&lt;header&gt;",
            c: "&lt;top&gt;",
            d: "&lt;head&gt;"
        },
        correctanswer: "b"
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
    
    case 'HTML': buildQuiz(HTML);
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