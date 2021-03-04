let sumSquare = 0;
let sum = 0;
for(let number =1; number <=100; number++){
    sumSquare = sumSquare + (number**2);
    sum = sum + number;
}
let totalSquare = sum**2;
let difference = totalSquare - sumSquare;
console.log(difference);