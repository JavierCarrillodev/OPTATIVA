function crearTabla() {
    // Obtener los valores de los inputs
    const filas = parseInt(document.getElementById("filas").value);
    const columnas = parseInt(document.getElementById("columnas").value);
    const contenedor = document.getElementById("contenedorTabla");

    contenedor.innerHTML = "";


    // Creamos la tabla
    const tabla = document.createElement("table");

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement("tr");

        // Ponemos colores dependiento si es par o impar
        if (i % 2 === 0) {
            fila.style.backgroundColor = "#c23b3b";
        } else {
            fila.style.backgroundColor = "#1f6daf";
        }
        // Otro for anidado para recorrer las columnas de la tabla
        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement("td");
            celda.textContent = `(${i + 1},${j + 1})`;
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);
}
