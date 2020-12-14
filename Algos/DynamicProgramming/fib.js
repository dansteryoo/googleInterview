function fib(n, prevValues = []) {
    if (prevValues[n] != null) return prevValues[n]
    let result;

    if (n <= 2) {
        result = 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
    prevValues[n] = result 
    return result
}


console.log(fib(4))