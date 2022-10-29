// JQUERY AJAX
$(document).ready(function(){

    // Data Inserted Using Ajax with the class name.
    $(".add_student").click(function(){
        var student_name = $(".student_name").val();
        var f_name = $(".f_name").val();
        var m_name = $(".m_name").val();
        var email = $(".email").val();
        var status = $(".status").val();
        var action = "insertData";

        $.ajax({
            url: "function.php",
            type: "POST",
            data:{
                "student_name": student_name,
                "f_name": f_name,
                "m_name": m_name,
                "email": email,
                "status": status,
                "action": action
            },
            success: function(response){
                show();  // For Loading data again when insert data;
                $(".msg").html(response);   //html() or append();
                //MSG fadeOut
                $(".msg").fadeOut(1500);
                //After Instert blank the value
                $(".student_name").val("");
                $(".f_name").val("");
                $(".m_name").val("");
                $(".email").val("");
                $(".status").val("");
            }
        })

    });

    // GET DATA FROM SERVER USING AJAX
    show();
    function show(){
        $.ajax({
            url: "function.php",  // Only File Name no need ../function.php
            type: "POST",
            data:{
                "action": "show",
            },
            success: function(response){
                $(".tdata").html(response);
            }
        });
    }


});