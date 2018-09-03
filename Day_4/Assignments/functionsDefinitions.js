// 3 - students grade
function calcGrades()
{
    var grades = [] ;    // creating an empty array
    var number = parseInt(prompt("Enter Total Number of students : ")) ;
    for(i=0 ; i<number ; i++)
    {
        grades[i] = parseInt(prompt("Enter grade : " + (i+1) )) ;
    }
    return eval(grades.join("+")); // eval(javascript code to be executed )
}
//----------------------------------------------------------------------------

// 4 - minumum and maximum
function min_and_max()
{
    // take array size as an input from user
    var size = parseInt(prompt("Enter array size : "));
    var userInput = [] ; // initializing an empty array
    for(i=0 ; i<size; i++)
    {
        userInput[i] = parseInt(prompt("Enter Grade " + (i+1)));
    }
    var array = removeDuplicate(userInput) ;
    //console.log(array);
    var min = array[0] ;
    var max = array[0] ;
    // i is the index not the value
    for(i in array)
    {
        if(array[i]<min)
        {
            min = array[i] ;
        }
        if(array[i]>max)
        {
            max = array[i] ;
        }
    }
    return "Minumum Number is : " + min + "\nMaximum Number is : " + max ;
}
// ----------------------------------------------------------------------------------

// 5 - Remove duplicate items from an array
function removeDuplicate( userInput )
{
    var result = [] ; // creating empty array
    for(i=0 ; i<userInput.length ; i++) // loop through the user input array
    {
        if( !result.includes(userInput[i]) ) // check if the result array includes the current element or not
        {
            result.push(userInput[i]) ;
        }
    }
    return result ;
}
// -----------------------------------------------------------------------------

// 6 - display a 4 numbers array between 0 and 9 randomly
function generateArray()
{
    var result =[] ;
    for(i=0 ;i<4 ;i++)
    {
        /*
         - push items to the array like the stack structure
         - Math.random() -> returns a fractional number like 0.35
         - we multiply Math.random() by 10 to be like 3.5
         - and finally rounding for the smaller value by Math.floor() to include 0 and neglict 10 in our numbers array
        */
        result.push(Math.floor((Math.random()*10))) ;
    }

    return result ;
}
// ------------------------------------------------------------------------------

// 7 - calculate area of triangle
function calcArea(x,y,z)
{
    var s = parseFloat((x+y+z)/2);
    var area = 0 ;
    var q = s*(s-x)*(s-y)*(s-z);
    var area = parseFloat(Math.pow(q,0.5)) ;

    return "Rectangle area is : " + area ;
}
