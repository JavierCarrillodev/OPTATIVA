function suma(){
    const numero1 = parseInt(document.getElementById("numero1").value) ;
    const numero2 = parseInt(document.getElementById("numero2").value);
    const tabla = document.getElementById("tabla");

    let suma = numero1 + numero2;

    tabla.innerHTML =  `
        <table border ="2px" style="border-collapse: collapse"><br>
            <tr>
                <th>Numero 1</th>
                <th>Numero 2</th>
                <th>Suma</th>
            </tr>
            <tr>
                <td>${numero1}</td>
                <td>${numero2}</td>
                <td>${suma}</td>
    
            </tr>
        </table>`;


    document.getElementById("numero1").value = '';
    document.getElementById("numero1").focus();
    document.getElementById("numero2").value = '';

}