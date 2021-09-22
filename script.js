
(function dropingCards(){
'use strict'
    
    const articles = [...document.querySelectorAll('li')];

    function openQuestion() {
        if(this.className === 'active') {
            this.classList.toggle('active')
        }
        else {
            articles.forEach(el => el.classList.remove('active'))
            this.classList.add("active")
        }

    }

    articles.forEach(question => {
        question.addEventListener('click', openQuestion)
    })

})()



