let milisegundo = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let encendido = false;

const cadena = document.getElementById('segundo');


function iniciarContador() {

    if (encendido){
        milisegundo++;
        if(milisegundo === 100){// Cuando llega a 100 ponemos a 0 e incrementado segundos
            milisegundo = 0;
            segundos++;
        }
        if (segundos === 60){ // A los 60 segundos se incrementa minutos
            segundos = 0;
            minutos++;
        }
        if (minutos === 60){ // A los 60 minutos se incrementa horas
            minutos = 0;
            horas++;
        }
        cadena.textContent = horas + ":" + minutos + ":" + segundos + ":" + milisegundo;
    }

}

function pararCronometro(){
    encendido = false;
}

function iniciarCronometro(){
    encendido = true;
}

function resetearCronometro(){
    pararCronometro()
    milisegundo = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;

    cadena.textContent = horas + ":" + minutos + ":" + segundos + ":" + milisegundo;

}