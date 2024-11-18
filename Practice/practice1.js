// Task -1:
// Find the lowest number in the array below.



const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber (numbers) {
    let lowest = numbers[0];
    for (const number of numbers) {
        if (number < lowest){
            lowest = number;
        }
    }
    return lowest
}

const numbers = findLowestNumber (heights2);
console.log(`The lowest number: `, numbers)


