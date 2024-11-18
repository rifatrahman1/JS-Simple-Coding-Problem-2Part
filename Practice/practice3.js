// Task-3:
// Your task is to calculate the total budget required to buy electronics:



function totalCalculate(laptopQuantity, tabletQuantity, mobileQuantity) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const laptopPriceTotal = laptopPrice * laptopQuantity;
    const tabletPriceTotal = tabletPrice * tabletQuantity;
    const mobilePriceTotal = mobilePrice * mobileQuantity;

    return laptopPriceTotal + tabletPriceTotal + mobilePriceTotal;
}

const setQuantity = totalCalculate (1, 2, 3)
console.log(`Total cost: `, setQuantity);