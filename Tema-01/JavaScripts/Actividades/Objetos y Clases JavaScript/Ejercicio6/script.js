function cliente () {
    let nombre = "Javier";
    let saldoBancario = 0;

    this.ingresar = function (cantidad) {
        if (cantidad > 0 ) {
            saldoBancario += cantidad;
            alert(`Ingreso procesado correctamente. Tienes actualmente en cuenta bancaria: ${saldoBancario} €`);
        }else
            alert(`Error, no puedes introducir una cantidad negativa`);
    }

    this.retirar = function (cantidad) {
        if (cantidad > 0) {
            if (cantidad <= saldoBancario) {
                saldoBancario -= cantidad;
                alert(`Retirada procesado correctamente. Tienes actualmente en cuenta bancaria: ${saldoBancario} €`);
            }else {
                alert(`Saldo insuficiente, has intentado retirar: ${cantidad} € y tienes un saldo de ${saldoBancario} € `);
            }
        }else {
            alert(`Error, no puedes introducir una cantidad negativa`);

        }
    }

    this.consultarCuenta = function () {
        return `El saldo actual de la cuenta es de ${saldoBancario} €`;
    }
}

let cliente1 = new cliente();


    function ingresar () {
        const cantidadIngresada = parseFloat(document.getElementById("ingreso").value);
        cliente1.ingresar(cantidadIngresada);
    }

    function retirar () {
        const cantidadRetirada = parseFloat(document.getElementById("retirada").value);
        cliente1.retirar(cantidadRetirada);
    }

    function consultarCuenta() {
        const totalSaldo = document.getElementById("resultado");
        let saldoCuenta = cliente1.consultarCuenta();
        totalSaldo.innerHTML = saldoCuenta;

    }

