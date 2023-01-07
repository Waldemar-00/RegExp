const str = '<h1>Hello, world!</h1>';
const regexp = /<(.*?)>/g; //! ?: except bracket group

let matchAll = str.matchAll(regexp);

console.log(matchAll); 

matchAll = Array.from(matchAll); 

let firstMatch = matchAll[0];
console.log( firstMatch[0] );  
console.log( firstMatch[1] );  
console.log( firstMatch.index );
console.log( firstMatch.input );
// 
const [tag1, tag2] = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

console.log( tag1[0] ); 
console.log( tag1[1] ); 
console.log( tag1.index );
console.log( tag1.input );

console.log( tag2[0] ); 
console.log( tag2[1] ); 
console.log( tag2.index );
console.log( tag2.input );


const dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g; //! it's ?<month> -- named group
const str1 = "2020-08-09 2023-01-07";
const results = str1.matchAll(dateRegexp);

for(const result of results) {
    const {year, month, day} = result.groups;

    console.log(`${day}.${month}.${year}`);
}