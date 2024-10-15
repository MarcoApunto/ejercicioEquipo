/*
	Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta (debes presuponer que la frase tiene un único espacio entre palabras).
*/

function contarPalabras() {
	let phrase = prompt("Introduzca una frase: ");
	let countSpacebar = 0;

	for (let i = 0; i < phrase.length; i++) {
		if (phrase[i] == " ") {
			countSpacebar++;
		}
	}
	if (phrase == "") {
		alert("No has insertado ninguna palabra.");
	} else if (phrase == " ") {
		alert("Has insertado un espacio pillin");
	} else {
		alert("La frase contiene " + (countSpacebar + 1) + " palabras.");
	}
}
