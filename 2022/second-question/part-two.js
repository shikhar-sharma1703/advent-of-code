const {input} = require('./input');

let score = {
    'X' : 1,
    'Y' : 2,
    'Z' : 3
}

let win = {
    'A' : 'Y',
    'B' : 'Z',
    'C' : 'X',
}

let draw = {
    'A' : 'X',
    'B' : 'Y',
    'C' : 'Z',
}

let lose = {
    'A' : 'Z',
    'B' : 'X',
    'C' : 'Y',
}

let finalScore = 0

input.forEach((line) => {
    let [a, b] = line.split(' ');
    switch (b){
        case 'X':
            finalScore += score[lose[a]]
            break;
        case 'Y':
            finalScore += score[draw[a]] + 3
            break;
        case 'Z':
            finalScore += score[win[a]] + 6
            break;
    }
})

console.log(finalScore)
