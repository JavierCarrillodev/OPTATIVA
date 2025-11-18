function introducirNumero(){
    const input = document.getElementById('introducirNumero').value;
    const factorial = document.getElementById('factorial');

    let resultado = 1;

    for (let i = 2; i <= input; i++){
        resultado *= i;
        factorial.innerText = resultado;
    }



}