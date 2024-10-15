function containData() {
	let names = ["Gofres Belgas", "Gofres Belgas con fresas", "Gofres Belgas con frutas del bosque", "Tostada Francesa", "Desayuno de la casa"];
	let prices = ["5.95", "7.95", "8.95", "4.50", "6.95"];
	let descriptions = ["Dos de nuestros famosos Gofres belgas con abundante sirope", "Ligeros gofres belgas cubiertos de fresas y nata montada", "Ligeros gofres belgas cubiertos con frutas del bosque y nata montada", "Dos gruesas rebanadas de nuestro pan francés casero", "Dos huevos, bacon o salchicha, tostada y patatas fritas"];
	let calories = ["650", "900", "900", "600", "950"];

	return { names, prices, descriptions, calories };
}

function createTable() {
	// Obtener la referencia del elemento body
	let body = document.getElementsByTagName("body")[0];
	// Crea <table>
	let table = document.createElement("table");
	// Establece los estilos de la tabla
	table.style.borderCollapse = "collapse";
	table.style.border = "1px solid black";
	table.style.margin = "auto";

	// Añado un h2 en el body antes de table
	let title = document.createElement("h3");
	title.textContent = "TABLA CREADA CON JAVASCRIPT" ;

	body.appendChild(title);

	// Crea la fila de encabezados
	let headerRow = document.createElement("tr");

	// Array de encabezados
	let headers = ["Nombre", "Precio (en euros)", "Descripción", "Calorías"];

	// Crea los <th> para cada encabezado
	for (let i = 0; i < headers.length; i++) {
		let th = document.createElement("th");
		th.textContent = headers[i];
		th.style.border = "1px solid black";
		th.style.padding = "5px";
		headerRow.appendChild(th);
	}

	// Agrega la fila de encabezados a la tabla
	table.appendChild(headerRow);
	
	// Determina el número de filas basado en la longitud del th
	let rowCount = headers.length;
	// Almacena el objeto en una variable
	let dataTable = containData();
	
	// Crea las filas de datos
	for (let i = 0; i < rowCount; i++) {
		let row = document.createElement("tr");
		// Crea y agrega las celdas según el tamaño
		let cellDataArray = [dataTable.names[i], dataTable.prices[i], dataTable.descriptions[i], dataTable.calories[i]];
		for (let j = 0; j < cellDataArray.length; j++) {
			let cell = document.createElement("td");
			cell.textContent = cellDataArray[j];
			cell.style.border = "1px solid black";
			cell.style.padding = "5px";
			row.appendChild(cell);
		}
		// Agrega la fila a la tabla
		table.appendChild(row);
	}
	// Agrega la tabla al cuerpo del documento
	body.appendChild(table);
}

createTable();
