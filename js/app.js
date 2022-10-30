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
                $(".msg").fadeOut(1000);
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

    // BUTTON ACTIVE TO INACTIVE 
    $(document).on("click", ".btnActive",function(){
        var id =  $(this).val();

        // AJAX APPLY
        $.ajax({
            url: "function.php",
            type: "POST",
            data:{
                "action": "active",
                "id": id     // id collect from val;
            },
            success: function(data){
                show();
            }
        });
    });

    // BUTTON INACTIVE TO ACTIVE
    $(document).on("click", ".btnInactive",function(){
        var id =  $(this).val();

        // AJAX APPLY
        $.ajax({
            url: "function.php",
            type: "POST",
            data:{
                "action": "inactive",
                "id": id     // id collect from val;
            },
            success: function(data){
                show();
            }
        });
    });

    // ID VALUE STORE TO MODAL BTN
    $(document).on("click", ".btnDelete",function(){
        var id =  $(this).val();
        $(".MbtnDelete").val(id);
    });

    // MODAL DELETE STUDENT
    $(document).on("click", ".MbtnDelete",function(){
        var id =  $(this).val();

        // AJAX APPLY
        $.ajax({
            url: "function.php",
            type: "POST",
            data:{
                "action": "delete",
                "id": id     // id collect from val;
            },
            success: function(data){
                show();
                $("#forDelete").modal("hide");
            }
        });
    });


     // Add New Student
     $(document).on("click","#MAddNew",function(){
        var student_name = $("#Mstudent_name").val();
        var f_name = $("#Mf_name").val();
        var m_name = $("#Mm_name").val();
        var email = $("#Memail").val();
        var status = $("#Mstatus").val();
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
                $(".msg").fadeOut(0);
                //After Instert blank the value
                $("#Mstudent_name").val("");
                $("#Mf_name").val("");
                $("#Mm_name").val("");
                $("#Memail").val("");
                $("#Mstatus").val("");
                $("#forInsert").modal("hide");
            }
        })

    });
});