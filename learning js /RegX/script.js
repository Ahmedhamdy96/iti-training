

/*
    Regular Expressions in Javascript
    ----------------------------------
    search , replace , match , split , test
    ----------------------------------

    syntax => /pattern/attribute
    attributes :
    1 - [ i ] => case insenstive characters => [ a <==> A ]
    2 - [ g ] => global search
    3 - [ m ] => multi lines search
    ------------------------------------------------------------------------
    brackets  :::   /[expression]/attribute
    1 - [character]  => any character in this brackets
    2 - [^character] => any character NOT in this brackets
    3 - [range]      => ex: [a-e] => pattern for all characters between " a "  and " e " ==>  a,b,c,d characters
        - [a-z]  => all small characters
        - [A-Z]  => all capital characters
        - [0-9]  => all numbers between 0 and 9
        - [^0-9] => NOT Range
        - [A-g]    === [A-Z] + [a-g]
        - [0-9a-z] ==== [0-9] + [a-z] Double Range

    4 - Letter+            => ex: a+ in cat >>> cXt , caaat >>>> cXt
      - Letter{number}     => ex: a{4} in caaat >>> cXat
      - Letter{numberA , numberB} => A times or B times
      - Letter{numberA , }        => at Least A times
*/

var email = "ahmedhamdy@gmail.com" ;

var result = email.search(/m/) ;               // 2 => index of first position of "m"
var result_insensitive = email.search(/M/i) ;  // 2 => index of "m" :: as we used the insenstive characters attribute "M" will be same as "m"
var rep = email.replace(/a/ , "A") ;           // Replace first "a" => "A"

console.log(result);
console.log(result_insensitive);
console.log(rep);

console.log("=========================") ;

var global_search = email.replace(/h/gi , "H"); // i => insensitive , g => replace all "h" characters [global search]
console.log(global_search) ;


//-------------------------------------------------------------------------------------------------------
var name = "my name is ahmed hamdy " ;
var result = name.replace( /[a]/gi , "A" ); // global insenstive search for "a" and replace it with "A"
console.log(result) ;
//--------------------------------------------------------------------------------------------------------
var result = name.replace( /[^a]/gi , "X"); // replace any character but don't replace "a"
console.log(result);
//--------------------------------------------------------------------------------------------------------
var result = name.replace(/[a-f]/gi,"X") ;  // will replace any character between "a" and "f" with "X" >>> my nXmX is XhmXX hXmXy
console.log(result);
// -------------------------------------------------------------------------------------------------------
var phone = "my phone number is 0123456789" ;
var result = phone.replace(/[0-9]/g,"X") ;
console.log(result); // my phone number is XXXXXXXXXX
var result = phone.replace(/[^0-9]/g,"X") ;
console.log(result); // XXXXXXXXXXXXXXXXXX 0123456789   >>> note : included blank spaces
// -------------------------------------------------------------------------------------------------------
var string = "ABCXD higKLmnop" ;
var result = string.replace(/[A-g]/g, "X") ;
console.log(result); // XXXXX hiXXXmnop
// --------------------------------------------------------------------------------------------------------
var string = "ABCDabcd012398GHI" ;
var result = string.replace( /[0-9a-z]/g , "X") ; // [0-9a-z] <==> [^A-Z]
console.log(result);    // ABCDXXXXXXXXXXGHI
// ---------------------------------------------------------------------------------------------------------
var animal = "i love cats" ;
var result = animal.replace(/a+/gi,"X") ; // if one "a" or more "a" exists it will be replaced by "X"
console.log(result);

var animal = "i love caats" ;
var result = animal.replace(/a+/gi,"X") ;
console.log(result);


var animal = "i loaaaaaave caaaaaaaaaaats" ;
var result = animal.replace(/a+/gi,"X") ; // a+ == one or more
console.log(result);
// =====
var animal = "i love caats caaaats" ;
var result = animal.replace(/a{3}/gi,"X") ; // every three "a" will be replaced by "X"
console.log(result);

var animal = "i love cats caats caaats caaaats " ;
var result = animal.replace(/a{2,3}/g,"X"); // repacer "aa" or "aaa" with "X"
console.log(result);
// i love cats cXts cXts cXats

var animal = "i love cats caats caaats caaaats " ;
var result = animal.replace(/a{2,}/g,"X"); // if letter "a" exists 2 or more time replace it with X
console.log(result);
// i love cats cXts cXts cXts
