let segundos = 0;
let minutos = 0;

function iniciarContador(){
    const cadena = document.getElementById('contador'); //Cogemos el id contador
    cadena.textContent = " Han pasado " + segundos++  + " segundos en esta página"; // Esta cadena sera la que contenga las variables de segundos y minutos
}