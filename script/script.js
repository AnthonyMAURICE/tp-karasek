import {Question} from "../Question.js"
let counter = 0
    
const url = "../data/data.json"
const current = document.getElementById('current-question')
const total = document.getElementById('total-questions')
const formulaire = document.getElementById('formulaire')
const btns = document.getElementById('btn-wrapper')
const prec = document.getElementById('prec')
const next = document.getElementById('next')


async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

const data = await getData(url);
const questions = []
for (const _question of data) {
    questions.push(new Question(_question.question));
}

display(counter)

if(counter == data.length-1){
    next.setAttribute('disabled', true)
}

prec.addEventListener('click', () =>{
    if(counter > 0){
        counter--
    }
    if(counter == 0){
        prec.setAttribute('disabled', true)
    }
    if(counter < data.length){
        next.removeAttribute('disabled')
    }
    display(counter)
})

next.addEventListener('click', () =>{
    if(counter <= data.length){
        counter++
    }
    if(counter == data.length-1){
        next.setAttribute('disabled', true)
    }
    if(counter > 0){
        prec.removeAttribute('disabled')
    }
    display(counter)
})

function display(_counter){
    const question = questions[_counter]
    current.textContent = _counter + 1
    total.textContent = data.length
    formulaire.innerHTML = ""
    formulaire.appendChild(question.htmlFieldset)
    formulaire.appendChild(btns)
}




