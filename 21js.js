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


//Example 2 — Приходят 2 типа в Макдак
const hamburger = 4;
const fries = 2;
const nagets = 2;
const pivo = 2;
const koks = 1;

if (hamburger === 5 && fries > 1 && nagets === 3) {
    console.log('Все сыты!');
} else if (hamburger === 5 || fries === 2 && nagets < 2) {
    console.log('Саша и Юра идут в бар пить пиво!');
} else if (pivo === 2) {
    console.log('Саша и Юра заказывают кокс');
}

