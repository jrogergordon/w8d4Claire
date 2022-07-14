const { ReadStream } = require("fs");
const { stdin } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const addNumbers = function(sum, numsLeft, completionCallback) {
    let theSum = sum;
    if (numsLeft >= 0) {
        rl.question("Put in a Number", function(answer) {
            completionCallback(theSum, numsLeft, answer);
        }); 
    } else {
        rl.close();
        return;
    }

};

const completionCallback = function(theSum, numsLeft, answer) {
    let num = parseInt(answer);
    theSum = theSum + num;
    console.log(theSum);
    addNumbers(theSum, numsLeft - 1, completionCallback);
};

addNumbers(0, 3, completionCallback);