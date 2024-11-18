
const products = [
    { name: 'Shampoo', price: 300, shopQuantity: 2 },
    { name: 'Shirt', price: 500, shopQuantity: 3 },
    { name: 'Pant', price: 1100, shopQuantity: 2 },
    { name: 'Ciruni', price: 100, shopQuantity: 7 }
];

function cartTotal (products){
    let total = 0;
    for (const product of products) {
        total = (product.price * product.shopQuantity) + total;
    }
    return total;
}

const cart = cartTotal (products);
console.log(`total shopping cart amount: `, cart);