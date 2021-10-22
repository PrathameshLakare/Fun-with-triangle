const quizeForm = document.querySelector('.quize-form');
const submitAnswer = document.querySelector('#submit-answer-btn');
const outputEl = document.querySelector('#output');


const correctAnswer = ["90", "right angled"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizeForm);

    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score+1;
        }
        index = index+1;
    }
    outputEl.innerText = "your score is "+ score;
}

submitAnswer.addEventListener("click", calculateScore);