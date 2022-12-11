const {input} = require('./input');

const parseInput = (input) => {
    const values = {}

    for(let i = 0; i < input.length; i = i+6){
        const monkey = parseInt(input[i].split(' ')[1].split(":")[0]);
        const startingItems = input[i+1].trim().split(':')[1].split(',').map((item) => parseInt(item));
        const operation = input[i+2].split(':')[1].split("=")[1].trim();
        const test = parseInt(input[i+3].split(':')[1].trim().split('by ')[1]);
        const ifTrue = parseInt(input[i+4].split(':')[1].trim().split('to ')[1].split(' ')[1]);
        const ifFalse = parseInt(input[i+5].split(':')[1].trim().split('to ')[1].split(' ')[1]);

        values[monkey] = {
            startingItems,
            operation,
            test,
            ifTrue,
            ifFalse
        }
    }

    return values;
}

const performOperation = (operation, item) => {

    const [old, operator, value] = operation.split(' ');

    switch(value){
        case 'old':
            switch(operator){
                case '+':
                    return item + item;
                case '-':
                    return item - item;
                case '*':
                    return item * item;
            }
        default:
            switch(operator){
                case '+':
                    return item + parseInt(value);
                case '-':
                    return item - parseInt(value);
                case '*':
                    return item * parseInt(value);
            }
    }

    

}

const calculeAfter20Rounds = (input) => {
    const values = parseInput(input);
    const monkeys = Object.keys(values);
    
    let monkeysItems = {};
    let monkeyThrows = {};

    let supermodulo = 1
    Object.values(values).forEach((value) => {
        supermodulo = supermodulo * value.test;
    })


    monkeys.forEach((monkey) => {
        monkeyThrows[monkey] = 0;
    })

    for(let i = 0; i < 10000; i++){
        for(const monkey of monkeys){
            for(const item of values[monkey].startingItems){
                let updatedItem = performOperation(values[monkey].operation, item) % supermodulo;
        
                if(updatedItem % values[monkey].test === 0){
                    values[`${values[monkey].ifTrue}`].startingItems.push(updatedItem);
                    values[monkey].startingItems = values[monkey].startingItems.filter((iItem) => iItem !== item);
                    monkeyThrows[monkey] = monkeyThrows[monkey] + 1;
                }
                else{
                    values[`${values[monkey].ifFalse}`].startingItems.push(updatedItem);
                    values[monkey].startingItems = values[monkey].startingItems.filter((iItem) => iItem !== item);
                    monkeyThrows[monkey] = monkeyThrows[monkey] + 1;
                } 
            }
        }
    }

    return monkeyThrows;
}

const throws = calculeAfter20Rounds(input);

console.log(throws);

const test = Object.values(calculeAfter20Rounds(input)).sort((a, b) => b - a);

console.log(test[0] * test[1]);
