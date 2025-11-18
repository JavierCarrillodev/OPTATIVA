let nombres = [];
function verArray(){

    const resultado = document.getElementById('resultado');
    const input = document.getElementById('introducir');

    nombres.push(input.value);



    resultado.textContent = nombres.join(',');


    input.value = '';
    input.focus();



}