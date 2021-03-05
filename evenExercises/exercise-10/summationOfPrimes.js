let primes = [];
for(let number = 2; number<2000000; number++){
        let count = 0;
        if(number == 2 || number == 3 || number == 5 || number == 7){
            primes.push(number);
            count++;
        }else{
            if( number % 2 == 0){
                count++
            }
            if( number % 3 == 0){
                count++
            }
            if( number % 5 == 0){
                count++
            }
            if( number % 7 == 0){
                count++
            }
        }
    if(count == 0){
        primes.push(number)
    }
}
let sumPrimes = primes.reduce((a,b)=> a + b);
console.log(sumPrimes);