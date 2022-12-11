const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.split('\n')
    .map((line) =>  {
        return {
            direction : line.split(' ')[0],
        move: parseInt(line.split(' ')[1])
            }
        
    } )

module.exports = {
	input,
};