
const sumar = (number1, number2) =>{
    return parseInt(number1) + parseInt(number2);
}
const restar = (number1, number2) =>{
    return parseInt(number1) - parseInt(number2);
}
const dividir = (number1, number2) =>{
    return parseInt(number1) / parseInt(number2);
}
const producto = (number1, number2) =>{
    return parseInt(number1) * parseInt(number2);
}

alert("Bienvenido a FastCaculator!");

let operacion = prompt("1: suma, 2: resta, 3: dividir, 4: producto");

if(operacion == 1){
    let number1 = prompt("Primer Numero para sumar");
    let number2 = prompt("Segundo Numero para sumar");
    resultado = sumar(number1,number2);
    alert(`El resultado es ${resultado}`);
}

else if(operacion == 2){
    let number1 = prompt("Primer Numero para restar");
    let number2 = prompt("Segundo Numero para restar");
    resultado = restar(number1,number2);
    alert(`El resultado es ${resultado}`);
}

else if(operacion == 3){
    let number1 = prompt("Primer Numero para dividir");
    let number2 = prompt("Segundo Numero para dividir");
    resultado = dividir(number1,number2);
    alert(`El resultado es ${resultado}`);
}

else if(operacion == 4){
    let number1 = prompt("Primer Numero para multiplicar");
    let number2 = prompt("Segundo Numero para multiplicar");
    resultado = producto(number1,number2);
    alert(`El resultado es ${resultado}`);
} else {
    alert("No es una operacion valida"); 
}