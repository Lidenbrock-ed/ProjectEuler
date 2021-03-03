let firstNum = 0;
let secondNum = 1;
let num = 0;
let sumEvenNumbers = 0;
for(let i = 0; i<40; i++){
    num = firstNum + secondNum;
    firstNum = secondNum;
    secondNum = num;
    let mod = num % 2;
    if(mod == 0){
        sumEvenNumbers = sumEvenNumbers + num;
    }
    if(num >= 4000000){
        break;
    }
}
console.log(sumEvenNumbers);