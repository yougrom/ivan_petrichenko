//21. (д) Логические операторы

//Example 1
// const hamburger = 5;
// const fries = 0;
// const nagets = 2;

// if (hamburger && fries && nagets) { //&& логический оператор - И
//         console.log ('Я сыт!');
// } else if ((hamburger > 6)) {
//         console.log ('Вкустно, но хочется ещё чего-то!');
// } else ((nagets > 1)); {
//         console.log ('Теперь я сыт!');
//         }

// console.log((hamburger && fries)); //результат логических операторов это логическое булевое значение

// В JS типы данных могут переходить один в другой, строка может стать числом, и что угодно может стать логическим значением


//Динамическая типизация, в JS есть 5 сущностей которые всегда будут false
/**
 * 0 - false
 * '' пустая строка - false
 * null - false
 * undefined - false
 * NaN - false
 */


//ОПЕРАТОР - И - &&
//Example 2 — Приходят 2 типа в Макдак
const hamburger = 4;
const fries = 2;
const nagets = 2;
const pivo = 2;

console.log(hamburger === 4 && fries && nagets);

console.log(1 && 0);//0 - второй неправдивый выдал 0
console.log(1 && 5);//5 - оба правдивые показывает последнее значение
console.log(null && 5);//null - запнулся на 1 неправдивом, дальше нет смысла
console.log(0 && 'test');//0 - запнулся на первом неправдивом



if (hamburger === 5 && fries > 1 && nagets === 3) {
    console.log('Все сыты!');
} else if (hamburger === 5 || fries === 2 && nagets < 2) {
    console.log('Саша и Юра идут в бар пить пиво!');
} else if (pivo === 2) {
    console.log('Саша и Юра заказывают текилу');
}



//ОПЕРАТОР - ИЛИ - ||

const hamburger1 = 4;
const fries1 = 2;
const nagets1 = 2;
const pivo1 = 2;


if (hamburger1 === 3 && fries1 === 2 || nagets1 === 1 && pivo1 === 2) {
    console.log('Все довольны!');
} else if (hamburger1 || fries1 || nagets1) {
    console.log('Саша и Юра идут в бар пить пиво!');
}

console.log(hamburger1 === 3 && fries1 === 2 || nagets1 === 1 && pivo1);//false



// Example 3
let johnReport, alexReport, samReport, mariaReport = 'done';
console.log(johnReport || alexReport || samReport || mariaReport);


//ОПЕРАТОР - НЕТ - !

console.log(!0); // не 0;


//HOMETASK
console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5); 
console.log( 5 === 5 && 3 > 1 || 5);


//Выполняется ли условие?
const hamburger2 = 3;
const fries2 = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger2 === 3 && cola || fries2 === 3 && nuggets) {
   console.log('Done!')
}
//Done

//Выполняется ли условие? - 2

let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;
 
if (hamburger3 || cola3 || fries3 === 3 || nuggets3) {
   console.log('Done!')
}
//Done!

//Выполняется ли условие?-3

let hamburger4;
const fries4 = NaN;
const cola4 = 0;
const nuggets4 = 2;
 
if (hamburger4 && cola4 || fries4 === 3 && nuggets4) {
   console.log('Done!')
}//nope
