let number = 0;
let counter = 1;
let minimumDividers= 500;
let i = 1;
while(true){
    number = number + i;
    i++;
    for(let divider = 1; divider<=(number/2);divider++){
        if(number % divider==0){
            counter++;
        }
    }
    if(counter>minimumDividers){
        console.log(number);
        return;
    }
    counter = 1;
}