let number1 = 0;
let number2 = 0;



function askNumber1(){
    number1 = window.prompt("Introduce un numero");
    parseInt(number1);
    
}

function askNumber2(){
    number2 = window.prompt("Introduce otro numero");
    parseInt(number2);
    compare();
}

function compare(){
    if(number1 > number2) console.log(`El primer numero es mayor`)
    if(number1 < number2) console.log(`El segundo numero es mayor`)
    if(number1==number2){
        askNumber2();
    }
}

askNumber1();
askNumber2();



