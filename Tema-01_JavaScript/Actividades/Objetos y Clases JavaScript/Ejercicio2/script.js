class Alumno{

    constructor(nombreAlumno,calificaciones){
        this.nombreAlumno = nombreAlumno;
        this.calificaciones = calificaciones;
    }

    // Se devuelve solo el texto del nombre
    getNombreAlumno() {
        return "Nombre completo: " + this.nombreAlumno;
    }

    // Devolvemos un texto con todas las calificaciones
    obtenerCalificacionesAlumno () {
        let notas = "<b>Calificaciones:</b><br>";
        for (let modulo in this.calificaciones) {
            notas += `${modulo}: ${this.calificaciones[modulo]}<br>`;
        }
        return notas;
    }

    // Calculamos la media
    obtenerMediaAlumno () {
        let suma = 0;
        let cantidad = 0;

        for (let modulo in this.calificaciones) {
            suma += this.calificaciones[modulo];
            cantidad++;
        }

        let media = (suma / cantidad).toFixed(2);
        return `Nota media del alumno: ${media}`;
    }
}

    let calificaciones = {
        DIN: 8.5,
        AaD: 10.0,
        Opt: 6.5,
        IPE: 9.0,
        Ingles: 8.0
    };

    let alumno = new Alumno("Javier Carrillo Ruiz", calificaciones);



// Funciones que se ejecutan al pulsar los botones
function mostrarNombre() {
    const NombreAlumno = document.getElementById("NombreAlumno");
    NombreAlumno.innerHTML = alumno.getNombreAlumno();
}

function mostrarCalificaciones() {
    const CalificacionesAlumno = document.getElementById("CalificacionesAlumno");
    CalificacionesAlumno.innerHTML = alumno.obtenerCalificacionesAlumno();
}

function obtenerMediaAlumno() {
    const MediaAlumno = document.getElementById("MediaAlumno");
    MediaAlumno.innerHTML = alumno.obtenerMediaAlumno();
}