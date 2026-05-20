const readline = require("readline").createInterface({
    input: process.stdin, 
    output: process.stdout
});


exports.convert = function(){
    readline.question("Choose your unit(C/F)", unit => {
        if(unit.toLowerCase() === "c"){
            readline.question("What is the temperature(enter flaot)", temp => {
                return((temp * 9/5) + 32)
            })
        }
        if(unit.toLowerCase() === "f"){
            readline.question("What is the temperature(enter float)", temp => {
                return((temp - 32) / 9/5)
            })
        }
    })
}