/**
You enter marks for 3 subjects. The program calculates
the average and assigns a grade based on the score.
*/

//Entering Subjects Marks
firstSubject = 6;
secondSubject = 8;
thirdSubject = 9;

//Calculating Average
average = (firstSubject + secondSubject + thirdSubject)/3;

//Outputting Answers
console.log(`First Subject Marks: ${firstSubject}/10`);
console.log(`Second Subject Marks: ${secondSubject}/10`);
console.log(`Third Subject Marks: ${thirdSubject}/10`);
console.log(`The average for all Marks: ${average}/10`);

console.log("\n")

//Giving grade based on average marks
if (average <5){
    console.log("GRADE C");
}
else if(average<7){
    console.log("GRADE B");
}
else{
    console.log("GRADE A");
}