let segundos = 0;
let minutos = 0;

function iniciarContador(){
    const cadena = document.getElementById('contador');
    if(segundos === 60){
        minutos++
        segundos = 0;
    }

    cadena.textContent = minutos + ":" + segundos++ + " segundos en esta pagina";
}