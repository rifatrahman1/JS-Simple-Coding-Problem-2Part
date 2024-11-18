

function bazarQuantity (potatoKg, riceKg, onionKg) {
    const myBudget = 3000;

    const potatoPrice = 65;
    const ricePrice = 60;
    const onionPriec = 150;o

    const totalPotatoPrice = potatoPrice * potatoKg;
    const totalRicePrice = ricePrice * riceKg;
    const totalOnionPrice = onionPriec * onionKg;

    const totalCost = totalPotatoPrice + totalRicePrice + totalOnionPrice;

    const remainingAmount = myBudget - totalCost;

    return remainingAmount;
}

const bazar = bazarQuantity (4, 25, 2);
console.log(`total cost`, bazar);