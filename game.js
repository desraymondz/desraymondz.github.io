function questionsGenerator () {
    const operators = ['+','-','*','/']
    const randomOperatorsPicker = Math.floor(Math.random() * 4)
    const chosenOperator = operators[randomOperatorsPicker]

    let variable1 = randomNumber(0,100)
    const variable2 = randomNumber(0,100)

    let answer 
    switch (chosenOperator) {
        case '+':
            answer = variable1 + variable2
            break;
        case '-':
            answer = variable1 - variable2
            break;
        case '*':
            answer = variable1 * variable2
            break;
        case '/':
            answer = variable1
            variable1 = variable1 * variable2
            break;
    }
    return [variable1, variable2 , answer, chosenOperator]

}

// potential error
// 8/1 = 8
// 8*1 = 8
// 1*8 = 8
// 8/0 = Error?

// 8-0 = 8
// 8+0 = 8
// 0+8 = 8

// i want to make these questions to have 2 correct answers

// todolist = fix bug, keyboard shortcut, add score, add timer, add sound


function randomNumber (min,max) {
    let randomNumber = Math.random()
    randomNumber = randomNumber * (max - min + 1) + min
    randomNumber = Math.floor(randomNumber)

    return randomNumber
}

let correctOperator

document.querySelector('#generateQ').addEventListener('click', function() {
    const q = questionsGenerator()
    correctOperator = q[3]
    
    document.querySelector('#variable1').innerHTML = q[0]
    document.querySelector('#operator').innerHTML = "?"
    document.querySelector('#variable2').innerHTML = q[1]
    document.querySelector('#answer').innerHTML = q[2]
    document.querySelector('#questionText').style.backgroundColor= 'transparent'
    
})

const operatorButtons = document.querySelectorAll('.operatorsButton')

operatorButtons.forEach(function(el){
    el.addEventListener('click', function() {

        document.querySelector('#operator').innerHTML = el.dataset.operator
        
        if (el.dataset.operator == correctOperator) {
            document.querySelector('#questionText').style.backgroundColor= '#3f3'
            // + make it unable to click the incorrect answers
        } else {
            document.querySelector('#questionText').style.backgroundColor= '#f33'
            
        }
    })
})

