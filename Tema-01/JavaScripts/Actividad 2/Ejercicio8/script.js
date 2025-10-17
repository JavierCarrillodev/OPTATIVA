function Verificar(){
    const inputs = document.getElementsByClassName("texto");

    // Recorremos todos los inputs
    for (let i = 0; i < inputs.length; i++) {
        const valor = inputs[i].value;
        // Si el campo recibe un numero o esta vacio se pone en rojo
        if (valor === "" || !isNaN(valor)){
            inputs[i].style.backgroundColor = "red";
        }else {
            inputs[i].style.backgroundColor = "lightgreen";
        }
    }

}