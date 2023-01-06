const strRep = "John Smith";
//? func(match, p1, p2, ..., pn, offset(index), input(strRep), groups(object of named groups)) --- ...match or (match, ...p)
const resultRep = strRep.replace(/(?<name>\w+) (?<surname>\w+)/, (...match) => { 
  //const groups = match.pop(); //! groups is object
  console.log(match[5]); //! it's property groups
  return `${match[5].surname}, ${match[5].name}`;
  //return `${groups.surname}, ${groups.name}`;
});

console.log(resultRep); 

const str = "html and css";

const result = str.replace(/html|css/gi, str => str.toUpperCase());

console.log(result); 