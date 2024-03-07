// коментар одна строка
/*
коментар на декілька строк
*/

console.log(a);
/*
---------
Змінні:
---------
let
const
var
*/

// let - блочний, його можна змінювати 
let a=10;
console.log(a);
a=20;
console.log(a);

//const - не можна змінювати
const b=15;
console.log(b);

//----------------------
//    Типи даних

//Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

//null & undefined

let d = null;
console.log(d);

let e; // буде uderfined

//typeof -  щоб перевірити значення
console.log(typeof "asd");


//-------------------
//    Числа

console.log(1+2);

const value = "3"; //є типом стрінг
console.log(Number(value)); //зробить цифру зі стрінги
console.log(typeof Number(value)); //стане типом число

let f = 31;
console.log(f);
const number = Number("51");
console.log(Number.isNaN(number)); //Not a Number . Результат буде false

console.log(Number.parseInt("5ddd")); //5   ----- парсить до першого символу
console.log(Number.parseInt("3fer3")); //3
console.log(Number.parseInt("szdfbgdf")); //NaN

console.log(Number.parseFloat("34.3er3")); 34.3 //парсить число з крапкою до першого символу


//--------------------
// складання з крапкою

console.log(0.1 + 0.2 === 0.3); //false
console.log(0.1 + 0.2); //0.30000000000004
console.log((0.1 * 10 + 0.2 * 10) / 10); //0.3

//-----------------------
//  Обʼєкти Math

//Math.floor(num) - поверає найбільше ціле число, меньше, або таке, що дорівнює заданому
console.log(Math.floor(1.7)); //1   (1 < 1.7)
//Math.ceil(num) - поверає найменьше ціле число, більше, або таке, що дорівнює заданому
console.log(Math.ceil(1.2)); //2   (2 > 1.2)
//Math.round(num) - повертає значення числа, округленого до цілого
console.log(Math.round(1.2)); //1
console.log(Math.roumd(1.5)); //2
//Math.max(num1, num2, ....) - найбілше з наведених
console.log(Math.max(20, 10, 50, 30)); //50
//Math.min(num1, num2, ....) - найменьше з наведених
console.log(Math.min(20, 10, 50, 30)); //10
//Math.pow(base, exponent) - степінь числа base
console.log(Math.pow(2,4)); // 16
//Math.random
console.log(Math.random()); // випадкове число між 0 та 1
console.log(Math.random() * (10 - 1) +1); // випадкове число між 1 та 10

//-----------------------
// String
let str = "Hello";
let str2 = 'Одинарні лапки';
let phrase = `Вивернуті лапки ${str}`; //щоб додати до строки якусь змінну

const message = "JavaScript" + "is" + "..."
console.log(message);

//------------------------
//   Конкатенація

let result;

result = 5 + "5";
console.log(result); // '55'
console.log(typeof result); //string

result = 5 + "5" + 5; 
console.log(result); // '555'
console.log(typeof result); //string

result = 5 + 5 + "5"; 
console.log(result); // '105'
console.log(typeof result); //string

//-------------------
/* методи строк. Всі чутливі до реєстру
lenth - довжина
toLowerCase()
toUpperCase()
indexOf()  -- яким номером буде заданий символ, якщо такого символу немає, результат буде -1
includes()  -- входження в строку
 */

//---------------------
// BigInt - дуже великі числа

//--------------------
//--------------------
// Objects

let obj = {
    city: "Kyiv",
    age: 1232,
};
console.log(user);
console.log(user.name); // можна дивитись значення властивостей обʼєкта окремо

// methods методи

//delete
let user{
    name: "Іван",
    age: 30,
    "Likes birds": true,
}
delete user.age;
console.log(user);
console.log(user["Likes birds"]);

//------
//add
let user = {};
user.name = "Niko";
user.age = 25; //додає властивіть вік
console.log(user); //Niko

//   Цикли
// for..in
//for (key in object){}//тіло виконується для кожної властивості обʼєкта

let user = {
    name: "Ivan",
    age: 30,
    isAdmin: true,
};
for (let key in user){
    console.log(key); // виведе назви ключів - name, age, isAdmin
    console.log(user[key]);//виведе значення ключів - Ivan, 30, true
    // якщо залишити обідві команди, то результат - name, Ivan, age, 30, isAdmin, true
};

//Впорядкування властивостей обʼєкта
let codes = {
    49: "Німеччина",
    44:  "Великобританія",
    1: "США",
};
for (let code in codes) {
    console.log(code);// 1,44,49
    //чисельні значенні - по порядку, строкові - в порядку як записані
}