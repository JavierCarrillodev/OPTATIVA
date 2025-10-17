function comprobarNumeros() {
    const campo = document.getElementById("texto1");
    const valor = campo.value;

    // Si introducimos algo que no sea un digito se borra
    if (!/^\d+$/.test(valor)) {
        campo.value = ""; // ponemos un texto vacio para borrar el contenido
        alert("Solo se permiten numeros. Se borrara el campo a continuación")

    }else alert("Es valido")

}
