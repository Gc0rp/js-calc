
const screenText = document.getElementsByClassName("display-text");

const total = 0;
const currentOperator;

document.querySelector(".number-pad").addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){    

        if(event.target.innerText === 'C'){
        
            screenText[0].innerText = "0";
        
        } else if(event.target.innerText === "←"){
        
            screenText[0].innerText = screenText[0].innerText.split('').splice(0, screenText[0].innerText.length - 1).join('');
        
        } else if(event.target.className.split(' ').indexOf("operation") === 1){
            
            if(event.target.innerText === '+'){ 
                
            }

        } else 
        {
            console.log();
            screenText[0].innerText += (event.target.innerText);
        }
    }
});