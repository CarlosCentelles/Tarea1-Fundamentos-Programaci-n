
function dice1(){
    
    return Math.floor(Math.random() * 6) + 1;

   
}

function dice2(){
   
    return Math.floor(Math.random() * 6) + 1;


}

function add(){

    return dice1() + dice1();

}

function repeat(){
    let array = [];
    let suma = 0;

    for(let i=0;i<=6000;i++){//Introducimos los numeros en el vector
        array.push(add());
    }

    for(let i=0;i<=array.length-1;i++){//Sumamos todos los numeros
        suma = array[i] + suma;
    }
    return suma/6000;
}

console.log(dice1());
console.log(dice2());
console.log(`La media es: ${repeat()}`);