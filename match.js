//! match
const str = "I love JavaScript";
const result = str.match(/Java(Script)/);
const res = str.match(/JavaScript/);
console.log( result, res );
console.log( result[0], res[0] );     
console.log( result[1], res[1] );     
console.log( result.length, res.length ); 
console.log( result.index, res.index );  
console.log( result.input, res.input );
//! flag 'GLOBAL'
console.log('G___________________________G');

const strG = "I love JavaScript";

const resultG = strG.match(/Java(Script)/g);

console.log( resultG[0], resultG[1] ); //? because flag 'g', only last match
console.log( resultG.length );

console.log('Null_____________________return');
//! NULL
const strNull = "I love JavaScript";

const resultNull = str.match(/HTML/);

console.log(resultNull); 