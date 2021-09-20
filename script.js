

(function dropingCards(){
'use strict'
    

const articles = [...document.querySelectorAll('li')];
const questions = [...document.querySelectorAll('.question')];
const icons = [...document.querySelectorAll('.icon')];
const answers = [...document.querySelectorAll('.answer')];

function openQuestion(e) {
    if(this.firstElementChild.className === 'question selected') {
    this.firstElementChild.classList.toggle("selected");
    this.firstElementChild.lastElementChild.classList.toggle("flip");
    this.lastElementChild.classList.toggle('show');
    }
    else {
    questions.forEach(el => el.classList.remove('selected'));
    icons.forEach(el => el.classList.remove('flip'));
    answers.forEach(el => el.classList.remove('show'));

    this.firstElementChild.classList.toggle("selected");
    this.firstElementChild.lastElementChild.classList.toggle("flip");
    this.lastElementChild.classList.toggle('show');
    }

}

articles.forEach(question => {
    question.addEventListener('click', openQuestion)
})

    
})()



