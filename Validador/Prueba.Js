let free = false;

const Validador = time =>{
    
   let edad = prompt("Que edad Tenes?");
    if(edad >= 18){
        if(time >= 2 && time <= 6 && free == false){
            alert(`Son las ${time}Hs, ¡podes pasar gratis!`);
            free = true;
        } else {
            alert("Pasa por Boleteria");
        }
    } else {
        alert("No podes pasar, sos menor");
    }
    
}

Validador(1);
Validador(1);
Validador(2);
Validador(3);
Validador(4);