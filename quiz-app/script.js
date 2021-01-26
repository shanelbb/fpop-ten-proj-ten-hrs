const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the 46th President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "Mihai Andrei",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Madeup Language",
        c: "Hypertext Markdown Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1999",
        b: "1995",
        c: "2001",
        d: "1988",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz")
const quiz_header = document.getElementById('quiz_header')
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question')
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById('submit')

let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswer();

   

    const currentQuizData = quizData[currentQuestion];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function getSelected() {
let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++
        }
        currentQuestion++
        if (currentQuestion < quizData.length) {           
            loadQuiz();
        } else {
            if (score === quizData.length) {
                quiz.innerHTML = `
            <h2>You answered ${score} of ${quizData.length} questions correctly.</h2> 
            <p>Congratulations! You got a perfect score!</p>
            <button onclick='location.reload()'>Start Over</button>`
            } else {
                quiz.innerHTML = `
                <h2>You answered ${score} of ${quizData.length} questions correctly.</h2> 
                <button onclick='location.reload()'>Start Over</button>`
            }
        }
    } else {
        alert("Please select an answer!")
    }
} )