// Datatype conversion 

let score = false;
console.log(typeof score);
console.log(typeof (score));

let newScore = Number(score);
console.log(typeof newScore, newScore);

// '22' => 22;
// '22dhdh' => NaN;
// true => 1; false =>0

let isLogIn = undefined; // null, name, => false
let newOne = Boolean(isLogIn);
console.log(typeof newOne, newOne);


let num = 33;
let newNum = String(num);
console.log(newNum + 1);

let value = 48488484499n ;
let newValue = Boolean(value);
console.log(newValue);
