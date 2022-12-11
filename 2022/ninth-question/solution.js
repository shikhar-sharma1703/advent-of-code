const {input} = require('./input.js');

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    move(direction){
        switch (direction){
            case 'R':
                this.x += 1;
                break;
            case 'L':
                this.x -= 1;
                break;
            case 'U':
                this.y += 1;
                break;
            case 'D':
                this.y -= 1;
                break;
        }
    }

    follow(point){
        const distance = Math.max(
            Math.abs(this.x - point.x),
            Math.abs(this.y - point.y)
          );

        if(distance > 1){
            const directionX = point.x - this.x;
            this.x += Math.abs(directionX) === 2 ? directionX / 2 : directionX;

            const directionY = point.y - this.y;
            this.y += Math.abs(directionY) === 2 ? directionY / 2 : directionY;
        }
    }
}

const partOne = (input) => {
    const HeadCo = new Point(0,0);
    const TailCo = new Point(0,0);

    const visited = new Set();
    for(const line of input){
        for(let i = 0; i < line.move; i++){
            HeadCo.move(line.direction);
            TailCo.follow(HeadCo);
            visited.add(`${TailCo.x},${TailCo.y}`);
        }
    }
    return visited.size
    
}

const partTwo = (input) => {
    const knots = new Array(10).fill(0).map((_) => new Point(0, 0));
    const visited = new Set();
    visited.add(`${0},${0}`);

    for(const line of input){
        for(let i = 0; i < line.move; i++){

            knots[0].move(line.direction);

            for(let j = 1; j < knots.length; j++){
                const knot = knots[j];
                knot.follow(knots[j-1]);
            }
            const tail = knots[knots.length - 1];
            visited.add(`${tail.x},${tail.y}`);
        }
    }

    return visited.size
}

console.log(partTwo(input));

