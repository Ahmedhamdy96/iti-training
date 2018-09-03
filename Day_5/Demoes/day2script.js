// // this.name   this--> window
// // window.name

// // window.name="Basic winodw";

//  var smallObjectWindow=window.open("advwindow.html","smallWindow","width=300,height=300");



// //1- setInterval

// function updateData()
// {
//     alert("Timer");
//     document.title=i++;





// }


// var i=1;
// //a-
// // var timerID=setInterval("alert('Timer');document.title=i++",3000);
// //b-
// // var timerID=setInterval("updateData()",2000);
// //c- anonymouse function
// var timerID=setInterval(function(){

//     i++;
//     document.title=i;
//     document.body.style.backgroundColor="rgb(230, 219,"+((i*2)+10)+")";

// //    console.log((i*2)+10);
//   //  console.log(document.body.style.backgroundColor);
// },500);

// // clearInterval(timerID);




// //2-setTimeout

// var timerID=setTimeout("alert('Timeout')",3000);





function printData()
{
    alert("printData");
}

var printDataVers2=function(){
    alert("printData2");
    
}


function sumALL()
{
    //arguments
    global=arguments;
    console.log(arguments);
    return eval(arguments.join("+"));
}


// sumALL(2,3);
// sumALL(2,3,11,22);
// sumALL(2,3,11,22,90);






