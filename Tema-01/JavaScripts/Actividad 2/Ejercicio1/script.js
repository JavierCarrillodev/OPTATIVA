function comprobarNumeros() {
    const campo = document.getElementById("texto1");
    const valor = campo.value;

    if (!/^\d+$/.test(valor)) {
        campo.value = "";
        alert("Solo se permiten numeros. Se borrara el campo a continuación")

    }else alert("Es valido")

}
