let country = 'Ukraine';
let city = 'Mykolaiv';
let adress = 'Karpenko str';
let fullAdress = country + city + adress;

let sideA = 17;
let sideB = 21;
let area = sideA * sideB;

console.log('Area = ' + area + 'm2')

let number1 = 17;
let number2 = 6;

console.log(number1 ** number2)

console.log(Math.floor(Math.random() * 70))


let number = 5;

Number.isInteger(number / 2) ? console.log("even") : console.log("not even")


let text = "hello $";
let newText = text.replace(/\$/, "€");

console.log(newText);