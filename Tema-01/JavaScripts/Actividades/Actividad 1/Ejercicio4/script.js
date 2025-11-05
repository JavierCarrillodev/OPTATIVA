function hacerTabla(){

    const mensaje1 = parseFloat(document.getElementById('mensaje1').value);
    const mensaje2 = parseFloat(document.getElementById('mensaje2').value);
    const suma = mensaje1 + mensaje2;

    const tablaHTML = `
    <table border="2" style="margin-top: 10px; border-collapse: collapse; text-align: center; margin: 20px auto;">
      <tr>
      <th>Primer número</th>
      <th>Segundo número</th>
      <th>Suma</th>
      </tr>
      <tr>
      <td>${mensaje1}</td>
      <td>${mensaje2}</td> 
      <td>${suma}</td>
      </tr>
    </table>
  `;

   document.getElementById('divTabla').innerHTML = tablaHTML;


}
