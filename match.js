//! match
// const str = "I love JavaScript";
// const result = str.match(/Java(Script)/);
// const res = str.match(/JavaScript/);
// console.log( result, res );
// console.log( result[0], res[0] );     
// console.log( result[1], res[1] );     
// console.log( result.length, res.length ); 
// console.log( result.index, res.index );  
// console.log( result.input, res.input );
//! flag 'GLOBAL'
// console.log('G___________________________G');
// 
// const strG = "I love JavaScript";
// 
// const resultG = strG.match(/Java(Script)/g);
// 
// console.log( resultG[0], resultG[1] ); //? because flag 'g', only last match
// console.log( resultG.length );
// 
// console.log('Null_____________________return');
//! NULL
// const strNull = "I love JavaScript";
// 
// const resultNull = strNull.match(/HTML/);
// 
// console.log(resultNull); 
// 

// console.log('hadslk'.match());
// 
// const str = 'hadslk'.match(/h/g) + ' -G'; //! 'G'
// console.log(str);
// 
// const str1 = 'hadslk'.match(/h/g) + ' -G'; //! 'G'
// console.log(...str1);
// 
// const str2 = 'hadslk'.match(/h/);
// console.log(...str2);
// 
// const str3 = 'hadslk'.match(/h/);
// console.log(...str3);
// 
// const str4 = 'hadslk'.match(/h/);
// console.log(str4);
// 
// const match = 'a'.match(/a(z)?(c)?/);
// console.log( match );
// console.log( match.length );
// console.log( match[0] ); 
// console.log( match[1] ); 
// console.log( match[2] ); 

const  dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;//! ?<name> -- it's named group!
const  str = "2023-01-07";
const  groups = str.match(dateRegexp).groups;

console.log(groups.year); 
console.log(groups.month);
console.log(groups.day); 