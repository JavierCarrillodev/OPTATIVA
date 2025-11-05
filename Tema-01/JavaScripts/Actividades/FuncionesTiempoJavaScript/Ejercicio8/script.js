let indice = 0;

// Creamos un Array de las imágenes
const listaImagenes =["./img/phineas.jpg","./img/esponja.jpg","./img/viuda.jpg", "./img/patoDonal.jpg"]

function cambioDeImagenes(){
    imagenes = document.getElementById("img");

    // Si llegamos hasta el final se reinicia
    if( indice == 3 ){
        imagenes.src=listaImagenes[indice];
        indice = 0;
    }
    else{
        indice++;// Aumenta hasta el final
        imagenes.src=listaImagenes[indice];
    }
}