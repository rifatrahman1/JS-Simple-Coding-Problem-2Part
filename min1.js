

const price = [20000, 16000, 18000, 12000, 14000, 28000, 32000];

function getMin (numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min){
            min = number;
        }
    }
    return min;
}

const cheep = getMin (price);
console.log(`chepest one is: `, cheep);