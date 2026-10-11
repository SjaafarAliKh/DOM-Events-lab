// 1. cache the elements
const displayElement = document.querySelector('#display')
const numberElements = document.querySelectorAll('.number')
const operatorElements = document.querySelectorAll('.operator')
const equalsElement = document.querySelector('#equals')
const clearElement = document.querySelector('#clear')


// 2. console.log()...check that everything is cached correctly
console.log(displayElement)
console.log(numberElements)
console.log(operatorElements)
console.log(equalsElement)
console.log(clearElement)


// calculator memory (state)
let firstNumber = null
let currentOperator = null
let waitingForSecondNumber = false

// 3. write functions
function handleNumber(event) {
    const digit = event.target.textContent

    if (displayElement.textContent === '0' || waitingForSecondNumber) {
        displayElement.textContent = digit
        waitingForSecondNumber = false
    } 
    else {
        displayElement.textContent = displayElement.textContent + digit
    }
}

function handleOperator(event) {
    firstNumber = Number(displayElement.textContent)
    currentOperator = event.target.textContent
    waitingForSecondNumber = true
}

function calculate() {
    if (currentOperator === null) {
        return
    }

    const secondNumber = Number(displayElement.textContent)
    let result

    if (currentOperator === '+') {
        result = firstNumber + secondNumber
    }
    else if (currentOperator === '-') {
        result = firstNumber - secondNumber
    }
    else if (currentOperator === '*') {
        result = firstNumber * secondNumber
    }
    else if (currentOperator === '/') {
        if (secondNumber === 0) {
            displayElement.textContent = 'Error'
            firstNumber = null
            currentOperator = null
            waitingForSecondNumber = true
            return
        }

        result = firstNumber / secondNumber
    }

    displayElement.textContent = String(result)
    firstNumber = null
    currentOperator = null
    waitingForSecondNumber = true
}


function clearCalculator() {
    displayElement.textContent = '0'
    firstNumber = null
    currentOperator = null
    waitingForSecondNumber = false
}

// 4. add event listeners
for (let oneElement of numberElements) {
    oneElement.addEventListener('click', handleNumber)
}

for (let oneElement of operatorElements) {
    oneElement.addEventListener('click', handleOperator)
}

equalsElement.addEventListener('click', calculate)
clearElement.addEventListener('click', clearCalculator)






