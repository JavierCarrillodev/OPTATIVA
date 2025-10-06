    // Tenemos una funcion que crea y añade una tabla de 2 filas y 1 columna al contenedor
    function dibujarTabla() {
    const cont = document.getElementById('container');
    // Si ya hay una tabla, la reemplazamos

        cont.innerHTML = '';
    const tabla = document.createElement('table');

    for (let i = 0; i < 2; i++) {
        const fila = document.createElement('tr');
        const celda = document.createElement('td');
        celda.textContent = "Fila " + (i + 1);
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }
        let estiloTabla = "color: blue; font-size: 12pt;";

        tabla.style = estiloTabla;

        cont.appendChild(tabla);

    }
    document.getElementById('btnDibujar').addEventListener('click', dibujarTabla);

