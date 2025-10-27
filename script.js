let number1 ;
let number2 ;
let operator;


function add(a,b){
    return (a+b);
}

function subtract(a,b){
    return (a-b);
}

function multiply(a,b){
    return (a*b);
}

function divide(a,b){
    return(a/b);
}


function operate(n1,n2,op){

    let num1 = parseInt(n1);
    let num2 = parseInt(n2);

    switch (op){
        case "+" : return add(num1,num2);
        case "-" : return subtract(num1,num2);
        case "/" : return divide(num1,num2);
        case "*" : return multiply(num1,num2);

        default: return "NOT A VALID OPERATOR"
    }

}

function populateDisplay(){
    const button= document.querySelectorAll("button");
    let textbox = document.querySelector("#txt");

    button.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            const id = btn.id;
            console.log(id)

            if(id!= "clear" && id!="="){
                textbox.value += id
            }
        })
    })

    console.log(textbox);
}

populateDisplay();