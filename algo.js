exercice1 = (array, number) => {
	let match = [];
	for(let i = 0; i < array.length - 1 ; i++){
		let temp = array[i];
		for(let j = i + 1; j < array.length;j++){
			if (array[j] + temp === number) {
				match.push(`MATCH: ${number} = ${temp} + ${array[j]}`)
			}
		}
	};
	if (match.length > 0) {
		console.log(match)
		return true
	}
	else {
		return false
	};

};



exercice2 = (array) => {
	let canCount = [];
	let count = 1;
	for(let i = array.indexOf(Math.max(...array)); i < array.length - 1; i++){
		for(let j = i + 1; j < array.length; j++){
			if (array[i] <= array[j]) {canCount.push("no")}
		 }
		if (canCount.length == 0) {
			count += 1;
		}
		canCount = [];
	}
	return count
};




exercice3 = (array, number) => {
	if (array.length == 1) {
		return false;
	}
	for(let i = 1; i < array.length  ; i++){
		if (number == array[0] + array[i]) {
			return true;
		}
	}
	return exercice3(array.slice(1), number);
};




exercice4 = (array, count = 1) => {
	if (array.length == 1) {
		return count
	}
	for(let i = 1; i < array.length  ; i++){
		if (array[0] <= array[i]) {
			return exercice4(array.slice(1));
		}
	}
	count += 1;
	return exercice4(array.slice(1), count);
};



exercice5 = (array, number) => {
	if (array.length == 1) {
		return false
	}
	let diff = number - array[0];
	let element = array.slice(1).find(element => diff == element)
	if (element == diff) {
	 	return true
	}
	else if (element == undefined) {
		return exercice5(array.slice(1), number);
	}
};



exercice6 = (array, count = 1) => {
	if (array.length == 1) {
	 	return count
	}
	let base = array[0]
	let newArray = [...array.slice(1)]
	let element = newArray.find(element => element >= base);
	if (element == undefined) {
		count += 1;
		exercice6(array.slice(1), count);
	}
	return exercice6(array.slice(1), count);
};






perform = (list, number) => {
	console.log("---------------------------------");
	console.log(`Exercice n°1 :`);
	console.log(exercice1(list, number));
	console.log("---------------------------------");
	console.log(`Exercice n°2 :`);
	console.log(exercice2(list));
	console.log("---------------------------------");
	console.log(`Exercice n°3 :`);
	console.log(exercice3(list, number));
	console.log("---------------------------------");
	console.log(`Exercice n°4 :`);
	console.log(exercice4(list));
	console.log("---------------------------------");
	console.log(`Exercice n°5 :`);
	console.log(exercice5(list, number));
	console.log("---------------------------------");
	console.log(`Exercice n°6 :`);
	console.log(exercice6(list));
	console.log("---------------------------------");

};


const myList = [65, 82, 73, 23]
const myNumber = 7;


perform(myList, myNumber);

