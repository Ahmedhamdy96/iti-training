$(function(){
    
    // ===============================[ choosing items ]==================================
    // using deligation to include items add at the run time 
    
    $("ul").on("click" , "li" , function(){ 
        
        $("li").removeClass() ; 
        $(this).addClass("liElm") ; 
        
    }) ; // choosing one list item on click  
    
    
    // ================================ [ > ] ============================================
    let toRight = $(":button").eq(1);     // To Right Button 
    toRight.on("click" , function(){    
        
        $("ul:first .liElm").appendTo("ul:last") ; // append to right if it exist in letf  
        
    }) ;  // Click on [ > ]
    
    
    // ====================================================================================
    
    
    // ================================ [ < ] ============================================
    let toLeft = $(":button").eq(0);     // To Left Button 
    toLeft.on("click" , function(){
        
        $("ul:last .liElm").appendTo("ul:first") ; // append to left if it exist in right  
        
        
        
    }) ;  // Click on [ < ]
    
    
    // ====================================================================================
    
    
    // ================================[ ADD Button ]======================================
    let addBtn = $(":button").last() ;  // ADD Button
    addBtn.on("click" , function(){
        
        let textBox = $(":text") ;      // Text Box 
        let textValue = textBox.val() ; // Text Value 
        let leftList = $("ul:first");   // Left List 
        
        leftList.append("<li>" + textValue + "</li> ") ;  // Appending the text to the list as a list ltem <li> 
     
    }) ; // Click on Add
    // ====================================================================================
    
}) ; // loading 