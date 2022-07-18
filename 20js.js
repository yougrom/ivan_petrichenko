"use strict";
//Example 1
if (0) {
    console.log('OK');
    
} else {
    console.log('Nein');
}


//Example 2
// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok');
// }


//Example 3 - тернарный оператор - ? потому что в его работе учавствуют 3 аргуиента
// const num = 50;
// (num === 50) ?  console.log('Ok') : console.log('Error');


//Example 4
const num = 150;
switch (num) {
    case 49: //конструкция switch идёт на строгое сравнение
        console.log('Невнрно');
        break;// на этом заканчивается кейс
    case 100:
        console.log('Верно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}
