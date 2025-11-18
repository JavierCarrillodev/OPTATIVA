function multiplicar(){
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    let tabla = "";

    for (let i = 1; i <= 10; i++) {
       tabla += `${numero} x ${i} = ${numero * i}<br> `;

    }
    resultado.innerHTML = tabla;
}