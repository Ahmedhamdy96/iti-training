$(function(){
    console.log($("news").filter("checked"));
    
    
    // ============================[Add Button ]==============================================
    let addButton = $(":button") ;        // Add Button 
    let newTextBos = $(":text").first() ; // news text box 
          // new content 
    
    let newsTable = $("table").last() ;   // news table 
    let checked = $(":radio").filter(":checked").val() ; // the checked one
    
    
    
    
    addButton.on("click" ,  function(){
    
      //   newsTable.append(`<tr class="${checked}"><td>"newValue+"</td>"+"<td>"+"<a href=#>Delete</a>"+"</td>"+ "</tr>`);
        let newValue = newTextBos.val();
          newsTable.append(`<tr class="${$(":radio").filter(":checked").val()}"><td> ${newValue} </td> <td> <a href="#">Delete</a></td></tr>`);

    
        
    }) ; // Click on Add 
    
    // =======================================================================================
    
    
    
    // ==========================================[Delete]====================================================
    
    $("table").last().on("click" , "tr",  function(){
        
        $(this).remove() ; 
        
    }) ; // delete click 
    
    // ======================================================================================================
    
    

    // =============================[ search ]===============================================================
    $("#searchTxt").last().on("keyup" , function(){    
    
        let searchWord = $(this).val() ;    
    
        $("table:last td:even").each(function(){
            if($(this).text().indexOf(searchWord)==-1)
            {
                $(this).parent().hide() ; 
            }
            else
            {
                $(this).parent().show() ;
            }
            
            
        }) ; 
    }) ; // search 
    
    
    // ======================================================================================================
    
    
}) ; // Loading 











