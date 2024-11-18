

const numbers = [34, 67, 57, 89, 23, 89, 12, 92, 78, 54];

function getMin(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min
}

const min = getMin(numbers);
console.log(`min value is `, min);