const quizData= [
    {
    question: 'En aktif Twitter kullanıcısı?',
    a: 'Fatih Kadir Alkın',
    b: 'İlker Kurtel',
    c: 'Didem Küçükkaraslan',
    d: 'Azmi Mengü',
    e: 'Onur Aslan',
    correct: 'a',  
    },
    {
     question: 'En komik Twitter kullanıcısı?',
     a: 'Fatih Kadir Alkın',
     b: 'İlker Kurtel',
     c: 'Didem Küçükkaraslan',
     d: 'Azmi Mengü',
     e: 'Onur Aslan',
    correct: 'b',  
    },
    {
        question: 'En üretken Twitter kullanıcısı?',
        a: 'Fatih Kadir Alkın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
       correct: 'c',  
       },
       {
        question: 'Co-founder zetupme?',
        a: 'Fatih Kadir Alkın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
       correct: 'e',  
       },
    
]

const quiz = document.getElementById('quiz')
const answerEls= document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score=0

loadQuiz()

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    deselectedAnswers()

    questionEl.innerText = currentQuizData.question 
    a_text.innnerText = currentQuizData.a
    b_text.innnerText = currentQuizData.b
    c_text.innnerText = currentQuizData.c
    d_text.innnerText = currentQuizData.d
    e_text.innnerText = currentQuizData.e
}
    
    

function deselectedAnswers(){
answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelection(){
    let answer 

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer

}


submitBtn.addEventListener("click",()=>{
    const answer = getSelection()


// console.log(answer);

if (answer){
    if (answer == quizData [currentQuiz].correct) {
        score++
    }

    currentQuiz++

    if(currentQuiz<quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML= `
        <h2> Test Tamamlandı, ${score * 20} puan aldınız😉</h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene @ | </button>

        `

    }
        
    }


})


