function getSolutions (a, b, c) {
	let d = ((b**2)-(4*a*c));
	let x = [];
	if (d < 0) {
        console.log("Уравнение не имеет вещественных корней");
        return d;
	  } else if (d === 0) {
        x[0] = (-b)/(2*a);
        console.log(`Уравнение имеет один корень X₁ = ${x[0]}`);
        return [x, d];
      } else {
	    x[0] = (-b+Math.sqrt(d)) / (2*a);
	    x[1] = (-b-Math.sqrt(d)) / (2*a);
		console.log(`Уравнение имеет два корня. X₁ = ${x[0]}, X₂ = ${x[1]}`);
		return [x, d];
	  }
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}*x^2 + (${b})*x + (${c})`);
    console.log(`Значение дискриминанта: ${result.d}`);
    console.log(`Корни: ${result.x}`);
}



let data = {
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5]
}

function getAverageScore (data) {
	
	function averageMarks () {
      
      let oneSubject;
      for (let subject in data) {
      	let marks;
      	let t; 
      	  for (let i = 0; i <= data[subject].length; i++) {
      		marks[t] += data[subject][i];
      	  }
      	oneSubject[subject] = marks[t] / data[subject].length;
        t++;
        return oneSubject;
      }
    } 

    for (let subject in oneSubject) {
	  let value = oneSubject[subject];
	  console.log(`${subject} : ${value}`);
	  let average = 0;
      for (let i = 0; i <= oneSubject.length; i++) {
      average += oneSubject[i]; 
     }
    average = average / oneSubject.length;
    }	
    return average;
}
console.log(data);
console.log(average);
console.log(oneSubject);
