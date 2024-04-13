// let dic = new Object();

// dic.boy = "소년";
// dic.girl = "소녀";
// dic.friend = "친구";

// console.log(dic.boy);
// console.log(dic.girl);
// console.log(dic.friend);

// let dic = {
//     boy : "소년",
//     girl : '소녀',
//     friend : '친구'
// };

// dic.apple = '사과';
// dic.ten = 10;

// delete dic.girl;
// console.log(dic.apple);
// console.log(dic.girl);
// console.log(dic.ten);


// let dic ={
//     present : "더보이즈_현재",
// };

// console.log(dic.present);
// dic.present = "선물";
// console.log(dic.present);

// const dic = {
//     present : "현재",
// };

// dic = {};
// console.log(dic.present);
// dic.present = "선물";
// console

// const readline = require("readline");
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// let dic = {
//     boy : "소년",
//     girl : "소녀",
//     friend : "친구"
// };

// rl.question("찾을 단어를 입력하세요 : ",function(key){
//     let word = key;
//     console.log(dic[word]);

//     rl.close();
// });


// const readline = require("readline");
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// rl.question("다이쓰! 무조선 천원, 상품 입력: ",function(obj){
//     let basket = {
//         [obj] : "1000원",
//     }
//     console.log(basket[obj]);

//     rl.close();
// });

// let id = "jamsu";
// let pw = "1111";
// let user = {
//     id,
//     pw,
// }

// console.log(user.id);
// console.log(user.pw);

let user = {
    id : "jamsu",
    pw : "1111",
    name : "lch",
    mobile : "010-8436-1397",
    country : "대한민국"
}

for(let info in user){
    console.log(`${info}: ${user[info]}`);
}