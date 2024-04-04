// return prime number between specified interval
function isPrime(n1, n2) {
    var prime = [];
    for (let i = n1; i <= n2; i++) {
        var cnt = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0)
                cnt++;
        }
        if (cnt === 0 && i > 1) {
            prime.push(i);
        }
    }
    console.log(prime);
}

isPrime(3, 10);

