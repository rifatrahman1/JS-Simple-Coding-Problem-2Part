

function shopQuantity (shirt, pant, shoe) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const shirtTotalPrice = shirtPrice * shirt;
    const pantTotalPrice = pantPrice * pant;
    const shoeTotalPrice = shoePrice * shoe;

    const totalCost = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalCost;
}

const shop = shopQuantity (2, 1, 1);
console.log(`shop needed money`, shop)