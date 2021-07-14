function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            return sum(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'multi':
            return multi(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
    }
}

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
