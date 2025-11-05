// Definimos un objeto literal
let producto = {
    precio: 0,
    descuento: 0,

    // Método que calcula el precio neto
    neto: function() {
        let rebaja = (this.precio * this.descuento) / 100;
        return this.precio - rebaja;
    }
};

// Función para recoger los datos y calcula el descuento
function calcularDescuento() {
    // Obtener los valores del input
    let precioInput = parseFloat(document.getElementById("precio").value);
    let descuentoInput = parseFloat(document.getElementById("descuento").value);

    // Asignamos al objeto
    producto.precio = precioInput;
    producto.descuento = descuentoInput;

    // Calculamos el resultado
    let precioFinal = producto.neto();

    // Mostramos por pantalla
    document.getElementById("resultado").textContent =
        "Precio original: " + producto.precio + " €\n" +
        "Descuento: " + producto.descuento + "%\n" +
        "Precio final: " + precioFinal.toFixed(2) + " €";

}
