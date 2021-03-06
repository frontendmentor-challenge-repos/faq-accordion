const faq = document.getElementById('faq');
const accordion = document.getElementById('accordion');

const questions = Array.from(document.querySelectorAll('.accordion__question'))
const answers = Array.from(document.querySelectorAll('.accordion__answer'))

const removeClass = (target, classToRemove) => {

    target.forEach(t => {
        t.classList.remove(classToRemove)
    })
}

accordion.addEventListener('click', (e) => {

    if (!e.target.classList.contains('accordion__question')) return

    removeClass(questions, 'accordion__question--active')
    removeClass(answers, 'accordion__answer--active')
    
    e.target.classList.add('accordion__question--active')
    e.target.nextElementSibling.classList.add('accordion__answer--active')
})
