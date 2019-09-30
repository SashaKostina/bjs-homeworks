function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
	   let now = new Date().getTime();
       let date = new Date();
       birthday = date.getTime();
       let diff = now - birthday;
       let age = diff / (24 * 3600 * 365.25 * 1000);
       if (age > 18) {
        return true;
       } else {
        return false;
       }
}



function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    	if (animal === undefined) {
			return null;
		} else {
		let sound = animal.sound;
		return sound;
	}
}


function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let t = 0;
    let sumMarks = [];
    for (let i = 0; i < marks[t]; i++) {
    	sumMarks[t] += marks[t][i];
    }
    average[t] = sumMarks / marks[t];
    let roundedAverage = Math.round(average[t]);
    t++;
    return roundedAverage;
}
console.log(roundedAverage);
