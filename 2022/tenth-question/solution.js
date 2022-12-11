const {input} = require('./input');

const updateValue = (cycles, values, register) => {
    if(cycles === 20){
        values[20] = register * 20;
    }
    else if(cycles === 60){
        values[60] = register * 60;
    }
    else if(cycles === 100){
        values[100] = register * 100;
    }
    else if(cycles === 140){
        values[140] = register * 140;
    }
    else if(cycles === 180){
        values[180] = register * 180;
    }
    else if(cycles === 220){
        values[220] = register * 220;
    }
}

const partOne = (input) => {
    let cycles = 0;
    let register = 1;

    let valueOnCycles = {
    }

    while(cycles < 20){
        for(const line of input){
            if(line.instruction === "noop"){
                cycles += 1;
                valueOnCycles[cycles] = register;

            }
            else if(line.instruction === "addx"){
                cycles += 1;
                valueOnCycles[cycles] = register;
                cycles += 1;
                valueOnCycles[cycles] = register;
                register += line.value;
            }
        }
    }

    return valueOnCycles;
    
}

const partTwo = (input) => {
    const valueOnEachCycle = partOne(input);

    console.log(valueOnEachCycle);
    const entries = Object.entries(valueOnEachCycle);

    const changeLineCycles = [41,81,121,161,201]

    for(const [cycle, value] of entries){
        if(changeLineCycles.includes(parseInt(cycle))){
            process.stdout.write('\n');
        }
        if(((parseInt(cycle) % 40) - 1 === value) || ((parseInt(cycle) % 40) === value) || ((parseInt(cycle) % 40) -2 === value)){
            process.stdout.write('#')
        }
        else{
            process.stdout.write('.')
        }
    }
}

partTwo(input);