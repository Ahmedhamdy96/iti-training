window.addEventListener("load",function(){
    
    //TextBox Objects
    var nameObj = document.getElementsByName("nameTxtBox")[0];
    var gradeObj = document.getElementsByName("gradeTxtBox")[0];
    
    
    //Button Object
    var btnAdd = document.getElementsByTagName("button")[0];
    
    //Click Event
    btnAdd.addEventListener("click",function(){
        var stdName = nameObj.value;
        var stdGrade = gradeObj.value;
        
        //create tr
        trObj = document.createElement("tr");
        
        //create td
        var tdObj = document.createElement("td");
        
        //add name to td then tr
        tdObj.innerText = stdName;
        trObj.appendChild(tdObj);
        
        //create td2
        tdObj = document.createElement("td");
        
        //add grade to td then tr
        tdObj.innerText = stdGrade;
        trObj.appendChild(tdObj);
        
        //create td3
        tdObj = document.createElement("td");
        
        //add delete button
        delBtnObj = document.createElement("button");
        delBtnObj.innerText = "Delete";
        tdObj.appendChild(delBtnObj);
        trObj.appendChild(tdObj);
        delBtnObj.onclick = function(){
            this.parentElement.parentElement.remove();
        }
        
        
        
        //create the table object
        tableObj = document.getElementsByTagName("table")[1];
        //append tr to table
        tableObj.appendChild(trObj);
        
    });//Add Button
}); //Load