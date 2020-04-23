var buttons = document.getElementsByClassName('buttons');
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;
display.style.color = 'blue';
display.style.textAlign = 'right';
display.style.fontSize = '35px';
display.style.marginTop = '12px';

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        switch(value){
            case '+':
                operator = '+';
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                break;
            case '-':
                operator = '-';
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                break;
            case '+/-':
                display.innerText = eval((display.innerText)*(-1));
                break;
            case '/':
                operator = '/';
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                break;
            case '%':
                operator = '%';
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                break;
            case '*':
                operator = '*';
                operand1 = parseFloat(display.textContent);
                display.innerText = "";
                break;
            case '=':
                operand2 = parseFloat(display.textContent);
                var ans = eval(operand1+" "+operator+" "+operand2);
                if(operator == '/'){
                    if(operand2 == '0'){
                        display.innerText = "Error";
                        break;
                    }
                }
                display.innerText = ans;
                break;
            case 'ac':
                display.innerText = "";
                break;
            default:
                display.innerText+= value;
                break;
        }
    });
}