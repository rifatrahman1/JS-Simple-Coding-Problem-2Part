
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divided(num1, num2) {
    return num1 / num2;
}


function calculated(a, b, operation) {
    if (operation === 'add') {
        const sum = add(a, b);
        return sum;
    }
    else if (operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if (operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if (operation === 'divided') {
        const result = divided(a, b);
        return result;
    }
    else {
        return `only 'add', 'subtract', 'multiply', 'divided' operation is allowed`
    }
}

const result = calculated(7, 5, 'multiply')
console.log(result)

