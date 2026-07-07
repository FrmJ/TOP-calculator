const add = (x, y) => {
    return x + y;
};

const subtract = (x, y) => {
    return x - y;
};

const multiply = (x, y) => {
    return x * y;
};

const divide = (x, y) => {
    return x / y;
};

const operate = (operator, x, y) => {
    switch(operator) {
        case "add":
            return add(x, y);
        
        case "subtract":
            return subtract(x, y);

        case "multiply":
            return multiply(x, y);

        case "divide":
            return divide(x, y);
    }
};