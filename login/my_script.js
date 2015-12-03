$("button#submit").click(function(){
    
   if($("#username").val() =="" || $("#password").val() =="")
       $("div#ack").html("Please enter both Username and Password");
    else
        $.post( $("#myForm").attr("action"),
              $("#myform :input").serializeArray(),
              function (data){
            $("div#ack").html(data);
        });
    $("#myForm").submit( function(){
       
        return false;
    });
    
});