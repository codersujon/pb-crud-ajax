// JQUERY AJAX
$(document).ready(function(){

    // GET DATA FROM SERVER USING AJAX
    show();
    function show(){
        $.ajax({
            url: "function.php",  // Only File Name no need ../function.php
            type: "GET",
            success: function(response){
                $(".tdata").append(response);
            }
        });
    }



});