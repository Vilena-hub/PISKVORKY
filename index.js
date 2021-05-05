'use strict';
console.log ("funguji!");

let currentSign="circleHraje";
const kdoHrajeElm=document.querySelector("#hrac");

const currentPlayer = (event) => {
 if(currentSign==="circleHraje") {
 event.target.classList.add("kolecko");
 event.target.style.filter = 'none';
 event.target.disabled = true;
 kdoHrajeElm.src = "images/cross.svg";
 kdoHrajeElm.alt = "obrazek krize";
 currentSign = "krizek";
} else {
 event.target.classList.add("krizek");
 event.target.style.filter = 'none';
 event.target.disabled = true;
 kdoHrajeElm.src="images/circle.svg";
 kdoHrajeElm.alt = "obrazek kolecka";
 currentSign = "circleHraje";
}
};


const buttonsElm = document.querySelectorAll(".buttonTlacitko");
for (let i = 0; i < buttonsElm.length; i++) {
  buttonsElm[i].addEventListener('click', currentPlayer);
}

//Let's play//

const getSymbol = (field) => {

	if (field.classList.contains('buttons__buttonTlacitko--krizek')) {
		return 'krizek'
	} else if (field.classList.contains('buttons__buttonTlacitko--kolecko')) {
		return 'circleHraje'
	}
}


const boardSize = 10;
const fields = document.querySelectorAll('.buttons__buttonTlacitko');
const getField = (row, column) => fields[row * boardSize + column]


const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}


const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 // Jednička pro právě vybrané políčko
	// Koukni doleva
	i = origin.column
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}


//Funkci isWinningMove pusť s každým nově přidaným symbolem.

//Pokud vrátí true, zobraz alert s hláškou, který hráč vyhrál.