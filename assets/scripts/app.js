const defaultResult = 0;
let currentResult = defaultResult

function getUserNumberInput(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function add() {
    const enteredNumber = getUserNumberInput()
    currentResult = currentResult + enteredNumber
    createAndWriteOutput('+', currentResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserNumberInput()
    currentResult = currentResult + enteredNumber
    createAndWriteOutput('-', currentResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput()
    currentResult = currentResult + enteredNumber
    createAndWriteOutput('*', currentResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumberInput()
    currentResult = currentResult + enteredNumber
    createAndWriteOutput('/', currentResult, enteredNumber)
}

addBtn.addEventListener('click', add)