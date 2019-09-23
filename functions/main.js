function getSolutions (a, b, c) {
	let d = ((b**2)-(4*a*c));
	let x = [];
	if (d < 0) {
        console.log("Уравнение не имеет вещественных корней");
        return {D: d};
	}
	else if (d === 0) {
      x[0] = (-b)/(2*a);
      console.log(`Уравнение имеет один корень X₁ = ${x[0]}`);
      return {roots: x, D: d};
	} else {
	  x[0] = (-b+Math.sqrt(d))/(2*a);
	  x[1] = (-b-Math.sqrt(d))/(2*a);
		console.log(`Уравнение имеет два корня. X₁ = ${x[0]}, X₂ = ${x[1]}`);
		return {roots: x, D: d};
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}*x^2 + (${b})*x + (${c})`);
    console.log(`Значение дискриминанта: ${result}`);
}



let data = {
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5]
}

function getAverageScore (data) {
	
	function averageMarks () {
      let averageObject = [];
      for (let object in data) {
      	let value = 0;
      	let t = 0; 
      	for (let i = 0; i < data[object].length; i++) {
      		value[t] += data[object][i];
      	}
      	averageObject[object] = value[t]/data[object].length;
        t++;
      }
	}
	return averageObject;
}
console.log(averageObject);