"use strict";

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
       	if (isNan(percent) || isNan(contribution) || isNan(amount)) {
     	return `Параметр содержит неправильное значение`;
     }
      date = date.getFullYear() - new Date().getFullYear();
      let p = parseInt((percent / 12)/100);
      let payment = amount * (p + p/(((1 + p)**date) - 1));
      let totalAmount = payment * date;
      console.log(totalAmount);
      return totalAmount;
     }
        



function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (typeof name === 'string') {
    	greeting = (`Привет, мир! Меня зовут ${name}`);
    } else {
    	greeting = (`Привет, мир! Меня зовут Аноним`);
    }

    return greeting;
}