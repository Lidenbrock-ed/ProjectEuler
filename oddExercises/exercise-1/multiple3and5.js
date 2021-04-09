let numbers = [];
for(let i = 3;i<1000;i++){
    if (i % 3 == 0 || i % 5 == 0){
        numbers.push(i);
    }
}
let counter = numbers.reduce((a,b)=> a+b )
console.log(counter);