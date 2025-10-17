function cambiarColor() {
    const colorSeleccionado = document.getElementById("listaColores").value;


    const divs = document.getElementsByClassName("caja");

    //  Recorremos con un bucle y aplicamos el color en cada div
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = colorSeleccionado;
    }
}
