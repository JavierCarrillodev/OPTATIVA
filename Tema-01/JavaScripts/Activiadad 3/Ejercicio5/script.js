let segundos = 0;
let minutos = 0;
let posicion = 0;



function tablaSinGif(){
    const contenedorGif = document.getElementById("contenedorGif");
    const gif = document.getElementById("gif");


    const tabla = document.createElement("table");


    gif.style.display = "none";

    for (let i = 0; i < 5; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 5; j++) {
            let contenido = document.createElement("td");
            contenido.textContent = j;
            fila.appendChild(contenido);
        }
        tabla.appendChild(fila);
    }
    contenedorGif.appendChild(tabla);
}

function iniciarContador(){
    const cadena = document.getElementById('contador');

    if(segundos === 60){
        minutos++
        segundos = 0;
    }

    cadena.textContent = minutos + " minutos " + segundos++ + " segundos en esta pagina";

    if (segundos === 6 && minutos === 0){
        tablaSinGif();
    }
    moverGif()


}

function moverGif() {
    const gif = document.getElementById("gif");
    setInterval(() => {
        if (segundos <= 5)
            posicion += 10;
            gif.style.marginLeft = posicion + "px";

    }, 100);
}