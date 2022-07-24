
const numbers = [1,2,3,4,5,100,101,102];

function oddNumber(){
    let odd = 0;
    for(let i=0;i<=numbers.length-1;i++){

        if(numbers[i]%2 != 0) odd++;  //Si una posicion dividida entre 2 es diferente a 0 incrementamos.
    }

    console.log(`La cantidad de numeros inpares es: ${odd}`)
}



function oneHundred(){
    let hundred = 0;
    for(let i=0;i<=numbers.length-1;i++){

        if(numbers[i]>100) hundred++;
    }

    console.log(`La cantidad de numeros mayores que 100 es: ${hundred}`)
}

oddNumber();
oneHundred();
