// Cuando le demos click al cuadro de texto le diremos que lo que haya dentro se ponga en azul
function enfoque(elemento) {
    elemento.style.color = "blue";
    elemento.style.backgroundColor = "lightgray";// Y el fondo en gris

}
// Aquí le indicamos lo contrario, que cuando salga del cuadro de texto vuelva a como estaba antes
function desenfoque(elemento) {
    elemento.style.color = "black";
    elemento.style.backgroundColor = "white";

}

