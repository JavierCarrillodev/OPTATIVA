class Ficha {
    // Los hacemos privado con _ aunque tambien vale con #
    constructor(nombre) {
        this._nombre = nombre;
        this._distancia = 0;
        this._sesiones = [];
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    set distancia(value) {
        this._distancia = value;
    }

    get sesiones() {
        return this._sesiones;
    }

    // Añadir kilómetros
    anotar(kilometros) {
        if (kilometros > 0) {
            this.distancia = kilometros;
            this.sesiones.push(kilometros);
        } else {
            console.log("La distancia debe ser mayor que 0.");
        }
    }

    // Calcular media
    media() {
        if (this._sesiones.length === 0) {
            return 0;
        }
        const suma = this._sesiones.reduce((a, b) => a + b, 0);
        const promedio = suma / this._sesiones.length;
        return promedio.toFixed(2);
    }
}


let ficha1 = null;

// Anotamos los kilometros
function anotarKilometros() {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") { // Si esta vacio le decimos que tiene que poner algun nombre
        document.getElementById("resultado").textContent = "Debes introducir tu nombre.";
        return;
    }

    // Si aún no existe la ficha, la creamos
    if (!ficha1) {
        ficha1 = new Ficha(nombre);
    }

    const km = parseFloat(document.getElementById("kilometros").value);
    // Si kilometros no es un numero o es menor que cero nos manda el siguente mensaje
    if (isNaN(km) || km <= 0) {
        document.getElementById("resultado").textContent =
            "Introduce un número válido de kilómetros.";
        return;
    }

    ficha1.anotar(km);
    document.getElementById("resultado").textContent =
        `Kilómetros registrados: ${km}`;
    document.getElementById("kilometros").value = "";
}

function mostrarMedia() {
    if (!ficha1) {
        // Si no existe la ficha le decimos que intruzca el nombre y una sesión
        document.getElementById("resultado").textContent =
            "Primero introduce tu nombre y al menos una sesión.";
        return;
    }

    const media = ficha1.media();
    document.getElementById("resultado").textContent =
        `Media de kilómetros de  ${ficha1.nombre} son: ${media} km `;
}

function mostrarSesiones() {
    if (!ficha1) {
        document.getElementById("resultado").textContent =
            "Primero introduce tu nombre y alguna sesión.";
        return;
    }

    document.getElementById("resultado").textContent =
        `Sesiones registradas de ${ficha1.nombre}:  ${ficha1.sesiones} km`;
}
