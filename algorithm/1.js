const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('fizzBuzz input: ', (input) => {
    // TODO: Log the answer in a database
    var result = fizzBuzz(input);
    console.log(result);
    rl.close();
});

function fizzBuzz(input) {
    let is_nan = !isNaN(input) ? true : false;
    let mod_res = (input % 3 === 0 && input % 5 === 0 && is_nan) ? "FizzBuzz" : false;
    mod_res = (input % 3 === 0 && !mod_res) ? "Fizz" : mod_res;
    mod_res = (input % 5 === 0 && !mod_res) ? "Buzz" : mod_res;
    return mod_res;
}
