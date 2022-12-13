const fs = require('fs')
const eol = require('os').EOL
 
let part1 = part2 = Infinity
let input = fs.readFileSync(__dirname + "/input.txt", 'utf8').split(eol)
 
const edges = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0]
]
let start, end
// create a 2d array with all the nodes
let map = input.map((row, y) => {
    return row.split('').map((char, x) => {
        let node = {
            x,
            y,
            visited: false,
            height: char.charCodeAt(0) - 96,
            distance: Infinity
        }
        if (char == 'S')
            node.height = 1, start = node
        if (char == 'E')
            node.height = 26, end = node
        return node
    })
})


// calculate all connected nodes per node
map.map(r => {
    r.map(node => {
        let nodes = []
        for (let edge of edges) {
            if (!map[node.y + edge[1]]) continue
            let n = map[node.y + edge[1]][node.x + edge[0]]
            n && nodes.push(n)
        }
        node.edgeNodes = nodes
    })
})

console.log(map)
// reset all nodes
function reset() {
    map.map(r => {
        r.map(n => {
            n.distance = Infinity
            n.visited = false
        })
    })
}
// calculate length of shortest path
function solve(n, p2 = false) {
    n.distance = 0
    let queue = [n]
    while (queue.length) {
        let node = queue.pop()
        for (const edge of node.edgeNodes) {
            if (!edge.visited && (node.height - edge.height) < 2) {
                let distance = node.distance + 1
                if ((edge.x == 0 && edge.y == start.y) || (p2 && edge.x == 0)) {
                    return distance
                } else {
                    edge.visited = true;
                    edge.distance = distance
                    queue.unshift(edge)
                }
            }
        }
    }
    return null
}
 
part1 = solve(end)
reset();
part2 = solve(end, true)
 
console.log(`Part 1: ${part1}\nPart 2: ${part2}`)