var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var password2Error = document.getElementById('password2-error');
var submitError = document.getElementById('submit-error');

//validate username
function validateName(){
    var name = document.getElementById('si-name').value;

    if(name.length == 0){  
        nameError.innerHTML = 'Username is required';  
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; //instead of using the word 'valid' , we use icon representation
    return true; 
     
}


//validate password
function validatePassword(){
    var password = document.getElementById('si-password').value;
    
    if (password.length <6){
        passwordError.innerHTML = 'Password must be at least 6 characters';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    return true;

}


//validate form
function validateForm(){
    if(!validateName() || !validatePassword()){
        submitError.innerHTML = 'Error on signing in! Please check if all inputs are entered correctly!';
        return false;
    }

    alert("Sign in successful!");
}



