$(document).ready(function(){
    $('#signup').click(function(){
        var email = $('#email').val();
        var password = $('#password').val();
        $.post("../controller/signup.php",{email:email,password:password},function(data,status){
            console.log(data.status);

            if(data.status == '1'){
                alert("Successfully Signed Up !!\nRedirecting You to Login Page...");
                setTimeout(function(){
                    window.location.href = '../index.html';
                },1500);
            }
            else{
                alert("Error While Signup");
            }
        });
    });
});