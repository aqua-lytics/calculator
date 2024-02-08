//variables
let equation = "";

const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
const six=document.getElementById('six');
const seven=document.getElementById('seven');
const eight=document.getElementById('eight');
const nine=document.getElementById('nine');
const zero=document.getElementById('zero');
const point=document.getElementById('point');

const add=document.getElementById('add');
const minus=document.getElementById('minus');
const multiply=document.getElementById('multiply');
const divide=document.getElementById('divide');

const clear=document.getElementById('clear');
const del=document.getElementById('del');

const equal=document.getElementById('equal');

const screen=document.getElementById('screen');
const opscreen=document.getElementById('operationscreen');

//functions

clear.addEventListener('click',function(){
    screen.textContent="";
    equation="";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    enableAllOperationButtons();
    opscreen.textContent='';
});

one.addEventListener('click',function(){
    screen.textContent+="1";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    enableAllOperationButtons();
    opscreen.textContent='';
});

two.addEventListener('click',function(){
    screen.textContent+="2";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    enableAllOperationButtons();
    opscreen.textContent='';
});

three.addEventListener('click',function(){
    screen.textContent+="3";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    enableAllOperationButtons();
    opscreen.textContent='';
});

four.addEventListener('click',function(){
    screen.textContent+="4";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    opscreen.textContent='';
    enableAllOperationButtons();
});

five.addEventListener('click',function(){
    screen.textContent+="5";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    opscreen.textContent='';
    enableAllOperationButtons();
});

six.addEventListener('click',function(){
    screen.textContent+="6";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    opscreen.textContent='';
    enableAllOperationButtons();
});

seven.addEventListener('click',function(){
    screen.textContent+="7";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    opscreen.textContent='';
    enableAllOperationButtons();
});

eight.addEventListener('click',function(){
    screen.textContent+="8";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    enableAllOperationButtons();
    opscreen.textContent='';
});

nine.addEventListener('click',function(){
    screen.textContent+="9";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    enableAllOperationButtons();
    opscreen.textContent='';
});

zero.addEventListener('click',function(){
    screen.textContent+="0";
    addClicked = false;
    minusClicked = false;
    multiplyClicked = false;
    divideClicked = false;
    enableAllOperationButtons();
    opscreen.textContent='';
});


point.addEventListener('click',function(){
    if (!screen.textContent.includes(".")) {
        screen.textContent += ".";
        addClicked = false;
        minusClicked = false;
        multiplyClicked = false;
        divideClicked = false;
        enableAllOperationButtons();
        opscreen.textContent='';
    }    
});

del.addEventListener('click',function(){
    screen.textContent = screen.textContent.slice(0, -1);
});

equal.addEventListener('click', function() {
    equation += screen.textContent;
    var answer = eval(equation);
    if (!isNaN(answer)) {
        answer = formatNumber(answer);
        screen.textContent = answer;
    } else {
        screen.textContent = "Error";
    }
    equation = ""; 
    opscreen.textContent = '';
});


let lastOperationButton = null;


let addClicked = false;
let minusClicked = false;
let multiplyClicked = false;
let divideClicked = false;


add.addEventListener('click', function() {
    if (screen.textContent !== "" && !addClicked) {
        equation += screen.textContent + "+";
        screen.textContent = "";
        lastOperationButton = add;
        addClicked = true;
        opscreen.textContent+='+';
        disableButton(add);
    }
});

minus.addEventListener('click', function() {
    if (screen.textContent !== "" && !minusClicked) {
        equation += screen.textContent + "-";
        screen.textContent = "";
        lastOperationButton = minus;
        minusClicked = true;
        opscreen.textContent+='-';
        disableButton(minus);
    }
});

multiply.addEventListener('click', function() {
    if (screen.textContent !== "" && !multiplyClicked) {
        equation += screen.textContent + "*";
        screen.textContent = "";
        lastOperationButton = multiply;
        multiplyClicked = true;
        opscreen.textContent+='×';
        disableButton(multiply);
    }
});

divide.addEventListener('click', function() {
    if (screen.textContent !== "" && !divideClicked) {
        equation += screen.textContent + "/";
        screen.textContent = "";
        lastOperationButton = divide;
        divideClicked = true;
        opscreen.textContent+='÷';
        disableButton(divide);
    }
});


function disableButton(button) {
    button.disabled = true;
}


function enableAllOperationButtons() {
    add.disabled = false;
    minus.disabled = false;
    multiply.disabled = false;
    divide.disabled = false;
}

function formatNumber(num) {
    if (num > Math.pow(10, 10)) {
        return parseFloat(num).toExponential(5);
    } else {
        if (num % 1 !== 0) {
            let formatted = parseFloat(num).toFixed(5);
            formatted = formatted.replace(/(\.[0-9]*?)0+$/, "$1");
            formatted = formatted.replace(/\.$/, "");
            return formatted;
        } else {
            return parseInt(num);
        }
    }
}
