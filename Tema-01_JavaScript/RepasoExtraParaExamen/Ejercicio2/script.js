function numeroRandom(){
    const resultado = document.getElementById('resultado');

    let numeroRandom = Math.floor(Math.random() * 10) + 1
    resultado.textContent = numeroRandom;


}