let cart = [
  { quantity: 4, price: 400 },
  { quantity: 2, price: 200 },
  { quantity: 1, price: 40000 },
  { quantity: 2, price: 14000 },
  { quantity: 3, price: 500 },
  { quantity: 7, price: 100 },
  { quantity: 3, price: 400 },
];

let total_bill = 0;

cart.forEach((element) => 
total_bill += element.quantity * element.price);

console.log(total_bill);