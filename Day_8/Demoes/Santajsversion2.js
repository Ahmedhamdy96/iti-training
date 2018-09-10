function moveRight()
{
    timerID=setInterval(function(){

        left+=10;
        if(left<window.innerWidth-parseInt(document.images[0].style.width))
        {
            document.images[0].style.left=left+"px";

        }
        else{
            document.images[0].classList.add("flipClass");
            clearInterval(timerID);
            moveLeft();
            
        }
        

    },50);//interval
}

function moveLeft()
{
    timerID=setInterval(function(){
        left-=10;
        if(left>0)
        {
            document.images[0].style.left=left+"px";
        }
        else
        {
            document.images[0].classList.remove("flipClass");
            clearInterval(timerID);
            moveRight();
        }
       


    },50);//interval
}



window.addEventListener("load",function(){

    document.images[0].style.position="absolute";
    left=0;
    moveRight();



});//load