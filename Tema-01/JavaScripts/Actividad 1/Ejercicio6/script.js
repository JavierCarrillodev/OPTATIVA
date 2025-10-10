function redimensionarImagen(){

    const imagen = document.getElementById("imagen");
    const ancho = document.getElementById("ancho").value;
    const alto = document.getElementById("alto").value;
    imagen.style.width = ancho + "px" ;
    imagen.style.height = alto + "px";

}