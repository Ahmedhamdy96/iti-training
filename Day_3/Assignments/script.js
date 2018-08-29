// creating a string object for testing
myString = new String("MY NAME IS ahmed");

/*
    Javascript Day [1] Assignment [1]
    ----------------------------------
    -> write a Javascript Function which accepts a string as input and swap the case of each character
*/

function changeCase(stringg)
{
    var result = "" ;
    for( i=0 ; i<myString.length ; i++)
    {
        if(myString[i] == myString[i].toLowerCase())
        {
            result = result + myString[i].toUpperCase();
        }
        else
        {
            result = result + myString[i].toLowerCase();
        }
    }
    return result ;
}


/*
    Javascript Day [1] Assignment [2]
    ----------------------------------
    -> write a JavaScript Function that accepts a string as a parameter
       and converts the first letter of each word of the string in upper case.
*/

function toTitle(stringg)
{
    var result = stringg[0].toUpperCase() ;
    for( i=1 ; i<stringg.length ; i++)
    {
        if(stringg[i]!=" ")
        {
            result = result + stringg[i];
        }
        else
        {
            result = result +  stringg[i] + stringg[i+1].toUpperCase();
            i++ ;
        }
    }
    return result ;
}


/*
    Javascript Day [1] Assignment [ BONUS (2)-(a) ]
    --------------------------------------------------
    -> write a JavaScript Function that check the user email address using pure javescript code
*/

function checkEmail(email)
{
    var AT_index = email.indexOf("@");
    var DOT_index = email.indexOf(".") ;

    if(AT_index == -1 )
    {
        result = "ivalid email address" ;
        return result ;
    }
    else
    {
        if(DOT_index==-1 | DOT_index<AT_index)
        {
            result =  "invalid email address ";
            return result ;
        }
        else if(DOT_index>AT_index)
        {
            result =  "valid email address"
            return result ;
        }
    }

}

/*
    Javascript Day [1] Assignment [ BONUS (2)-(b) ]
    --------------------------------------------------
    -> write a JavaScript Function that check the user email address using Regular Expressions
*/

function checkMailReg(email)
{
    var regX = /\w+@\w+\.+[a-z]/g ; // \w not space
    var flag = regX.test(email) ;

    if(flag == true )
    {
        return "Valid Email Address :) " ;
    }
    else
    {
        return "Invalid Email Address :( " ;
    }
}
