/*
	Solicita al usuario que elija entre la opción 1 o 2:
		Caso 1: Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, uno de ellos o ninguno.
		Caso 2: Se le debe pedir una palabra y comprobar si empieza o termina por a
*/

function igualadorNumeros() {
	//Opcion 1: igualador de números
	let n1 = parseInt(prompt("Introduzca un número: "));
	let n2 = parseInt(prompt("Introduzca otro número: "));

	// (      true   &&     true    ) && (   true     &&    true     ) = true.
	if ((n1 % 2 == 0 && n1 % 25 == 0) && (n2 % 2 == 0 && n2 % 25 == 0)) {
		alert("Ambos números cumplen con la condición, que son multiples de 2 y 25.")
	} else if ((n1 % 2 == 0 && n1 % 25 == 0) || (n2 % 2 == 0 && n2 % 25 == 0)) {
		alert("Uno de ellos cumple con la condición, que es múltiplo de 2 y/o 25.")
	} else {
		alert("Ninguno de ellos cumple las condiciones.")
	}
}

function igualadorChar() {
	let word = prompt("Introduzca una palabra: ");
	let finalChar = word.length - 1;
	let ret = "";

	// inicio y final con la letra a
	if (word.toLocaleLowerCase()[0] == 'a' || word.toLocaleLowerCase()[finalChar] == 'a') {
		ret = "La palabra " + word + " empieza o termina por la letra a";
	} else {
		ret = "La palabra " + word + " no empieza ni termina por la letra a";
	}
	alert(ret);
}

function menu() {
	let option = parseInt(prompt("Elija una de las opciones:\nOpción 1: igualado de números\nOpción 2: Igualador de char"));

	switch (option) {
		case 1:
			igualadorNumeros();
			break;
		case 2:
			igualadorChar();
			break;
		default:
			alert("No has introducido una opción válida");
	}
}

/*
	Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta (debes presuponer que la frase tiene un único espacio entre palabras).
*/

function contarPalabras() {
	let phrase = prompt("Introduzca una frase: ");
	let countSpacebar = 0;

	for (let i = 0; i < phrase.length - 1; i++) {
		if (phrase[i] == " ") {
			countSpacebar++;
		}
	}
	if (phrase == "") {
		alert("No has insertado ninguna palabra.");
	} else if (phrase == " ") {
		alert("has insertado un espacio pillin");
	} else {
		alert("La frase contiene " + countSpacebar + 1 + " palabras.");
	}
}

/*
	Realiza la tabla de la imagen con la misma información usando herramientas de DOM y JS, el body en HTML sólo puede tener la etiqueta script.
*/
