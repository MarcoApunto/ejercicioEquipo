/*
	Realiza la tabla de la imagen con la misma información usando herramientas de DOM y JS, el body en HTML sólo puede tener la etiqueta script.
*/

/* function createTable() {

	for (let j = 0; j < 2; j++) {
		// Crea un elemento <td> y un nodo de texto, haz que el nodo de
		// texto sea el contenido de <td>, ubica el elemento <td> al final
		// de la hilera de la tabla
		let celda = document.createElement("td");
		let textoCelda = document.createTextNode("celda en la hilera " + ", columna " + j,
		);
	}
	celda.appendChild(textoCelda);
} 

createTable();

REFERENCIA:
https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

*/



function createContent() {

	let row;
	let cell;
	let cellText;

	for (let i = 0; i < 2; i++) {
		// Crea las hileras de la tabla
		row = document.createElement("tr");

		for (let j = 0; j < 2; j++) {
			// Crea un elemento <td> y un nodo de texto, haz que el nodo de
			// texto sea el contenido de <td>, ubica el elemento <td> al final
			// de la hilera de la tabla
			cell = document.createElement("td");
			cellText = document.createTextNode(
				"cell in row " + i + ", column " + j
			);
			cell.appendChild(cellText);
			// Establece los estilos de la celda
			cell.style.border = "1px solid black"; // Borde sólido de 1px en negro
			cell.style.padding = "5px"; // Añade algo de espacio interno

			row.appendChild(cell);
		}
	}
}

function createTh() {
	let th;
	let headers = ["Name", "Price", "Description", "Calories"];
	let headerRow = document.createElement("tr");

	for (var i = 0; i < headers.length; i++) {
		th = document.createElement("th");
		th.textContent = headers[i];
		th.style.border = "1px solid black";
		th.style.padding = "5px";
		headerRow.appendChild(th);
	}
}

function createTable() {
	// Obtener la referencia del elemento body
	let body = document.getElementsByTagName("body")[0];
	// Crea un elemento <table>
	let table = document.createElement("table");
	// Establece los estilos de la tabla

	table.style.borderCollapse = "collapse"; // Colapsar bordes para líneas intermedias
	table.style.border = "1px solid black"; // Borde sólido de 1px en negro

	// Crea encabezados
	createTh();
	// Creación interior de la tabla
	createContent();

	// Inicia la tabla entera en el body
	body.appendChild(table);
}

createTable();