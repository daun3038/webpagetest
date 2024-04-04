//#1
// var value = 0;
// while(true){
//     if(value > 100){
//         break;
//     }
//     console.log("value의 값 : "+ value);
//     value++;
// }
// console.log("value는 100보다 크다.");

//#2
// var value = 0;
// while(value<10){
//     value++;
//     if(value%2 == 0){
//         continue;
//     }
//     console.log("value의 값: "+ value);
// }


//#3 ->오류있음!
// var value = 0;
// while(value <10){
//     value++;
//     (value%2 ==0) ? continue : 
//     console.log("value의 값 : "+value+'<br/');
// }

//#4
// var dan = 2;
// while(dan<10)
// {
//     var num = 1;
//     while(num<10){
//         console.log(dan + " * "+num + " = "+dan*num);
//         num++;
//     }
//     dan++;
// }

//#5
// var dan = 2;
// while(dan<10){
//     var num = 1;
//     while(num<10){
//         if(dan == 6 && num == 1)
//             break;
//         console.log(dan + "*"+num+"="+dan*num);
//         num++;
//     }
//     dan++;
// }

//#6
var dan = 2;
outside : while(dan<10){
    var num = 1;
    while(num<10){
        if(dan==6 && num==1){
            break outside;
        }
        console.log(dan+"*"+num+"="+dan*num);
        num++
    }
    dan++;
}