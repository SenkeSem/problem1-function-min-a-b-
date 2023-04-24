function min(a, b) {
    if (a < b) {
        return a;
    } else if (a = b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(min(15, 5));

function minVersion2(a, b) {
    return (a < b) ? a : b;
}

console.log(minVersion2(2,5));

