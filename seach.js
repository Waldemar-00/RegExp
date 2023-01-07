const str = "Я люблю JavaScript!";

const regexp = /Java/;
const res = str.search(regexp);
if(res + 1)console.log( res );

const regexp1 = /Javt/;
const res1 = str.search(regexp1);
if(res1 + 1)console.log( res1 );
else console.log( res1 );