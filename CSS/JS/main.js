var nameInput = document.getElementById('userName');
var RegistrationMailInput = document.getElementById('registrationMail');
var signInMailInput = document.getElementById('signInMail');
var passwordInput = document.getElementsByTagName('password');
var logoutBtn= document.querySelector('.logoutBtn');
var noaccountSignUpBtn= document.querySelector('.noaccountSignUp');
var existinguserSignInBtn= document.querySelector('.existinguserSignIn');
var homepage= document.querySelector('.homepage');
var signInPage= document.querySelector('.signInPage');
var signUpPage= document.querySelector('.signUpPage');
var welcome= document.querySelector('.welcomemsg');



var ExistingUsers=[]

var usersArray= Array.from(ExistingUsers)
function mailValidation(element){
    var regex={
        registrationMail: /^[A-Za-z].{2,15}(.com)$/i,
        signInMail: /^[A-Za-z].{2,15}(.com)$/i,
        
    }

    if(!regex[element.id].test(element.value)){
        element.nextElementSibling.classList.remove('d-none')
    }else{
        element.nextElementSibling.classList.add('d-none')
 
    }
}

var stored= JSON.parse(localStorage.getItem('storedData'));

function userRegistration(){
    var userInput={
        userName: nameInput.value,
        mail: RegistrationMailInput.value,
        password: passwordInput.value,
    }

    if(localStorage.getItem('storedData').includes(RegistrationMailInput.value)){
        RegistrationMailInput.previousElementSibling.classList.remove('d-none')
    }else{
        ExistingUsers.push(userInput)
        RegistrationMailInput.previousElementSibling.classList.add('d-none')
localStorage.setItem('storedData', JSON.stringify(ExistingUsers))

    }
console.log(ExistingUsers)

}


function signIn(){
    if(!localStorage.getItem('storedData').includes(signInMailInput.value)){
        signInMailInput.previousElementSibling.classList.remove('d-none')
    }else{
        signInMailInput.previousElementSibling.classList.add('d-none')

}
console.log('hi')
homepage.classList.remove('d-none')
signInPage.classList.add('d-none')
document.getElementById('welcome').innerHTML= ` <h2 class= text-primary> welcome + ${userName} </h2> `

}

logoutBtn.addEventListener('click', function(e){
    homepage.classList.add('d-none')
    signInPage.classList.remove('d-none')

})

noaccountSignUpBtn.addEventListener('click', function(e){
    signInPage.classList.add('d-none')
    signUpPage.classList.remove('d-none')

})

existinguserSignInBtn.addEventListener('click',function(e){
    signUpPage.classList.add('d-none')
    signInPage.classList.remove('d-none')

})

