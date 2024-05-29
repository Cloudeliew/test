var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

//validate name
function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){  //if input field is empty
        nameError.innerHTML = 'Name is required';  //display 'Name is required' in the id 'name-error'
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; //instead of using the word 'valid' , we use icon representation
    return true; 
     
}

//validate phone
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    
    if(phone.length == 0){  //if phone is empty
        phoneError.innerHTML = 'Phone number is required';  
        return false;
    }

    if (phone.length !==10){  //if length is not equals to 10
        phoneError.innerHTML = 'must be in 10 digits';
        return false;
    }
    
    if(!phone.match(/^[0-9]{10}$/)){  //if user enter anything else than number
        phoneError.innerHTML = 'only numbers are accepted';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; //instead of using the word 'valid' , we use icon representation
    return true; 

}

//validate email
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){ //if email is empty
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){  //if email does not match the regular expression
        emailError.innerHTML = 'invalid email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    return true; 
}


//validate message
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 15; //require at least 10 characters
    var left = required - message.length; //count the required characters minus off the entered characters

    if(left > 0){ //if message is empty
        messageError.innerHTML = left + ' more characters are required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    return true; 

}
//validate form
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.innerHTML = 'Error on submitting! Please check if all inputs are entered correctly!';
        return false;
    }

    alert("Thank you for your message! We will check through your message and get back to you as soon as possible.");
}



