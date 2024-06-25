import {Question} from "../Question.js"
let save = localStorage
let counter = 0
if(save.getItem('current-question') !== null){
    counter = save.getItem('current-question')
}
    
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
const question = new Question(data[counter].question)

if(counter == 0){
    prec.setAttribute('disabled', true)
}

if(counter == data.length-1){
    next.setAttribute('disabled', true)
}

prec.addEventListener('click', () =>{
    if(counter > 0){
        counter--
    }
    current.textContent = counter
    save.setItem('current-question', counter)
})

next.addEventListener('click', () =>{
    counter++
    current.textContent = counter
    save.setItem('current-question', counter)
})

formulaire.appendChild(question.htmlFieldset)
formulaire.appendChild(btns)
current.textContent = data[counter].id
total.textContent = data.length

