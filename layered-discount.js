
// first100price = 100
// second100price = 90
// avobePrice = 70


function layerdDiscount (quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const avobePrice = 70;

    if (quantity <= 100) {
        const total = quantity * 100;
        return total;
    }
    else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingQuantityTotal = remainingQuantity * second100Price;
        const total = first100Total + remainingQuantityTotal;
        return total;
    }
    else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingQuantityTotal = remainingQuantity * avobePrice;
        const total = first100Total + second100Total + remainingQuantityTotal;
        return total;
    }
}

const setQuantity = layerdDiscount (205)
console.log(`total layered discout amount: `, setQuantity);