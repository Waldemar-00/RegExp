const str = '<h1>Hello, world!</h1>';
const regexp = /<(.*?)>/g;

let matchAll = str.matchAll(regexp);

console.log(matchAll); 

matchAll = Array.from(matchAll); 

let firstMatch = matchAll[0];
console.log( firstMatch[0] );  
console.log( firstMatch[1] );  
console.log( firstMatch.index );
console.log( firstMatch.input );