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

