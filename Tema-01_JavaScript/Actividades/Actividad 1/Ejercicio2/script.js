    function dibujarTabla() {

    const estiloTabla = 'style="color: blue; font-size: 12pt; width: 400px;  font-size: 30px;  margin: 20px auto;"';

    const tabla = `
    <table border="2" ${estiloTabla}>
      <tr>
      <th>Fila 1</th>
      </tr>
      <tr>
      <td>Fila 2</td>
      </tr>
    </table>
  `;

        document.getElementById('tabla').innerHTML = tabla;
    }

