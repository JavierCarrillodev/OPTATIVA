
//Funcion constructor de objetos de tipo Persona
function Persona(nombre,apellidos,email){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
}

let padre = new Persona('Javi','Carrillo','carrillo@gmail.com');
console.log(padre);

let madre = new Persona('Carla','Ruiz','carlita@gmail.com');
console.log(madre);

padre.nombre = 'Juan';
console.log(padre);
console.log(madre);