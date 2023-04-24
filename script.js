const quizData = [
    {
        question: "Who is the president of Zimbabwe?",
        a: "Emmerson Mnangagwa",
        b: "Elon Musk",
        c: "Joe Biden",
        d: "Donald Trump",
        Correct: "a",
    },
    {
        question: "Is the earth a circle?",
        a: "False",
        b: "True",
        c: "Maybe",
        d: "it is a square",
        Correct: "b", 
    },
    {
        question: "Who created the earth and humans?",
        a: "GOD",
        b: "JESUS",
        c: "Satan",
        d: "Lucifer",
        Correct: "a",
    },
    {
        question: "How many children do Tonderai and Lucia have?",
        a: "6",
        b: "20",
        c: "2",
        d: "13",
        Correct: "c" ,
    },
    {
        question: "What is the first born name?",
        a: "Tanaka",
        b: "Ellen",
        c: "Nyasha",
        d: "Tinevimbo",
        Correct: "d"
    },
    {
        question: "What is the second born's name?",
        a: "Takura",
        b: "Makanaka",
        c: "Farirai",
        d: "Ruvarashe",
        Correct: "b"
    },
    {
        question: "What is the third  born's name?",
        a: "None",
        b: "Anold",
        c: "Noku",
        d: "Maita",
        Correct: "a"
    },
    {
        question: "How many siblings does Lucia have",
        a: "23",
        b: "44",
        c: "5",
        d: "2",
        Correct: "c"
    },
    {
        question: "How many siblings does Tonderai have?",
        a: "23",
        b: "20",
        c: "3",
        d: "10",
        Correct: "d"
    },
    {
        question: "Which sibling does Lucia live with?",
        a: "Felly",
        b: "Eddy",
        c: "Omega",
        d: "David",
        Correct: "a"
    },
    

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    
    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].Correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})