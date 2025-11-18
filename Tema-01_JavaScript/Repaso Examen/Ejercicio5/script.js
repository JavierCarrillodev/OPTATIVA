let marcasDeCoches = [];

let marcas = document.getElementById('marcas');

function introducirDatos(){

    const input = document.getElementById('introducirDatos');

    marcasDeCoches.push(input.value.toUpperCase());

    marcas.textContent = 'Marcas de coches: ' + marcasDeCoches.join(',');
    input.value = ''; // Vacía el campo de texto.
    input.focus(); // Coloca automáticamente el cursor dentro del input, como si el usuario hiciera clic ahí.


}

function eliminarDatos(){
    const input = document.getElementById('eliminarDatos');
    const palabra = (input.value.toUpperCase());

    const indice = marcasDeCoches.indexOf(palabra);


    if (indice !== -1){
        marcasDeCoches.splice(indice, 1);// Se borra la palabra
        marcas.textContent = 'Marcas de coches: ' + marcasDeCoches.join(',');
    }
    input.value = '';
    input.focus();

}