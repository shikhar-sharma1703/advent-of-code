const { input } = require('./input');

// const input = [
//     '2-4,6-8',
// '5-7,7-9',
// '2-8,3-7',
// '6-6,4-6',
// '2-6,4-8',
// ]

const parseInput = input.map(line => {
    const [range1, range2] = line.split(',');
    const [min1, max1] = range1.split('-').map(Number);
    const [min2, max2] = range2.split('-').map(Number);
    return [min1, max1, min2, max2];
})

// let fullyContained = 0;

let countOfOverlappingRanges = 0;

for (let i = 0; i < parseInput.length; i++) {
    const [min1, max1, min2, max2] = parseInput[i];
    if(min1 <= min2 && max1 >= min2){
        countOfOverlappingRanges++;
    }
    else if(min1 <= max2 && max1 >= max2){
        countOfOverlappingRanges++;
    }
    else if(min2 <= min1 && max2 >= min1){
        countOfOverlappingRanges++;
    }
    else if(min2 <= max1 && max2 >= max1){
        countOfOverlappingRanges++;
    }

}

console.log(countOfOverlappingRanges);

