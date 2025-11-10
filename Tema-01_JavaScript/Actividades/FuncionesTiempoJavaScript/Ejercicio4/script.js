let segundos = 0;
let minutos = 0;

function tablaSinGif(){

    const contenedorGif = document.getElementById("contenedorGif");
    const gif = document.getElementById("img");

    const tabla = document.createElement("table");

    gif.style.display = "none";

    //Creacion de tabla
    for (let i = 0; i < 5; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 5; j++) {
            let contenido = document.createElement("td");
            contenido.textContent = j;
            fila.appendChild(contenido); // Insertamos los datos a la fila
        }
        tabla.appendChild(fila); // Insertamos la fila a la tabla
    }
    // Una vez finalizado el bucle se añade
    contenedorGif.appendChild(tabla);
}

function iniciarContador(){
    const cadena = document.getElementById('contador');
    if(segundos === 60){
        minutos++
        segundos = 0;
    }

    cadena.textContent = minutos + " minutos " + segundos++ + " segundos en esta pagina"; // Ahora le introduciremos minutos tambien

    // Cuando llegue a los 5 segundo llamamos al metodo tablaSinGif
    if (segundos === 6 && minutos === 0){
        tablaSinGif();
    }
}