function CreartablaPares() {

    const numero = Number(document.getElementById("numero").value);

    const contenedor = document.getElementById("contenedor");

    // Limpiamos el contenedor por si hay otra tabla
    contenedor.innerHTML = "";

    // Con isNaN lo que hacemos es validar que sea un número válido
    if (isNaN(numero) || numero < 0) {
        alert("Introduce un número válido mayor o igual a 0");
        return;
    }

    //  Creamos una nueva tabla
    const tabla = document.createElement("table");
    tabla.border = "1";

    // Creamos las filas con los números pares
    for (let i = 0; i <= numero; i++) {
        if (i % 2 === 0) {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");
            // Escribimos dentro de la celdas los numeros pares
            celda.textContent = i;
            fila.appendChild(celda);
            tabla.appendChild(fila);
        }
    }

   contenedor.appendChild(tabla);
}
