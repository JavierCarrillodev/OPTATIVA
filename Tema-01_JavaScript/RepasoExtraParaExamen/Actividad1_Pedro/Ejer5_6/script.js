function cambiarTamano() {

    const ancho = document.getElementById('ancho');
    const alto = document.getElementById('alto');
    const img = document.getElementById('imagen');
    
     img.width = ancho.value;
     img.height = alto.value;
}