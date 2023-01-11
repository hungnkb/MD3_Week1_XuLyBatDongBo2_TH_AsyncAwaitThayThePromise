async function division(a, b) {
    if (b == 0)
        return new Error('B must not equal to 0')
    return a / b;
}

async function check(a, b) {
    try {
        let result = await division(a, b);
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}

check(1, 2)