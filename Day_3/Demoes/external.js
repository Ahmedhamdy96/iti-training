//alert("hello form extrenal file");
// console.log("hello form extrenal file");

/*************** Data Types */
//1- numbers
//console.log(numberFloat);

numberInt=2;
var numberFloat=3.3;

//2-string

var firstName="Eman Fathi \"ITI Instructor\""+" new data";
courseName='JS';

//console.log("userName is "+firstName+" cousre name is "+courseName);



/***************  functions */
//calling
//printData("eman","JS");   //hoisting
var global=20;



function printData(userName,courseName)
{
    console.log(global);
    

    var instructorName="Eman Fathi",global=50;

    salary=1000;
   // console.log(userName,courseName);
   // return 20;
}

//calling
printData("eman","JS");

//extar parameters --> no prom.
//few para,meters   --?


/*************** Language objects */

//String
var fullName=new String("This is new Object of String Class");














