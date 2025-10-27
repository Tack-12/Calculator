let number1;
let number2;
let operator;


function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    if(b==0){
        return "YOU CHEESY BOI"
    }
    return (a / b);
}


function operate(n1, n2, op) {

    let num1 = parseInt(n1);
    let num2 = parseInt(n2);

    switch (op) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "/": return divide(num1, num2);
        case "*": return multiply(num1, num2);

        default: return "NOT A VALID OPERATOR"
    }

}

function populateDisplay() {
    const button = document.querySelectorAll("button");
    let textbox = document.querySelector("#txt");
    let totaltext="";
    button.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.id;
            if (id != "clear" && id != "=") {
                textbox.value += id
                totaltext += id;
            }
            else if (id == "=") {
                equation_eval(totaltext);
                let result = operate(number1,number2,operator);
                textbox.value = result;
                totaltext = textbox.value;

            }
            else if (id == "clear"){
                textbox.value= "";
                totaltext= "";
            }
        })

    })


}

function equation_eval(string) {
    for (i = 0; i < string.length - 1; i++) {
        if (string[i] == "+" || string[i] == "-" || string[i] == "/" || string[i] == "*") {
            operator = string[i];
            break;
        }
    }
    const numbers = string.split(operator);
    number1 = numbers[0];
    number2 = numbers[1];


}


populateDisplay()