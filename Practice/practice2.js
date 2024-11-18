
// Task -2:
// Find the friend with the smallest name.



const heights2 = ['rahim', 'robin', 'rifat', 'rafi', 'ron', 'rashed'];

function smallestName (names) {
    let min = names[0];
    for (const name of names) {
        if (name.length < min.length) {
            min = name;
        }
    }
    return min;
}

const names = smallestName (heights2);
console.log(`This is smallest name: `, names);