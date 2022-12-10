const {input} = require('./input')

// const input = [[3,0,3,7,3], [2,5,5,1,2], [6,5,3,3,2], [3,3,5,4,9], [3,5,3,9,0]]

const checkVisibleTrees = (input) => {
    const visible = {}
    for(let a = 0; a < input.length; a++) {
        for(let b = 0; b < input[a].length; b++) {
            visible[[a,b]] = false
        }
    }

    const scenicScore = {}

    for (let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
                const current = input[i][j]
                let countOfTreesVisibleOnLeft = 0;
                let countOfTreesVisibleOnRight = 0;
                let countOfTreesVisibleOnTop = 0;
                let countOfTreesVisibleOnBottom = 0;

                let atCorner = 1;

                if(i == 0 || i == input.length-1 || j == 0 || j == input[i].length-1) {
                    visible[[i,j]] = true   
                    atCorner = 0
                }


                let allLeftElementsAreSmaller = true
                
                for(let k = j-1; k >= 0; k--) {
                    countOfTreesVisibleOnLeft++
                    if(input[i][k] >= current) {
                        allLeftElementsAreSmaller = false
                        break
                    }
                }
                if(allLeftElementsAreSmaller) {
                    visible[[i,j]] = true
                } 


                let allRightElementsAreSmaller = true
                for(let k = j+1; k < input[i].length; k++) {
                    countOfTreesVisibleOnRight++
                    if(input[i][k] >= current) {
                        allRightElementsAreSmaller = false
                        break
                    }
                }
                if(allRightElementsAreSmaller) {
                    visible[[i,j]] = true
                }

                let allTopElementsAreSmaller = true
                for(let k = i-1; k >= 0; k--) {
                    countOfTreesVisibleOnTop++
                    if(input[k][j] >= current) {
                        allTopElementsAreSmaller = false
                        break
                    }
                }
                if(allTopElementsAreSmaller) {
                    visible[[i,j]] = true
                }


                let allBottomElementsAreSmaller = true
                for(let k = i+1; k < input.length; k++) {
                    countOfTreesVisibleOnBottom++
                    if(input[k][j] >= current) {
                        allBottomElementsAreSmaller = false
                        break
                    }
                }
                if(allBottomElementsAreSmaller) {
                    visible[[i,j]] = true
                }

                scenicScore[[i,j]] = countOfTreesVisibleOnLeft * countOfTreesVisibleOnRight * countOfTreesVisibleOnTop * countOfTreesVisibleOnBottom * atCorner
                }

            }

            return scenicScore
}
        

let keyWithTheHighestValue = 0
let maxValue = 0

Object.entries(checkVisibleTrees(input)).forEach(([key, value]) => {
    if(value > maxValue) {
        keyWithTheHighestValue = key
        maxValue = value
    }
})

console.log(maxValue)

// console.log(input)