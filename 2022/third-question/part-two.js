const {input} = require('./input');

// a-z have priority 1-26
const getPriority = (char) => char.charCodeAt(0) - 96;
// A-Z have priority 27-52
const getPriority2 = (char) => (char.charCodeAt(0) - 64 )+ 26;

let commonCharacters = [];

let len = input.length;
for(let i = 0; i < len; i=i+3) {
    let firstItem = input[i];
    let secondItem = input[i+1];
    let thirdItem = input[i+2];

    const common = firstItem.split('').filter((char) => secondItem.includes(char) && thirdItem.includes(char));
    
    commonCharacters.push(common);
    console.log(common)

}

let finalScore = 0;

console.log(commonCharacters);

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