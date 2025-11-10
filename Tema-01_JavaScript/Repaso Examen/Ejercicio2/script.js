function resultado() {
    const numero = parseFloat(document.getElementById('numero').value) ;


    let numeroCorrecto =  Math.floor(Math.random() * 50) + 1;

    if (numero > numeroCorrecto ){
        alert('El numero es menor');
    }else if (numero < numeroCorrecto){
        alert('El numero es mayor');
    }else if (numero === numeroCorrecto){
        alert(`!!Correcto el numero es ${numeroCorrecto}`);
    }


}