function getSolutions (a, b, c) {
	let d = ((b**2)-(4*a*c));
	let x = [];
  let result = {d, x};
	if (d < 0) {
        return result;
	  } else if (d === 0) {
        x[0] = (-b)/(2*a);
        return result;
      } else {
	    x[0] = (-b+Math.sqrt(d)) / (2*a);
	    x[1] = (-b-Math.sqrt(d)) / (2*a);
		return result;
	  }
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}*x^2 + (${b})*x + (${c})`);
    console.log(`Значение дискриминанта: ${result.d}`);
    if (result.d < 0) {
    	console.log("Уравнение не имеет вещественных корней");
    } else if (result.d === 0) {
    	console.log(`Уравнение имеет один корень X₁ = ${result.x[0]}`);
    } else {
    	console.log(`Уравнение имеет два корня. X₁ = ${result.x[0]}, X₂ = ${result.x[1]}`);
    }
}
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);



function getAverageScore(data) {
let marks = {};
let t = 0;
let sum = 0;
for (let subject in data) {
    sum = sum + averageMarks(data[subject]);
    t++;
    marks[subject] = averageMarks(data[subject]);
  }
  marks.average = sum / t;
  return marks;
}

function averageMarks (array) {
      let sum = 0;
      for (let i = 0; i<array.length; i++) {
      	sum = sum + array[i];
      }
       return sum/array.length;
    }

let data = {
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5,],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 5],
	english: [4, 4, 3]
  }

getAverageScore(data);
