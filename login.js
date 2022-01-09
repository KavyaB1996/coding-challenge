
 function validate(){
    var error_m = document.getElementById("error_m");
    var email = document.getElementById("inputEmail4");

    let regexp_m = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    //declare let and var inside fn bcz they wont sometimes be accessed inside fn when outside fn


     // Validation for email
     if(regexp_m.test(email.value))
    {
        return true;
    }
    else
    {
        error_m.innerHTML = "Invalid Email entered, sample abcd@xyz.com or abcd@xyz.co.in";
        error_m.style.color = "red";
        return false;
    }

    
}









 
