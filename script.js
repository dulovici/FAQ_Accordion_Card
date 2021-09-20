
(function dropingCards(){
'use strict'
    
    const articles = [...document.querySelectorAll('li')];
    const questions = [...document.querySelectorAll('.question')];
    const icons = [...document.querySelectorAll('.icon')];
    const answers = [...document.querySelectorAll('.answer')];


    function toggleClasses(element) {
        element.firstElementChild.classList.toggle("selected");
        element.firstElementChild.lastElementChild.classList.toggle("flip");
        element.lastElementChild.classList.toggle('show');
    }

    function openQuestion() {
        if(this.firstElementChild.className === 'question selected') {
        toggleClasses(this)
        }

        else {
        questions.forEach(el => el.classList.remove('selected'));
        icons.forEach(el => el.classList.remove('flip'));
        answers.forEach(el => el.classList.remove('show'));
        toggleClasses(this)
        }
    }

    articles.forEach(question => {
        question.addEventListener('click', openQuestion)
    })

})()



