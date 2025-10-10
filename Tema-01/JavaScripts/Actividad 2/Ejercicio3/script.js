function enfoque(elemento) {
    elemento.style.color = "blue";
    elemento.style.backgroundColor = "lightgray";

}
function desenfoque(elemento) {
    elemento.style.color = "black";
    elemento.style.backgroundColor = "white";

}

function BorrarCuadrosTextos(){
    const  inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text") {
            inputs[i].value = "";
        }
    }

}