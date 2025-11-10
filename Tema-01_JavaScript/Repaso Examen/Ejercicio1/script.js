
function resultado() {
    const numero1 = parseFloat(document.getElementById('numero1').value) ;
    const numero2 = parseFloat(document.getElementById('numero2').value) ;
    const operacion = document.getElementById('operacion').value;

    if (numero1 > 0 && numero2 > 0) {

        if (operacion == 'suma') {
            const suma = numero1 + numero2;
            alert(`La suma es: ${suma}`);

        } else if (operacion == 'resta') {
            const restar = numero1 - numero2;
            alert(`La resta es: ${restar}`);

        } else if (operacion == 'multiplicacion') {
            const multiplicar = numero1 * numero2;
            alert(`La multiplicacion es: ${multiplicar}`);

        } else if (operacion == 'division') {
            const dividir = numero1 / numero2;
            alert(`El cociente de la division es: ${dividir}`);
        }
    }else {
        alert('Los numeros introducidos no pueden ser negativos')
    }

}