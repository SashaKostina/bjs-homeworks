"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
	let x = (b**2)-(4*a*c);
		
	if (x < 0) {
		console.log("Пустой массив");
	} else if 
		(x === 0) {
	    console.log("Корень один");
	} else {
        console.log("Существуют 2 решения");
        }
	return x;
	}
    
getResult(a,b,c);

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){

	if (marks.length > 5) {
		console.log("Оценок больше 5");
		}
		let newMarks = marks.splice(0, 5);

	for (let i = 0; i <= newMarks.length; i++) {
		
		let sumMarks += arr(i);
	}
	averageMark = sumMarks / arr.length;
    return averageMark;
}
getAverageMark();

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
	let yearOfBirthday = dateOfBirthday.getFullYear();
	let today = new Date();
	let year = today.getFullYear();
	if ((year - yearOfBirthday) >= 18) {
		result = ("Не желаете ли олд-фэшн, " + name + "?");
	}else {
		result = ("Сожалею, " + name + ", но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
	}
    
    console.log(result)
    return result;
}
askDrink(name, dateOfBirthday);