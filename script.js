//primera solución 
/*
function addRow () {
const newNode = document.createElement("tr");
const newContent = document.createTextNode("Agregando fila nueva por cada click en el botón");
newNode.appendChild(newContent);
const target = document.getElementById("tabla-de-datos");
target.insertAdjacentElement('afterbegin', newNode);
}
document.getElementById("agregar-filas").addEventListener("click", addRow);
*/

//seguda solución 

function addRow() {
  document.getElementById("tabla-de-datos").insertRow(-1).innerHTML =
    "<tr>Agregando fila nueva por cada click en el botón</tr>";
}
document.getElementById("agregar-filas").addEventListener("click", addRow);
