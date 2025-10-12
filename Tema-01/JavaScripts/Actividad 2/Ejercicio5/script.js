function crearDivs() {
    const contenedor = document.getElementById("contenedor");

    // Si no existe el contenedor, avisa en la consola
    if (!contenedor) {
        console.error("No se encontró el contenedor.");
        return;
    }

    // Crear 255 divs
    for (let i = 0; i < 255; i++) {
        const div = document.createElement("div");
        div.className = "cuadro";
        const color = `rgb(${i}, ${255 - i}, ${i})`;
        div.style.backgroundColor = color;
        contenedor.appendChild(div);
    }

    console.log("Se crearon los divs correctamente"); // para comprobar
}
