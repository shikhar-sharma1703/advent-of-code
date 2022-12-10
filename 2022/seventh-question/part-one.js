const {input} = require('./input.js')

// const input = [
//     '$ cd /',        '$ ls',
//     'dir a',         '14848514 b.txt',
//     '8504156 c.dat', 'dir d',
//     '$ cd a',        '$ ls',
//     'dir e',         '29116 f',
//     '2557 g',        '62596 h.lst',
//     '$ cd e',        '$ ls',
//     '584 i',         '$ cd ..',
//     '$ cd ..',       '$ cd d',
//     '$ ls',          '4060174 j',
//     '8033020 d.log', '5626152 d.ext',
//     '7214296 k'
// ]


const calculateEachDirectorySize = (input) => {
    const directories = {
        '/': 0
    };
    let currentDirectoryStack = [];

    for (let i = 0; i < input.length; i++) {
        const line = input[i]
        if (line.startsWith('$ cd')) {
            if(line.split(' ')[2] == '..') {
                currentDirectoryStack.pop()
            }
            else {
                currentDirectoryStack.push(line.split(' ')[2])
            }
        }
        else if (line.startsWith('dir')) {
            // const directoryName = line.split(' ')[1]
            // const directoryPath = currentDirectoryStack.join('/') + '/' + directoryName
            // directories[directoryPath] = 0
        }
        else if (line.startsWith('$ ls')){

        }
        else {
            const [fileSize, fileName] = line.split(' ')
            currentDirectoryStack.forEach((directory, index) => {
                const directoryPath = currentDirectoryStack.slice(0, index+1).join('/')
                if(!directories[directoryPath]){ 
                    directories[directoryPath] = parseInt(fileSize)
                }
                else{  
                    directories[directoryPath] += parseInt(fileSize)
                }       
            })

        }
    }
    return directories
}

const result = calculateEachDirectorySize(input);
const sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1])
const highestSize = sortedResult[0][1]

const calculateFileToBeDeleted = (sortedResult) => {
    const spaceLeft = 70000000 - highestSize;
    const spaceRequired = 30000000 - spaceLeft;
    console.log(spaceLeft)
    const directoriesWhichCanBeDeleted = []
    sortedResult.forEach((directory, index) => {
        if(directory[1] >= spaceRequired) {
            directoriesWhichCanBeDeleted.push(directory)
        }
    })
    console.log(directoriesWhichCanBeDeleted)
}

calculateFileToBeDeleted(sortedResult)

