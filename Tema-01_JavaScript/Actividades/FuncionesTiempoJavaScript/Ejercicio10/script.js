let indice = 0;
let cambioImagen = true; // Servira para parar las imagenes

// Creamos un Array de las imágenes semafaros
const semaforos =["img/verde.jpg","img/rojo.png","img/amarillo.jpg"]

function cambioDeImagenes(){
    if(cambioImagen ) {
        imagenes = document.getElementById("semaforo");

        // Cuando lleguemos al final se reinicia
        if (indice == 2) {
            indice = 0;
            imagenes.src = semaforos[indice];
        } else {
            indice++; // Sino seguimos incrementando hasta el final
            imagenes.src = semaforos[indice];
        }
    }
}

// Si le damos click a una de las imagenes llamamos a esta funcion
function pararImagenes(){
    if(cambioImagen != false){
        cambioImagen = false;
    }
}