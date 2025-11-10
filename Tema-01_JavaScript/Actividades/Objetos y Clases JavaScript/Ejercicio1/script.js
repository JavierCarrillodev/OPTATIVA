// Creamos el objeto literal alumno
let alumno = {
    nombreCompleto: "Javier Carrillo Ruiz",

    calificaciones: {
        DIN: 8.5,
        AaD: 10.0,
        Opt: 6.5,
        IPE: 9.0,
        Ingles: 8.0
    },

    // Se devuelve solo el texto del nombre
    nombreAlumno: function () {
        return "Nombre completo: " + this.nombreCompleto;
    },

    // Devolvemos un texto con todas las calificaciones
    calificacionesAlumno: function () {
        let notas = "<strong>Calificaciones:</strong><br>";
        for (let modulo in this.calificaciones) {
            notas += `${modulo}: ${this.calificaciones[modulo]}<br>`;
        }
        return notas;
    },

    // Calculamos la media
    mediaAlumno: function () {
        let suma = 0;
        let cantidad = 0;

        for (let modulo in this.calificaciones) {
            suma += this.calificaciones[modulo];
            cantidad++;
        }

        let media = (suma / cantidad).toFixed(2);
        return `Nota media del alumno: ${media}`;
    }
};

// Funciones que se ejecutan al pulsar los botones
function mostrarNombre() {
    const NombreAlumno = document.getElementById("NombreAlumno");
    NombreAlumno.innerHTML = alumno.nombreAlumno();
}

function mostrarCalificaciones() {
    const CalificacionesAlumno = document.getElementById("CalificacionesAlumno");
    CalificacionesAlumno.innerHTML = alumno.calificacionesAlumno();
}

function mostrarMedia() {
    const MediaAlumno = document.getElementById("MediaAlumno");
    MediaAlumno.innerHTML = alumno.mediaAlumno();
}