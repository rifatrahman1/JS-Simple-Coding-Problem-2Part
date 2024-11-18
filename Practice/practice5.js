// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function providCompany(amounts) {
    let sumShahin = 0;
    let sumShihab = 0;
    let sumShikot = 0;
    let sumShohel = 0;

    for (const amount of amounts) {
        if (amount.name === 'shahin') {
            sumShahin = (amount.increment * amount.experience) + sumShahin + amount.starting;
        }
        else if (amount.name === 'shihab') {
            sumShihab = (amount.increment * amount.experience) + sumShihab + amount.starting;
        }
        else if (amount.name === 'shikot') {
            sumShikot = (amount.increment * amount.experience) + sumShikot + amount.starting;
        }
        else {
            sumShohel = (amount.increment * amount.experience) + sumShohel + amount.starting;
        }
        
    }
    const totalProvided = sumShahin + sumShihab + sumShikot + sumShohel;
    return totalProvided;
}

const getCompany = providCompany(employees);
console.log(getCompany)