console.log(`hello world`);

let myVar = 2

console.log(myVar);

// // task 1 - buld an array, call items, add one, update one

const myBrothers = ["Sebastiao", "Joe", "Joao", "Goncalo"]

console.log(myBrothers[3]);

myBrothers.push("Jose")

console.log(myBrothers);

myBrothers[1] = "Jorge"

console.log(myBrothers);

// // task 2 - multiply numbers, prompt and alert

let myMultiplication = 10 * 5

console.log(myMultiplication);

let buyingApples = 2 * prompt("How many apples did you buy yesterday?")

console.log(buyingApples);

buyingApples = prompt("How many apples did you buy today?") * prompt("How much each cost?")

alert("you spent " + buyingApples + "£ in apples today.");

// // task 3 - Boolean and comparisons

let yourAge = prompt("How old are you?")

if (yourAge <= 17) {
    alert(`You're not allowed in this party`);
} else if (yourAge >= 17 && yourAge <= 21 ) {
    alert(`No drinking for you!`);
    console.log('WELCOME TO THE PARTY!');
} else {
    console.log(`WELCOME TO THE PARTY! ENJOY.`);
}

// task 4 - -

// const itArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// console.log(itArr);

