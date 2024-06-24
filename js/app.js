let country = 'Ukraine';
let city = 'Mykolaiv';
let address = 'Karpenko str';
let fullAddress = `${country} ${city} ${address}`;


let sideA = 17;
let sideB = 21;
let area = sideA * sideB;

console.log('Area = ' + area + 'm2')


let number1 = 17;
let number2 = 6;

console.log(number1 ** number2)

console.log(Math.floor(Math.random() * 70))


let number = 5;

(number % 2 === 0) ? console.log("even") : console.log("not even")


let text = "hello $";
let newText = text.replace("$", "€");

console.log(newText);


let monthNumber = 6;

switch (monthNumber) {
    case 1: 
    console.log('January');
    break;
    case 2: 
    console.log('February');
    break;
    case 3: 
    console.log('March');
    break;
    case 4: 
    console.log('April');
    break;
    case 5: 
    console.log('May');
    break;
    case 6: 
    console.log('June');
    break;
    case 7: 
    console.log('July');
    break;
    case 8: 
    console.log('August');
    break;
    case 9: 
    console.log('September');
    break;
    case 10: 
    console.log('October');
    break;
    case 11: 
    console.log('November');
    break;
    case 12: 
    console.log('December');
    break;
    default: 
    console.log('wrong month number');
}


let password = "    this-is-a-good-password$#   ";
password = password.trim();

if (password.length > 10 && password.includes("$") && password.includes("#")) {
    console.log("you have strong password")
} else {
    console.log("please change your password")
}


let a = 4;
let b = 2;

typeof a === "number" && typeof b === "number" ? console.log(a + b) : console.warn("Sum of those items can’t be counted")

//------------------MODULE-7

//  1. Найдите числа в массиве которые делятся на 3 без остатка

const arr = [90, 124, 55, 9213, 159, 225, 1543, 1545];
const devideArr = [];

for (num of arr) {
    if (num % 3 === 0) {
        devideArr.push(num)
    }
}

// 2. Посчитайте финальную стоимость всех продуктов в корзине и выведите результат как переменную в консоль лог

const shoppingCart = [
    {
        name: 'Cheese',
        count: 4,
        pricePerItem: 100
    },
    {
        name: 'Water',
        count: 5,
        pricePerItem: 23
    },
    {
        name: 'Banana',
        count: 8,
        pricePerItem: 55
    },
    {
        name: 'Chocolate',
        count: 2,
        pricePerItem: 115
    }
]

let totalCount = 0;

for (product of shoppingCart) {
    totalCount += product.count * product.pricePerItem;
}

console.log(`Фінальна вартість: ${totalCount}`)

//3. Посчитайте сумму всех чисел внутри массива массивов. Присвойте переменной и выведете в консоль.

const arr1 = [
    [100, 1230, 1293123, 1236478, 9816],
    [9932, 2123123, 1293123, 1203123, 1239],
    [12391, 1235, 1123994, 1203123, 5543243],
    [1203, 92346, 288, 12309, 5543243],
    [94324, 8236, 123, 86231, 8455322],
    [2340123, 172, 123, 321, 38421340]
];

const arraySum = (array) => {

let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        sum += arraySum(array[i]);
    } else {
        sum += array[i];
    }
}
return sum;
};

const totalSum = arraySum(arr1);

console.log(`Сумма усіх чисел: ${totalSum}`);

//4. Добавить в массив uniqueArray только не повторяющиеся значения из arr

const arr2 = ["php", "php", "css", "css", "script", "script", "html", "html", "java", "java", "go", "Python", "Python"];

const uniqueArray = Array.from(new Set(arr2));

//5. В объекте result должны быть свойства в которых ключ это элемент массива arr а значение - количество этих элементов в массиве arr

const arr3 = ['Jane', 'Bob', 'Bob', 'Luci', 'Jane', 'Bob', 'Peter', 'Felix', 'Felix', 'Bob', 'Andrew'];
const result = {};

for (names of arr3) {
    result[names] = (result[names] || 0) + 1;
}


//---------MODULE-8


// 1. Напишіть функцію, котра приймає строку як параметр і знаходить найдовше слово у строчці

function findBiggestWord(str) {
    const words = str.split(' ');
    let biggestWord = '';

    for (word of words) {
        if (word.length > biggestWord.length) {
            biggestWord = word;
        }
    }

    return biggestWord;
}

// 2. Напишіть функцію, котра приймає число як параметр і повертає перевернуте число

function reverseNumber(number) {
    return parseInt(number.toString().split("").reverse().join(""));
}

console.log(reverseNumber(123))

// 3. Написати функцію котра буде приймати стрінь значення і повертати нове стрінь значення із символами без повторення

function unique(str) {
    return [...new Set(str)].join('');
}

console.log(unique('aabbcc'))

// 4. Написати функцію котра приймає 3 параметри - перемоги, нічиї, поразки і повертає кількість очок команди

// 5. Написати функцію яка приймає масив як параметр і повертає об'єкт із такими властивостями: 
//   Максимальне значення
//   Мінімальне значення
//   Кількість елементів
//   Середнє арифметичне

function statistics(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const count = arr.length;
    const sum = arr.reduce((acc, val) => acc + val, 0); 
    const average = sum / count;

    return {max, min, count, average}
}

const myArray = [1, 5, 10, -2];
console.log(statistics(myArray));


// 6. Написати функцію котра приймає масив робітників компанії

const workers = [
    { name: "Jimm", salary: 40000, department: "IT" },
    { name: "Bob", salary: 60300, department: "HR" },
    { name: "Stacy", salary: 15000, department: "IT" },
    { name: "Tom", salary: 55200, department: "DEVOPS" },
    { name: "Kate", salary: 25000, department: "IT" },
    { name: "John", salary: 40000, department: "HR" },
    { name: "Billy", salary: 60000, department: "DEVOPS" },
];

// Функция должна вернуть объект ( Department це підрозділ в якому найбільша середня зарплатня