/**
 * TASK
 Takes user's name, age, student status.

Shows their age category (child/teen/adult).

Converts today's temperature (Celsius to Fahrenheit).

Calculates budget balance from income and expenses.

Displays all variable types using typeof
 */

//Taking user data
const name = "Eloi";
let age = 20;
let isStudent = true;
let celcius = 30.56;
let income = 10000;
let expense = 7000;

//Show user age category
if(age<12){
    console.log(`${name} is CHILD`);
}
else if(age<18){
    console.log(`${name} is TEEN`);
}
else if(age<35){
    console.log(`${name} is YOUTH`);
}
else if(age<65){
    console.log(`${name} is ADULT`);  
}
else{
    console.log(`${name} is ELDER`)
}

//Temperature converter
fahn = (celcius * 9/5)+32;
console.log(`The temperature in Celcius is ${celcius} and in Fahnreit in ${fahn}`);

//Budget balance for Income and Expense
balance = income - expense;
if(balance>0){
    console.log(`${name} have Sulplus of ${balance}$.`);
}
else if(balance<0){
    console.log(`${name} have Deficit of ${balance}$`);
}
else{
    console.log(`${name} Balance is 0`);
}


//Summary for Our student data
console.log("\n");
console.log("----------Summary of Our Student Data----------");
console.log(`Student Name: ${name}`);
console.log(`Student Age: ${age}`);
console.log(`Student Category: ${isStudent}`);
console.log(`Student Temperature: ${celcius} celcius`);
console.log(`Student Income: ${income}$`);
console.log(`Student Expenses: ${expense}$`);

//Datatype for every student data
console.log("\n");
console.log("----------Datatype of every variables we have used----------");
console.log(`Student Name Datatype: ${typeof name}`);
console.log(`Student Age Datatype: ${typeof age}`);
console.log(`Student Category: ${typeof isStudent}`);
console.log(`Student Temperature: ${typeof celcius}`);
console.log(`Student Income: ${typeof income}`);
console.log(`Student Expenses: ${typeof expense}`);
