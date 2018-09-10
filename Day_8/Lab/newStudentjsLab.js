// creating a student class 
function Student(_name , _email , _grade , _dept)
{
    this.studentName = _name ; 
    this.studentEmail = _email ; 
    this.studentGrade = _grade ; 
    this.studentDepartment = _dept ; 
}; 

// ==========================================================================

window.addEventListener("load",function(){
    
    
        students = [] ;  
    
    var nameObj = document.getElementsByName("nameTxt")[0];   // name field
    var emailObj = document.getElementsByName("emailTxt")[0]; // e-mai field
    var gradeObj = document.getElementsByName("gradeTxt")[0]; // grade field
    var deptObj = document.getElementsByName("deptDrop")[0];  // department field
    
    var addBtn = document.getElementById("Button1") ;         // Add Button  
    var showBtn = document.getElementById("Button2") ;        // Show Data Button  

    //-------------------------------------------------------------------------------------
    addBtn.addEventListener("click",function(){
         studentName = nameObj.value;                      // name    value
         studentEmail = emailObj.value ;                   // e-mail  value
         studentGrade = gradeObj.value;                    // grade value 
         studentDepartment = deptObj.value ;               // department  
        
         document.getElementById("addspan").innerText = "ADDED" ;           // change span inner text  
         document.getElementById("addspan").style.visibility = "visible"  ; // make it visible  
        
                     // students  array 
        student = new Student(studentName , studentEmail , studentGrade ,studentDepartment) ; // creating object 
        students.push(student); // push it into array 
    
        
        
        
    });//Add Button
    //---------------------------------------------------------------------------------------
    
    showBtn.addEventListener("click" , function(){
                         
        
                
        // ------------------- sorting ----------------------
        students.sort(function(a,b){
             return a.studentGrade -b.studentGrade ; 
              
        });
        // -------------------------------------------------
        
        
        tableObj = document.getElementsByTagName("table")[1];
        
        tableObj.innerHTML=""; 
        
        for(i in students) // loop through students 
        {
            trObj = document.createElement("tr") ;
            for(key in students[i])
            {
                tdObj = document.createElement("td");             
                tdObj.innerText = students[i][key] ;
                trObj.appendChild(tdObj);
            
            }    
        
        tableObj.appendChild(trObj);
        tableObj.style.visibility="visible" ;
        }
    
        
        // appending data to table 
        
         

    }); // showing button 
    
    
    //=================================================================
    
    
    
});//load 