let milisegundo = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let encendido = false;

const cadena = document.getElementById('segundo');


function iniciarContador() {


    if (encendido){
        milisegundo++;
        if(milisegundo === 100){
            milisegundo = 0;
            segundos++;
        }
        if (segundos === 60){
            segundos = 0;
            minutos++;
        }
        if (minutos === 60){
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