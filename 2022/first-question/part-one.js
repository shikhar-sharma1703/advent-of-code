const { input } = require('./input');

const result = input.map((cals) => {
    return cals.split('\n')
        .map((n) => parseInt(n, 10))
        .reduce((acc, n) => acc + n, 0)
    
}).sort((a, b) => b-a)

console.log(result[0] + result[1] + result[2]);