const {input} = require('./input')

// const input =  [
//     '    [D]    ',
//     '[N] [C]    ',
//     '[Z] [M] [P]',
//     ' 1   2   3 ',
//     '',
//     'move 1 from 2 to 1',
//     'move 3 from 1 to 3',
//     'move 2 from 2 to 1',
//     'move 1 from 1 to 2'
// ]

let stacks = [];
const moves = [];
let items = [];
let itemsIndex = []
let parsedStacks = [];

let indexOfItem = 0;

const parseInput = (input) => {
    input.map((line) => {
        if (line.includes('move')) {
            let move = line.trim().split(' ');
            [count, from, to] = [parseInt(move[1]), parseInt(move[3]), parseInt(move[5])];
            moves.push([count, from, to]);
        }
        else{
            if(line.includes('1')){
                items = line.trim().split('').filter((item) => item !== ' ');
                items.map((item, index) => {
                    itemsIndex.push(line.indexOf(item));
                })
            }
            else{
                stacks.push(line)
            }
        }
    })
    for(let i = 0; i < items.length; i++){
        parsedStacks.push(stacks.map((stack) => 
        stack[itemsIndex[i]]
        ).filter((item) => item !== undefined && item !== ' ').reverse());
    }
};

const solve = (stacks, moves) => {
    moves.map((move) => {
        let [count, from, to] = move;
        let fromStack = stacks[from - 1];
        let toStack = stacks[to - 1];
        let fromStackIndex = from - 1;
        let toStackIndex = to - 1;

        if(count === 1){
            let itemToMove = fromStack.pop();
            toStack.push(itemToMove);
            count--;
        }
        else{
            fromStack.splice(fromStack.length - count, count).map((item) => {
                toStack.push(item);
            })
        }

        stacks[fromStackIndex] = fromStack;
        stacks[toStackIndex] = toStack;

    })
    return stacks;
}

parseInput(input);

console.log(solve(parsedStacks, moves));

let resultStringTop = parsedStacks.map((stack) => stack[stack.length - 1]).join('');
console.log(resultStringTop);
