//! exec
const str = 'Больше о JavaScript на https://javascript.info';
const regexp = /javascript/ig;

let result;

while ((result = regexp.exec(str))) { //! lastIndex will be change, and new iteration will be start at new lastIndex
    console.log( `Found ${result[0]} on position ${result.index}` );
}
//! manage last index('start index for exec()')
const strOne = 'Hello, world!';

const regexpOne = /\w+/g; 
console.log(`${regexpOne.exec(strOne)}`);
regexpOne.lastIndex = 5; //! 'g' allows find off index, else only first entry

console.log(`${regexpOne.exec(strOne)}`);


const regexpY = /\w+/y;
regexpY.lastIndex = 5; //! it finds only position off index!!!!!!!!!!!!!!   Thanks for FLAG 'y'  !!!!

console.log( regexpY.exec(strOne) ); 