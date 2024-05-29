var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var password2Error = document.getElementById('password2-error');
var submitError = document.getElementById('submit-error');

//validate name
function validateName(){
    var name = document.getElementById('su-name').value;

    if(name.length == 0){  
        nameError.innerHTML = 'Username is required';  
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; //instead of using the word 'valid' , we use icon representation
    return true; 
     
}


//validate email
function validateEmail(){
    var email = document.getElementById('su-email').value;

    if(email.length == 0){ 
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){  
        emailError.innerHTML = 'invalid email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    return true; 
}



//validate password
function validatePassword(){
    var password = document.getElementById('su-password').value;
    
    if (password.length <6){
        passwordError.innerHTML = 'Password must be at least 6 characters';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    return true;

}

//validate password2
function validatePassword2(){
    var password = document.getElementById('su-password').value;
    var password2 = document.getElementById('su-password2').value;

    if (password != password2){
        password2Error.innerHTML = 'Password did not match';
        return false;
    }

    password2Error.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    return true; 

}

//validate form
function validateForm(){
    if(!validateName() || !validatePassword() || !validateEmail() || !validatePassword2()){
        submitError.innerHTML = 'Error on signing up! Please check if all inputs are entered correctly!';
        return false;
    }

    alert("Thank you for signing up!");
}



