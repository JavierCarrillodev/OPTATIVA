let segundos = 0;
let minutos = 0;

function iniciarContador(){
    const cadena = document.getElementById('contador');
    if(segundos === 60){
        minutos++
        segundos = 0;
    }
    if (minutos === 2){
        window.location.replace("https://iesantoniogala.es/")


    }

    cadena.textContent = minutos + " minutos " + segundos++ + " segundos en esta pagina";
}