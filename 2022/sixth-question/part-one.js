const {input} = require('./input');

// const input = [
//     "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
//     "nppdvjthqldpwncqszvftbrmjlhg"
// ]

// Forn input[0], output should be 5
// Forn input[1], output should be 6


let resultIndex = 0;
let uniqueCharsArr = [];

console.log(input)

input[0].split('').map((char, index) => {
    if(!uniqueCharsArr.includes(char)) {
        uniqueCharsArr.push(char);
    }
    else{
        uniqueCharsArr = uniqueCharsArr.slice(uniqueCharsArr.indexOf(char) + 1);
        uniqueCharsArr.push(char);
    }
    if(uniqueCharsArr.length > resultIndex) {
        resultIndex = uniqueCharsArr.length;
    }
    if(resultIndex === 14){
        console.log(index+1);
    }
})