function enfoque(elemento) {
    elemento.style.color = "blue";
    elemento.style.backgroundColor = "lightgray";

}
function desenfoque(elemento) {
    elemento.style.color = "black";
    elemento.style.backgroundColor = "white";

}

// Esta funcion lo que hace es que si añadimos algo a los cuadros de texto y le damos al boton se borrara su contenido
function BorrarCuadrosTextos(){
    const  inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text") { // Si hay texto
            inputs[i].value = ""; // Se borra
        }
    }

}