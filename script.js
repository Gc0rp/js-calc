const screenText = document.getElementsByClassName("display-text");
var total = 0;
var currentOperations = "";
var operatorPressed = false;


function operatorClick(operator){
    if(operatorPressed === true){
        currentOperations += ")" + operator;
        currentOperations = "(" + currentOperations;
    } else{
        currentOperations += operator;
    }
    screenText[0].innerText = "0";
}

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

            switch(event.target.innerText){
                case '+':
                    operatorClick('+');
                    break;
                case '-':
                    operatorClick('-');
                    break;
                case 'x':
                    operatorClick('*');
                    break;
                case '÷':
                    operatorClick('/');
                    break;
                case '=':
                    screenText[0].innerText = eval(currentOperations);
                    break;
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