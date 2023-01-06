let regexp = /javascript/g;  //! (regexp just made: regexp.lastIndex=0)

console.log( regexp.test("javascript") ); // true (now regexp.lastIndex=10)
console.log( regexp.test("javascript") ); // false