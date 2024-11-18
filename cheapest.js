
const mobile = [
    { name: 'Samsung', price: 21000, camera: '200mp', color: 'gray' },
    { name: 'Xioami', price: 11000, camera: '200mp', color: 'gray' },
    { name: 'Oppo', price: 18000, camera: '200mp', color: 'gray' },
    { name: 'Vivo', price: 23000, camera: '200mp', color: 'gray' },
    { name: 'Iphone', price: 90000, camera: '200mp', color: 'gray' },
    { name: 'Realme', price: 19500, camera: '200mp', color: 'gray' },
];

function get_cheapest_phone(phones) {
    let max = phones[0];
    for (const phone of phones) {
        if (phone.price > max.price) {
            max = phone;
        }
    }
    return max;
}

const cheap = get_cheapest_phone(mobile);
console.log(`get cheapest phone: `, cheap);