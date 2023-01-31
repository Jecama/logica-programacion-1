
let numeros;
const NUMBER = [];

function getNumber() {
    for (nummeros = 0; numeros < 3; numeros ++) {
        NUMBER.push(prompt("Ingresa el número"));
    }
    console.log(NUMBER);

}

function compareNumber(){
    if (NUMBER[0] === NUMBER[1] && NUMBER[0] === NUMBER[2] && NUMBER[1] ===[2]){
        document.write(`los numeros ingresados son ${NUMBER} : son iguales`)
        console.log(true)
    }else{
        document.write(`números de menor a mayor: ${(NUMBER.sort((a, b) => a -b))}`);
        document.write(`números de mayor a menor : ${(NUMBER.sort((a, b) => b- a))}`);
    }
}

getNumber();
compareNumber();

