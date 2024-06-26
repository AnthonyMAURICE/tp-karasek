import {Question} from "../Question.js"
let counter = 0
    
const dataUrl = "../data/data.json"
const current = document.getElementById('current-question')
const total = document.getElementById('total-questions')
const formulaire = document.getElementById('formulaire')
const btns = document.getElementById('btn-wrapper')
const prec = document.getElementById('prec')
const next = document.getElementById('next')
const sub = document.getElementById('sub')


async function getData(_url) {
    const response = await fetch(_url);
    return response.json();
}

const data = await getData(dataUrl);
const questions = []
for (const _dataQuestion of data) {
    const question = new Question(_dataQuestion.question);
    for (const _radio of question.htmlFieldset.querySelectorAll('input')){
        _radio.addEventListener('click', () => {
            nextBtnDis();
            subBtnDis()
        })
    }
    questions.push(question);
}

display(counter)

precBtnDis()
nextBtnDis()

if(counter == data.length-1){
    next.setAttribute('disabled', true)
}

prec.addEventListener('click', () =>{
    counter--
    precBtnDis()
    nextBtnDis()
    display(counter)
})

next.addEventListener('click', () =>{
    counter++
    precBtnDis()
    nextBtnDis()
    display(counter)
})

sub.addEventListener('click', () => {
    alert('SCORE: Osef lol   ')
})

function display(_counter){
    const question = questions[_counter]
    current.textContent = _counter + 1
    total.textContent = data.length
    formulaire.innerHTML = ""
    formulaire.appendChild(question.htmlFieldset)
    formulaire.appendChild(btns)
}

function getNbQuestionsAnswered(){
    let i = 0;
    for (const _question of questions) {
        if (_question.value > 0) {
            i ++
        }
    }
    return i;
}

function nextBtnDis(){
    if((counter === questions.length - 1) || (counter >= getNbQuestionsAnswered())){
        next.setAttribute('disabled', true)
    } else if (next.disabled){
        next.removeAttribute('disabled')
    }
}
function precBtnDis(){
    if(counter === 0) {
        prec.setAttribute('disabled', true)
    } else if (prec.disabled) {
        prec.removeAttribute('disabled')
    }
}
function subBtnDis(){
    console.log()
    if(getNbQuestionsAnswered() === questions.length && sub.disabled){
        sub.removeAttribute('disabled')
    } else if(!sub.disabled){
        sub.setAttribute('disabled', true)
    }
}