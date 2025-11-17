function tirarDado() {
    const img = document.getElementById('img');
    let numero = document.getElementById('numero');

    let numeros = Math.floor(Math.random() * 6) + 1;
    numero.innerHTML = `El numero que te ha tocado es: ${numeros}`;

    if (numeros === 1) {
        img.src = './img/cara1.png';
    }else if (numeros === 2) {
        img.src = './img/cara2.png';
    }else if (numeros === 3) {
        img.src = './img/cara3.png';
    }else if (numeros === 4) {
        img.src = './img/cara4.png';
    }else if (numeros === 5) {
        img.src = './img/cara5.png';
    }else if (numeros === 6) {
        img.src = './img/cara6.png';
    }



}