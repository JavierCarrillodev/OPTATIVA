// Clase Alumno
class Alumno {
    constructor(nombreAlumno, calificaciones) {
        this.nombreAlumno = nombreAlumno;
        this.calificaciones = calificaciones;
    }

    getNombreAlumno() {
        return `<h3> ${this.nombreAlumno}</h3>`;
    }

    obtenerCalificacionesAlumno() {
        let notas = "<b>Calificaciones:</b><br>";
        for (let modulo in this.calificaciones) {
            notas += `${modulo}: ${this.calificaciones[modulo]}<br>`;
        }
        return notas + "<br>";
    }

    obtenerMediaAlumno() {
        let suma = 0;
        let cantidad = 0;
        for (let modulo in this.calificaciones) {
            suma += this.calificaciones[modulo];
            cantidad++;
        }
        let media = (suma / cantidad).toFixed(2);
        return `<p>Nota media del alumno: ${media}</p><br>`;
    }
}

// Clase Curso
class Curso {
    constructor(nombreCurso, aula, alumnos) {
        this.nombreCurso = nombreCurso;
        this.aula = aula;
        this.alumnos = alumnos;
    }

    getDatosCurso() {
        let cadena = `<h2>Datos del curso:</h2>`;
        cadena += `<p><b>Nombre del curso:</b> ${this.nombreCurso}</p>`;
        cadena += `<p><b>Aula:</b> ${this.aula}</p>`;
        return cadena;
    }

    getAlumnos() {
        let cadena = "<h2>Alumnos:</h2>";
        for (let alumno of this.alumnos) {
            cadena += alumno.getNombreAlumno();
            cadena += alumno.obtenerCalificacionesAlumno();
            cadena += alumno.obtenerMediaAlumno();
        }
        return cadena;
    }

    // Buscar alumno por nombre
    buscarAlumno(nombreBuscado) {
        let encontrado = this.alumnos.find(
            alumno => alumno.nombreAlumno.toLowerCase() === nombreBuscado.toLowerCase()
        );

        if (encontrado) {
            return `<h3>Resultado de búsqueda:</h3>
                    ${encontrado.getNombreAlumno()}
                    ${encontrado.obtenerCalificacionesAlumno()}
                    ${encontrado.obtenerMediaAlumno()}`;
        } else {
            return `<p style="color:red;">No se encontró ningún alumno con el nombre "${nombreBuscado}"</p>`;
        }
    }
}

// Creación de alumnos
let alumno1 = new Alumno("Javi", { DIN: 8, AaD: 9, Opt: 8.5, IPE: 9.3, Ingles: 8.5 });
let alumno2 = new Alumno("Carlos", { DIN: 5, AaD: 6.6, Opt: 7.5, IPE: 6.3, Ingles: 7.5 });
let alumno3 = new Alumno("Pedro", { DIN: 6, AaD: 10, Opt: 9.5, IPE: 7.5, Ingles: 9.5 });
let alumno4 = new Alumno("Tatiana", { DIN: 10, AaD: 10, Opt: 9.4, IPE: 8.1, Ingles: 8.5 });

let curso = new Curso("1º DAM", "C2", [alumno1, alumno2, alumno3, alumno4]);

// Mostrar datos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const claseDiv = document.getElementById("Clase");
    claseDiv.innerHTML = curso.getDatosCurso();
});

function mostrarAlumnos() {
    const alumnosDiv = document.getElementById("Alumnos");
    alumnosDiv.innerHTML = curso.getAlumnos();
}

function buscarAlumno() {
    const nombre = document.getElementById("busqueda").value;
    const resultadoDiv = document.getElementById("ResultadoBusqueda");
    resultadoDiv.innerHTML = curso.buscarAlumno(nombre);
}
