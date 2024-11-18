
const products = [
    { name: 'Shampoo', price: 300 },
    { name: 'Shirt', price: 500 },
    { name: 'Pant', price: 1100 },
    { name: 'Ciruni', price: 100 }
];

function get_total_product (products) {
    let sum = 0;
    for (const product of products) {
        sum = sum + product.price;
    }
    return sum
}

const price = get_total_product(products);
console.log(`get total product price: `, price)