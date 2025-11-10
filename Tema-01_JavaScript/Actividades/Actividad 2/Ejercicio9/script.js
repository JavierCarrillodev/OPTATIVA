function Verificar(){
    const inputs = document.getElementsByClassName("texto");
    const mensaje = document.getElementsByClassName("mensaje");

    for (let i = 0; i < inputs.length; i++) {
        const valor = inputs[i].value;

        if (valor === "" || !isNaN(valor)){
            inputs[i].style.backgroundColor = "red";
            // Mensaje en los inputs que estén vacios o con un numero
            mensaje[i].textContent = "El campo es requerido o es un numero";
        }else {
            inputs[i].style.backgroundColor = "lightgreen";
            mensaje[i].textContent = "";
        }
    }

}