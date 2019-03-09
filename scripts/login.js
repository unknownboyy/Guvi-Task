$(document).ready(function(){
    $('#login').click(function(){
        var email = $('#email').val();
        var password = $('#password').val();
        $.post("controller/login.php",{email:email,password:password},function(data,status){
            console.log(data);
            if(data.status == '1'){
                window.location.href='templates/dash.html';
            }
            else{
                alert("Wrong E-mail or Password");
            }
        });
    });
});