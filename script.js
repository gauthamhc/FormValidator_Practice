const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Check Length

function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `Minimum ${min} characters is required`);
  } else if (input.value.length > max) {
    showError(input, `Maximum ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `Minimum ${min} characters is required`);
  } else if (input.value.length > max) {
    showError(input, `Maximum ${max} characters`);
  } else {
    showSuccess(input);
  }
}



//checkRequired function

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getId(input)} is not defined`);
    } else {
      showSuccess(input);
    }
  })
}

function getId(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;
}


//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success 
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Valid email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

//function to check password
function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Password do not match'); 
  }
}

//event Listners
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 12);
  checkLength(password, 6, 12);
  checkEmail(email);
  checkPasswordMatch(password, password2);
 
});