let cart = [
  "iphone 14",
  "Airbuds pro",
  "macbook pro",
  "iphone 14",
  "Airbuds pro",
  "iphone 14 pro",
  "iphone 14 pro",
  "macbook pro",
];

function removeDuplicates(array){
    let unique = [];
    array.forEach(element => {
        if(!unique.includes(element)){
            unique.push(element);
        }
    });
    return unique;
}

cart = removeDuplicates(cart);

console.log(cart);