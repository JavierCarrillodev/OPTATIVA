const entrada = document.getElementById("introducirDatos");
const salida = document.getElementById("recibirDatos");


entrada.addEventListener('input', ()=>{
   const soloNumeros = entrada.value.replace(/[^0-9]/g, '');
   salida.value = soloNumeros;


});