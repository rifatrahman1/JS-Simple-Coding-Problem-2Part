

const heights = [34, 67, 57, 89, 23, 89, 12, 92, 78, 54];

function getMax(numbers) {
    let max = numbers[0];
    for (const number of numbers) {
        if (number > max) {
            max = number;
        }
    }
    // return max;
}

const max = getMax(heights);
// console.log(`max value is`, max);


