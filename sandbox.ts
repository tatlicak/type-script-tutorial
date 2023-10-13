let character = 'mario';
let age = 30;
let isBlackBelt = false;

//type can not be changed
//character = 20;

character = 'luigi';

age = 40.0;

isBlackBelt = true;

//type is checking in compile time for develpment not in runtime
const circ = (diameter:number) => {

    return diameter * Math.PI

}

console.log(circ(7.5));


