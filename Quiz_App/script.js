const quizData = [
    {
        question: 'Which date is celebrated as Independence Day in India?',
        a: '1950',
        b: '1947',
        c: '1956',
        d: '1948',
        correct: 'b'
    },
    {
        question: 'Which is the most used programming language in 2019?',
        a: 'C++',
        b: 'Python',
        c: 'JavaScript',
        d: 'Java',
        correct: 'c'
    },
    {
        question: 'Who is the President of USA in 2020?',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'Andrew Schulz',
        d: 'Bernie Sanders',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'How To Make Lobs',
        b: 'HyperText Markup Language',
        c: 'Cascading Style Sheet',
        d: 'JavaScript Object Notation',
        correct: 'b'
    },
    {
        question: 'What was year of JavaScript launch?',
        a: '1997',
        b: '1995',
        c: '2000',
        d: '1994',
        correct: 'b'
    }
];

const quiz = document.getElementById("quiz");
const answersAll = document.querySelectorAll(".answer");
const questionT = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionT.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answersAll.forEach(answerEl => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

   return answer;
}  

function deselectAnswers() {
    answersAll.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click',() =>{

    const answer = getSelected();

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length){
            loadQuiz();
        } else {
           quiz.innerHTML = `<h2> Your score is ${score}/${quizData.length}.</h2> <button onclick="location.reload()">Reload</button>`
        }
    }
});