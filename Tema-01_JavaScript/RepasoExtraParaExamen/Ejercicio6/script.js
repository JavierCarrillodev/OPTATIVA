const input = document.getElementById('introducir');
function mayuscula(){
    const resultado = document.getElementById('resultado');

    resultado.textContent = input.value.toUpperCase();
}

function minuscula(){
    const resultado = document.getElementById('resultado');

    resultado.textContent = input.value.toLowerCase();

}