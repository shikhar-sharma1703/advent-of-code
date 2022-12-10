const {input} = require('./input')

// const input = [[3,0,3,7,3], [2,5,5,1,2], [6,5,3,3,2], [3,3,5,4,9], [3,5,3,9,0]]

const checkVisibleTrees = (input) => {
    const visible = {}
    for(let a = 0; a < input.length; a++) {
        for(let b = 0; b < input[a].length; b++) {
            visible[[a,b]] = false
        }
    }
    for (let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
                const current = input[i][j]
                if(i == 0 || i == input.length-1 || j == 0 || j == input[i].length-1) {
                    visible[[i,j]] = true   
                }


                if(visible[[i,j]] == false) {
                    let allLeftElementsAreSmaller = true
                    for(let k = j-1; k >= 0; k--) {
                        if(input[i][k] >= current) {
                            allLeftElementsAreSmaller = false
                            break
                        }
                    }
                    if(allLeftElementsAreSmaller) {
                        visible[[i,j]] = true
                    }
                }   

                if(visible[[i,j]] == false) {
                    
                    let allRightElementsAreSmaller = true
                    for(let k = j+1; k < input[i].length; k++) {
                        if(input[i][k] >= current) {
                            allRightElementsAreSmaller = false
                            break
                        }
                    }
                    if(allRightElementsAreSmaller) {
                        visible[[i,j]] = true
                    }
                }

                if(visible[[i,j]] == false) {
                    let allTopElementsAreSmaller = true
                    for(let k = i-1; k >= 0; k--) {
                        if(input[k][j] >= current) {
                            allTopElementsAreSmaller = false
                            break
                        }
                    }
                    if(allTopElementsAreSmaller) {
                        visible[[i,j]] = true
                    }
                }  

                // check bottom
                if(visible[[i,j]] == false) {
                    let allBottomElementsAreSmaller = true
                    for(let k = i+1; k < input.length; k++) {
                        if(input[k][j] >= current) {
                            allBottomElementsAreSmaller = false
                            break
                        }
                    }
                    if(allBottomElementsAreSmaller) {
                        visible[[i,j]] = true
                    }
                }
            }
            }
            
            return visible
}
        
    


let countTrueValues = 0
Object.values(checkVisibleTrees(input)).forEach((value) => {
    if(value == true) {
        countTrueValues++
    }
})

console.log(countTrueValues)

// console.log(input)