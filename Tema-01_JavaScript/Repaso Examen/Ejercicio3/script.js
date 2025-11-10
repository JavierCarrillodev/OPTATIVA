function tirarDado() {
    const numero = parseFloat(document.getElementById('numero').value) ;
    const img = document.getElementById('img');

    if (numero === 1) {
        img.src = './img/cara1.png';
    }else if (numero === 2) {
        img.src = './img/cara2.png';
    }else if (numero === 3) {
        img.src = './img/cara3.png';
    }else if (numero === 4) {
        img.src = './img/cara4.png';
    }else if (numero === 5) {
        img.src = './img/cara5.png';
    }else if (numero === 6) {
        img.src = './img/cara6.png';
        alert('El resultado del dado es 6')
    }


}