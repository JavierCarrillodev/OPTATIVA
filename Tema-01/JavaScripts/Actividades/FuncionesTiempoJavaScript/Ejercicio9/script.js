let indice = 0;
let cambioImagen = true; // Servira para parar las imagenes

// Creamos un Array de las imágenes
const listaImagenes =["img/phineas.jpg","img/esponja.jpg","img/viuda.jpg", "img/patoDonal.jpg"]

function cambioDeImagenes(){
    if(cambioImagen ) {
        imagenes = document.getElementById("img");

        // Llegamos al final se reinicia
        if (indice == 3) {
            imagenes.src = listaImagenes[indice];
            indice = 0;
        } else {
            indice++; // Aumentamos hasta que lleguemos al final
            imagenes.src = listaImagenes[indice];
        }
    }
}

// Si le damos click a una de las imagenes llamamos a esta funcion
function pararImagenes(){
    if(cambioImagen != false){
        cambioImagen = false;
    }
}