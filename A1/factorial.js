// Write a program to find the factorial of a number.

const number = 5;

if (number>0){
    let temp = 1;
    for (i=1; i<=number; i++){
        temp = temp * i;
    }
    console.log(`factorial of ${number} is ${temp}`)
}
//edge case
else {
    console.log(-1);
} 