const {input} = require('./input');

// a-z have priority 1-26
const getPriority = (char) => char.charCodeAt(0) - 96;
// A-Z have priority 27-52
const getPriority2 = (char) => (char.charCodeAt(0) - 64 )+ 26;


const commonCharacters = input.map((item, idx) => {
    const firstPart = item.slice(0, item.length / 2);
    const secondPart = item.slice(item.length / 2);
    const common = firstPart.split('').filter((char) => secondPart.includes(char));
    return common;
})

let finalScore = 0;

commonCharacters.forEach((item) => {
    // Check if item[0] is uppercase or lowercase
    const isUppercase = item[0] === item[0].toUpperCase();
    if(isUppercase) {
        finalScore += getPriority2(item[0]);
    }
    else{
        finalScore += getPriority(item[0]);
    }
})

console.log(finalScore);