let segundos = 0;
let minutos = 0;

function iniciarContador(){
    const cadena = document.getElementById('contador');
    if(segundos === 60){
        minutos++
        segundos = 0;
    }
    if (minutos === 2){ // Cuando llega a los 2 minutos nos manda al siguiente enlace
        window.location.replace("https://iesantoniogala.es/")


    }

    cadena.textContent = minutos + " minutos " + segundos++ + " segundos en esta pagina";
}