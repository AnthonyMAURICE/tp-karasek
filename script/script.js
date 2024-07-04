import {Question} from "../Question.js"

let counter = 0
const resultArray = []
const dataUrl = "../data/data.json"
const current = document.getElementById('current-question')
const total = document.getElementById('total-questions')
const formulaire = document.getElementById('formulaire')
const btns = document.getElementById('btn-wrapper')
const prec = document.getElementById('prec')
const next = document.getElementById('next')
const sub = document.getElementById('sub')
const body = document.querySelector('body')
const result = document.getElementById('result')

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
    const p = document.querySelectorAll('.result')
    const btnReturn = document.createElement('button')
    resultArray.push(calculateA(), calculateC(), calculateL(), calculateD(), calculateS(), calculateSBis(), calculateR())
    formulaire.remove()
    result.removeAttribute('class')
    result.setAttribute('class', 'not-hidden')
    console.log(p, resultArray)
    document.querySelector('h1').textContent = 'Résultats : '
    for(let i = 0; i < resultArray.length; i++){
        p[i].textContent += resultArray[i]
    }
    btnReturn.textContent = 'Retour'
    btnReturn.addEventListener('click', () => {
        location.reload()
    })
    body.appendChild(btnReturn)
})

function calculateA(){
    return 4*(questions[3].value + (5-questions[5].value) + questions[7].value)
}

function calculateC(){
    return 2*(questions[0].value + (5 - questions[1].value)+ questions[2].value + questions[4].value + questions[6].value + questions[8].value)
}

function calculateL(){
    return calculateA() + calculateC()
}

function calculateD(){
    return questions[9].value + questions[10].value + questions[11].value + (5-questions[12].value) + questions[13].value + questions[14].value +questions[15].value + questions[16].value + questions[17].value
}

function calculateS(){
    return questions[18].value + questions[19].value + questions[20].value + questions[21].value
}

function calculateSBis(){
    return questions[22].value + questions[23].value + questions[24].value + questions[25].value
}

function calculateR(){
    return (5-questions[26].value) + (5-questions[27].value) + questions[28].value + questions[29].value + questions[30].value + questions[31].value
}

function display(_counter){
    const question = questions[_counter]
    current.textContent = _counter + 1
    total.textContent = data.length
    formulaire.firstElementChild.remove()
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
    if(getNbQuestionsAnswered() === questions.length && sub.disabled){
        sub.removeAttribute('disabled')
    } else if(!sub.disabled){
        sub.setAttribute('disabled', true)
    }
}