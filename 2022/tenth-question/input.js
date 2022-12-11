const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.split('\n')
    .map((line) =>  {
        return {
            instruction : line.split(' ')[0],
            value: line.split(' ')[1] ? parseInt(line.split(' ')[1]) : 0
        }
        
    } )

module.exports = {
	input,
};