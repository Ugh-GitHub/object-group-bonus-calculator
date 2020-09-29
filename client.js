const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
console.log(employeeLoop( employees ));
console.log(employees[2]);
console.log('Scout info',SuperEmployee(employees[2]));
console.log(calculateBonus(employees[2]));



function employeeLoop(array) {
  let tempArray = [];
  // creates an empty array to store the new employee objects
  for (let i = 0; i < array.length; i++) {
    tempArray.push(new SuperEmployee(array[i]));
  }
  console.log(tempArray);
  return tempArray;
  // tests against the example array
}

function SuperEmployee(employeeObject) {
  this.name = employeeObject.name;
  this.bonusPercentage = calculateBonus(employeeObject);
  // this.totalCompensation = employeeObject.annualSalary;
  // this.totalBonus = employeeObject.annualSalary / 100 * calculatedBonus(employeeObject);

  
  // This is where the bonus percentage gets calculated
  // totalCompensation = this.annualSalary + bonus;
  //
}

// function employeeBonus(){
//   if()
// }

function calculateBonus(employeeToCalculate) {
  console.log('employee', employeeToCalculate);
  //rating check
  let bonusPercentage = 0;
  let rating = employeeToCalculate.reviewRating;
  if (rating <= 2){
    console.log('No bonus for you!');
    return bonusPercentage;
  } else if (rating === 3) {
    console.log('Bonus should be 4%');
    bonusPercentage = 4;
  }
    else if (rating === 4) {
    console.log('Bonus should be 6%');
    bonusPercentage = 6;
  }
    else if (rating === 5) {
    console.log('Bonus should be 10%');
    bonusPercentage = 10;
  }
  if (employeeToCalculate.employeeNumber.length == 4) {
    bonusPercentage += 5;
  }
  if (employeeToCalculate.annualSalary > 65000) {
    bonusPercentage -= 1;
  }
  if (bonusPercentage < 0){
    return 0;
  }
  if(bonusPercentage > 13){
    return 13;
  } 

  return bonusPercentage;
}
  