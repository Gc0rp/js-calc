const screenText = document.getElementsByClassName("display-text");

var total = 0;
var currentOperations = "";
var operatorPressed = false;
var frontIsZero = true;

document.querySelector(".number-pad").addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){    

        if(event.target.innerText === 'C'){
            screenText[0].innerText = "0";
            total = 0;
            currentOperations = "";
        } else if(event.target.innerText === "←"){
            if(screenText[0].innerText !== 0 && screenText[0].innerText.length >= 1){
                currentOperations = currentOperations.split('').slice(0, currentOperations.length - 1).join('');
                screenText[0].innerText = screenText[0].innerText.split('').splice(0, screenText[0].innerText.length - 1).join('');
            }
        } else if(event.target.className.split(' ').indexOf("operation") === 1){
            
            operatorPressed = true;
            console.log(event.target.innerText);
            if(event.target.innerText === '+'){ 

                if(operatorPressed === true){
                    currentOperations += ")+";
                    currentOperations = "(" + currentOperations;
                } else{
                    currentOperations += "+";
                }
                screenText[0].innerText = "0";

            } else if(event.target.innerText === '-'){
                
                if(operatorPressed === true){
                    currentOperations += ")-";
                    currentOperations = "(" + currentOperations;
                } else {
                    currentOperations += "-";
                }
                screenText[0].innerText = "0"
            
            } else if (event.target.innerText === 'x'){

                if(operatorPressed === true){
                    currentOperations += ")*";
                    currentOperations = "(" + currentOperations;
                } else {
                    currentOperations += "*";
                }
                screenText[0].innerText = "0";

            } else if(event.target.innerText === "÷"){
                if(operatorPressed === true){
                    currentOperations += ")/";
                    currentOperations = "(" + currentOperations;
                } else {
                    currentOperations += "/";
                }
                screenText[0].innerText = "0";
                
            } else if(event.target.innerText === '='){
                screenText[0].innerText = eval(currentOperations);
            }

        } else {
            if(screenText[0].innerText === "0"){
                screenText[0].innerText = (event.target.innerText);
            } else {
                screenText[0].innerText += (event.target.innerText);
            }
            currentOperations += event.target.innerText;
            console.log(currentOperations);
        }
    }
});