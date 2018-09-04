//  1 - (a) finding all images in two ways
var first_method = document.getElementsByTagName("img");
var second_method = document.images ;
// --------------------------------------------------------------------------------

// 1 - (b) Find all options for City drop down list
var selectionMenue = document.getElementsByTagName("select")[0] ;
var menueOptions = document.getElementsByTagName("option") ;

for(i=0 ; i<menueOptions.length; i++)
{
    console.log(menueOptions[i].textContent);
}
// -------------------------------------------------------

// 1 -(c) Find all rows for second table in page
var allTables = document.getElementsByTagName("table");
var secondTable = allTables[1] ;

for( i=0; i<3 ;i++)
{
    var row = secondTable.getElementsByTagName("tr")[i] ;
    console.log(row) ;
}
// ---------------------------------------------------------

// 1 - (d) Find all elements that contain class with name fontBlue
var fontBlueCollection = document.getElementsByClassName("fontBlue") ;
// ----------------------------------------------------------

// 1 - (e) Find all paragraphs elements
var allParagraphs = document.getElementsByTagName("p") ;
for( i = 0 ; i<allParagraphs.length ; i++ )
{
    console.log(allParagraphs[i]) ;
}
// -------------------------------------------------------------------------

/*

2- Do the following actions on the following HTML elements :

    a- Get all first anchor inside the second table then change its’ href to training.com and it’s text to “Training”
    b- Find all images and change its borders to  solid pink 2px
    c- create Javascript function to Find all checkboxes (checked) in userData form and alert the value of checkedboxes values
    d- Find element with id example then change it’s background color to pink

*/


// a - Get all first anchor inside the second table then change its’ href to training.com and it’s text to “Training”
var allTables = document.getElementsByTagName("table") ;
var secondTable = allTables[1] ;
var firstAnchor_secondTable = secondTable.getElementsByTagName("a")[0] ;

firstAnchor_secondTable.href = "training.com" ;
firstAnchor_secondTable.textContent = "Training" ;

// b - Find all images and change its borders to  solid pink 2px

var imagesCollection = document.getElementsByTagName("img") ;
for( i=0 ; i<imagesCollection.length ;i++)
{
    imagesCollection[i].style.border = "solid pink 2px" ;
}

// c - create Javascript function to Find all checkboxes (checked) in userData form and alert the value of checkedboxes values

function getCheckBoxes()
{
    var allBoxes = document.getElementsByName("hoppy") ;
    for(i=0 ;i<allBoxes.length; i++)
    {
        if(allBoxes[i].checked==true)
        {
            alert("Check Box :   " + allBoxes[i].value + "  Is Checked ") ;
        }
    }
}

// d - Find element with id example then change it’s background color to pink
var exampleElement = document.getElementById("example") ;
exampleElement.style.backgroundColor="pink" ;

// -------------------------------------------------------------------------------------------------

// 4 - Slide show group of images every second on page
var i=2;
setInterval(function(){
    document.images[0].src="Images/"+(i++)+".jpg";
    if(i==9)
    {
        i=1 ;
    };
},1000);


// 5 - Get students degrees from user then add those degrees on table using DOM traversing methods
var degrees=[10,20,30,30,10] ; // sum => 100
var degreesTable = document.createElement("table");

for(i=0 ; i<degrees.length ; i++)
{
    var tableRow = document.createElement("tr") ;
    var tableData = document.createElement("td") ;
    tableData.innerText = degrees[i] ;
    tableRow.appendChild(tableData) ;
    degreesTable.appendChild(tableRow) ;
}

degreesTable.style.border = "solid black 3px" ;
document.body.appendChild(degreesTable);
// ----------------------------------------------------------------------------------------------
