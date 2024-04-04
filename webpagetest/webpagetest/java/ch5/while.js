// #1
// var i = 1;
// while(i<13)
// {
//     console.log(i + '월');
//     i++;
// }

//#2
// var sum = 0;
// var i = 1;
// while(i<11){
//     sum += i;
//     i++;
// }
// console.log(sum);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('단수 입력 : ',function(dan){
    var i = 1;
    while(i<10){
        console.log(dan * i);
        i++;
    }
    rl.close();
});