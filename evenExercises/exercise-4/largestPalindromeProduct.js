let max = 0;
for(let first = 999;first>100;first--){
    for(let second = 999; second>=100;second--){
        let number = first * second;
        number = number.toString();
        let reverse = "";
        for(let i =number.length; i>=0;i--){
            reverse = reverse + number.charAt(i);
        }
        if(number == reverse){
            number = parseInt(number);
            if(max < number){
                max = number;
            }
        }
    }
}
console.log(max)