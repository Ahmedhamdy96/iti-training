var i = 10 ;  // initial value for the counter
// setInterval(javascriptCode , period_ms )
var timerID = setInterval(function(){
    window.document.body.innerHTML = "<div>" +i+ "</div>" ;
    i-- ;
    if(i<0)
    {
        clearInterval(timerID) ;
    }
},500); 
