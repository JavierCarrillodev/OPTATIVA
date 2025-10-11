function cambiarColor() {
    // Obtener el valor seleccionado del <select>
    const colorSeleccionado = document.getElementById("listaColores").value;

    //  Obtener todos los <div> con clase "caja"
    const divs = document.getElementsByClassName("caja");

    //  Recorrerlos con un bucle y aplicar el color
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = colorSeleccionado;
    }
}
