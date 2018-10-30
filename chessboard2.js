"use strict";

const gridCreator = (sym) => {

	const basicArr = [sym, sym, sym, sym + "\n"];
	const arrEven = basicArr.join(" ");	// creates uneven lines

	const mapFunc = (item) => {
		return " " + item;
	}
	const basicArrAdj = basicArr.map(mapFunc);
	const arrUnev = basicArrAdj.join("");	// creates even lines

	const arrComb = [arrEven.concat(arrUnev)];
	const arrGrid = [...arrComb, ...arrComb, ...arrComb, ...arrComb];

	const reducerFunc = (accumulator, item) => {
		return accumulator + item;
	}
	return arrGrid.reduce(reducerFunc);
}

console.log(gridCreator(process.argv[2]));