const products = [
  {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
  },
  {
    name: "Bluetooth Speaker",
    price: 45.99,
    category: "Electronics",
  },
  {
    name: "Running Shoes",
    price: 65.0,
    category: "Footwear",
  },
  {
    name: "Yoga Mat",
    price: 20.0,
    category: "Fitness",
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 15.5,
    category: "Accessories",
  },
  {
    name: "Noise Cancelling Headphones",
    price: 99.99,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
  },
  {
    name: "Leather Wallet",
    price: 45.0,
    category: "Accessories",
  },
  {
    name: "Digital Camera",
    price: 399.99,
    category: "Electronics",
  },
  {
    name: "Gaming Keyboard",
    price: 89.99,
    category: "Electronics",
  },
  {
    name: "Sunglasses",
    price: 120.0,
    category: "Accessories",
  },
  {
    name: "Cookware Set",
    price: 250.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Toothbrush",
    price: 75.0,
    category: "Personal Care",
  },
  {
    name: "Office Chair",
    price: 150.0,
    category: "Furniture",
  },
  {
    name: "Coffee Maker",
    price: 85.0,
    category: "Home & Kitchen",
  },
  {
    name: "Electric Kettle",
    price: 30.0,
    category: "Home & Kitchen",
  },
  {
    name: "Backpack",
    price: 60.0,
    category: "Accessories",
  },
  {
    name: "Standing Desk",
    price: 300.0,
    category: "Furniture",
  },
  {
    name: "Desk Lamp",
    price: 40.0,
    category: "Furniture",
  },
  {
    name: "Running T-shirt",
    price: 25.0,
    category: "Apparel",
  },
];

//-------TASK-2

const li = document.querySelectorAll('li');
li.forEach((li) => {
    li.classList.add('listItem');
});

//-----

const ul = document.querySelector('ul');

ul.classList.add('list');

//-------TASK-3

const newLi2 = document.createElement('li');

newLi2.innerText = 'Bugatti';

ul.prepend(newLi2);

//-------TASK-4

const newLi = document.createElement('li');

newLi.innerText = 'Ford';

ul.appendChild(newLi);

//-------TASK-5

const form = document.querySelector('form');

//NAME
const firstNameInput = document.createElement('input');
firstNameInput.type = 'text';
firstNameInput.placeholder = 'Имя';
form.appendChild(firstNameInput);

//LAST NAME
const lastNameInput = document.createElement('input');
lastNameInput.type = 'text';
lastNameInput.placeholder = 'Фамилия';
form.appendChild(lastNameInput);

//PASSWORD
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Пароль';
form.appendChild(passwordInput);

//CONFIRM PASSWORD
const confirmInput = document.createElement('input');
confirmInput.type = 'password';
confirmInput.placeholder = 'Подтверждение пароля';
form.appendChild(confirmInput);

//-------TASK-6

const image = document.createElement("img");
image.src = 
  "https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg";

document.querySelector('body').appendChild(image);

//-------TASK-7

const p = document.querySelector('p');

p.classList.remove('red', 'italic');

//-------TASK-8

const wrapper = document.querySelector('#h1Wrapper');

wrapper.innerHTML = '<h1>this is h1 tag</h1>';

//------TASK-9

wrapper.classList.add('wrapper');

//------TASK-10

const groupedProducts = {};

products.forEach(product => {
    if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
});

const productContainer = document.getElementById('product-container');

for (category in groupedProducts) { 
    const div = document.createElement('div');
    const productList = document.createElement('ul');
    
    div.innerHTML = `<h2>${category}</h2>`;
    
    groupedProducts[category].forEach(product => {
        const li = document.createElement('li');
        const price = document.createElement('span');
        
        li.textContent = `${product.name}`;
        price.textContent = ` ${product.price}`;
        price.style.color = 'green';
        
        li.appendChild(price);
        productList.appendChild(li);
    });
    div.appendChild(productList);
    productContainer.appendChild(div);
};