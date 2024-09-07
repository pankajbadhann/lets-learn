// every method

// when each number are even => true
const numbers = [2,4,6,9,10];
const anss = numbers.every((number)=>number%2===0);
console.log(anss);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]
const ans = userCart.every((cartItem)=>cartItem.price < 40000);
console.log(ans);