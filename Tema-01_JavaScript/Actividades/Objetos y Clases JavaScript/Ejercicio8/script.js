// Clase Conductor
class Conductor {
    // El conductor recibe el nombre y su licencia
    constructor(nombre, licencia) {
        this._nombre = nombre;
        this._licencia = licencia;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get licencia() {
        return this._licencia;
    }

    set licencia(value) {
        this._licencia = value;
    }
}

// Clase Bus
class Bus {
    // El bus recibe la capacidad que soporta y el objeto conductor
    constructor(capacidad, conductor) {
        this._capacidad = capacidad;
        this._pasajeros = 0;
        this._conductor = conductor;
    }

    get capacidad() {
        return this._capacidad;
    }

    get pasajeros() {
        return this._pasajeros;
    }

    get conductor() {
        return this._conductor;
    }

    // Método para subir pasajeros
    subir(cantidad) {
        // Si la cantidad es menor a 0 o no es un numero, mandamos el siguiente mensaje a resultado
        if (cantidad <= 0 || isNaN(cantidad)) {
            document.getElementById("resultado").textContent =
                "Introduce una cantidad válida de pasajeros.";
            return;
        }

        // Validamos que no supere la cantidad maxima
        if (this._pasajeros + cantidad > this._capacidad) {
            document.getElementById("resultado").textContent =
                "No pueden subir más pasajeros que la capacidad máxima.";
        } else {
            this._pasajeros += cantidad;

            // Esta variable nos servira para calcular las plazas libres que nos quedan
            const plazasDisponibles = this.capacidad - this.pasajeros;

            document.getElementById("resultado").textContent =
                `Han subido ${cantidad} pasajeros. Quedan ${plazasDisponibles} plazas disponibles`;
        }
    }

    // Método para bajar pasajeros
    bajar(cantidad) {
        if (cantidad <= 0 || isNaN(cantidad)) {
            document.getElementById("resultado").textContent =
                "Introduce una cantidad válida de pasajeros.";
            return;
        }

        // Validamos que no se puedan bajar mas personas de las que hay dentro el bus
        if (cantidad > this._pasajeros) {
            document.getElementById("resultado").textContent =
                "No pueden bajar más pasajeros de los que hay.";
        } else {
            this._pasajeros -= cantidad;

            const plazasDisponibles = this.capacidad - this.pasajeros;

            document.getElementById("resultado").textContent =
                `Han bajado ${cantidad} pasajeros. Quedan ${plazasDisponibles} plazas disponibles` ;
        }
    }
}


let miBus = null;

function crearBus() {
    // Recogemos los valores de los inputs
    const nombreConductor = document.getElementById("nombreConductor").value.trim();
    const licenciaConductor = document.getElementById("licenciaConductor").value.trim();
    const capacidad = parseInt(document.getElementById("capacidad").value);

    // Validamos los datos recogidos
    if (!nombreConductor || !licenciaConductor || isNaN(capacidad) || capacidad <= 0) {
        document.getElementById("resultado").textContent =
            "Introduce datos válidos (nombre, licencia y capacidad positiva).";
        return;
    }

    const conductor = new Conductor(nombreConductor, licenciaConductor);
    miBus = new Bus(capacidad, conductor);

    document.getElementById("resultado").textContent =
        `Bus creado con conductor ${conductor.nombre}
         (Licencia: ${conductor.licencia}).
        Capacidad máxima: ${capacidad} pasajeros.`;
}

function subirPasajeros() {
    //Comprobamos que tenemos un bus creado
    if (!miBus) {
        document.getElementById("resultado").textContent = "Primero crea el bus.";
        return;
    }
    const cantidad = parseInt(document.getElementById("subir").value);
    miBus.subir(cantidad);// Llamamos al metodo subir del objeto Bus
    document.getElementById("subir").value = "";
}

function bajarPasajeros() {
    if (!miBus) {
        document.getElementById("resultado").textContent = "Primero crea el bus.";
        return;
    }
    const cantidad = parseInt(document.getElementById("bajar").value);
    // Llamamos al metodo bajar del objeto Bus
    miBus.bajar(cantidad);
    document.getElementById("bajar").value = "";
}
