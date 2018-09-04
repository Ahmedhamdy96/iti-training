
/*********************************** Find Something ********************** */

//*******************1-DOM Tree

//ID


//Images
document.firstImage //by name

//forms
document.forms
document.forms["UserData"]
//element
document.forms[0].userName
document.forms["basicForm"].userName
document.forms["UserData"].elements



//**********************2- document Methods */
//ID
// document.getElementById("example");
// document.querySelector("#example")
// document.getElementById("example").innerText="test3";
// document.querySelector("#example").innerText="test4";
// document.querySelectorAll("#example")[0].innerText="test5"


//Images
document.getElementsByName("firstImage") //only one image by name

//collection
document.getElementsByTagName("img")
document.images
document.querySelectorAll("img")//not recommended

//checkboxes
document.getElementsByName("hoppy")
//forms
document.getElementsByTagName("form")
//specified element
document.basicForm.userName

//find elment inside parent
document.getElementsByTagName("table")[1].getElementsByTagName("tr")


//class name
document.getElementsByClassName("bPink") //HTMLCollection(2) [table.bPink, select.bPink, City: select.bPink]
//table
document.getElementsByClassName("bPink")[0]
document.querySelector("table.bPink")


document.getElementsByClassName("bGrey")
document.getElementsByClassName("fontBlue bGrey")//=== document.querySelector(".fontBlue.bGrey")


/*********************************Do Something  **********************/


//1- finding all paragraphs then change its color

var pElements=document.getElementsByTagName("p");

    for(var i=0;i<pElements.length;i++)
    {
        pElements[i].style.color="red";
    }

//document.getElementsByTagName("div")[0].style.color="green"


//2- find all images and change its border

    var imageArray=document.images;
    for(var i=0;i<imageArray.length;i++)
    {
        imageArray[i].style.border="solid 3px green"
    }


//3- change href for the last anchor inside second table in page

    var tableObject=document.getElementsByTagName("table")[1]
    anchorObject=tableObject.getElementsByTagName("a")[tableObject.getElementsByTagName("a").length-1]
    anchorObject.href="newLink";

//4-slide show images



    imagearrayFileNames=["images/name1.jpg","images/bname2.jpg"];
    var i=1;
    setInterval(function(){

        document.images[0].src="Images/"+(i++)+".jpg";
        if(i==9)
        i=1;

    },1000);


//5-DropDownList selected items
var selectTag=document.getElementsByTagName("select")[0];

    for(var i=0;i<selectTag.options.length;i++)
    {
        if(selectTag.options[i].selected==true)
        {
            console.log(selectTag.options[i].value);
        }
    }
    //document.getElementsByTagName("select")[0].value



//******************** traversing document methods  */

//Adding elements on page in run time --> image


    var craetedImageObject=document.createElement("img");
    craetedImageObject.src="images/1.jpg";
    craetedImageObject.style.border="solid 3px red";

    // document.body.appendChild(craetedImageObject)
    document.querySelector("#example")







//6- create table of students after taking values form user
