
function discountPrice (quatity) {
    if (quatity <= 50) {
        const total = quatity * 100;
        return total;
    }
    else if (quatity <= 100) {
        const total = quatity * 80;
        return total;
    }
    else {
        if(quatity <= 150) {
            const total = quatity * 70;
            return total;
        }
        else{
            return `eto ticket amar kace nai jah vag`
        }
    }
}

const total = discountPrice (150);
console.log(total);