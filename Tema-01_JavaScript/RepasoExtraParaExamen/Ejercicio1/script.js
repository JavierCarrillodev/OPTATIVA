function sumar(){
    const numero1 = parseInt(document.getElementById('numero1').value);

    const numero2 =  parseInt(document.getElementById('numero2').value);

    const resultado = document.getElementById('resultado');

    let suma = numero1 + numero2;
    resultado.textContent = suma;

    if(isNaN(numero1) || (isNaN(numero2))){
        resultado.textContent = "Solo son validos numeros";
    }

}