let segundos = 0;
let minutos = 0;

function iniciarContador(){
    const cadena = document.getElementById('contador');
    cadena.textContent = " Han pasado " + segundos++  + " segundos en esta página";
}