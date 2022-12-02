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

let lose = {
    'A' : 'Z',
    'B' : 'X',
    'C' : 'Y',
}

let finalScore = 0

input.forEach((line) => {
    let [a, b] = line.split(' ');
    if (win[a] === b) {
        finalScore += score[b] + 6;
    } else if (lose[a] === b) {
        finalScore += score[b];
    }
    else{
        finalScore += score[b] + 3;
    }

})

console.log(finalScore)
