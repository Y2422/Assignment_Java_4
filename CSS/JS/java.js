var password1Input = document.getElementById('password1');
var mail1Input = document.getElementById('mail1');
var mail2Input = document.getElementById('mail2');
var password2Input = document.getElementById('password2');
var logOutBtn= document.getElementById('logOut');
var nameInput = document.getElementById('name');
var logInBtn= document.getElementById('loginBtn');
var sucessBtn= document.getElementById('successfulSignBtn');
var signBtn= document.getElementById('signBtn');


var usersList= [];
var newUserData;


var homePage= document.querySelector('.home');

var logIn = document.querySelector('.login');

var signUpPage= document.querySelector('.signingUpPage')

if(localStorage.getItem('data') !== null){
    usersList= JSON.parse(localStorage.getItem('data'))
}
    
var mailRegex= /.@[\w]{4,10}(.com)$/i;

logInBtn.addEventListener('click',function(e){
    e.stopPropagation()
    
})
logInBtn.addEventListener('click',function(e){
    e.stopPropagation()
    
})

/*function newUsersRegistration(){
    var newUserData={
        password: passwordInput.value,
        mail: mailInput.value,
        name:nameInput?.value,

    }
    if(!mailRegex.test(mailInput.value)){
        alert('Please enter a valid mail')
    }else if(localStorage.getItem('data').includes(newUserData.mail)){
        alert('this mail is already registered, please sign in')

    }else{
    usersList.push(newUserData)
    localStorage.setItem('data', JSON.stringify(usersList))
}
console.log(newUserData)

}


/*function getInput() {

    var userData={
        password: passwordInput.value,
        mail: mailInput.value,
        name:nameInput?.value,

    }
   newUserData

    if(!mailRegex.test(mailInput.value)){

        alert('Please enter a valid mail')
       
    }else if(!localStorage.getItem('data').includes(newUserData.mail)){
        alert('this mail is not registered, Please sign up')

    }
    else{
    homePage.classList.remove('d-none')
    logIn.classList.add('d-none')
    clear()
    console.log(usersList)
    
}
}*/


function clear(){
    password.value='';
    mail.value='';
}




logOutBtn.addEventListener('click', function(e){
    homePage.classList.add('d-none')
    logIn.classList.remove('d-none')

})



function usersRegistration( password,mail, name){
    var newUserData= {
        password: password.value,
        mail: mail.value,
        name:name?.value,

    }
    if(!mailRegex.test(mail.value)){
        alert('Please enter a valid mail')

    }else{
    console.log('great')
    
    }
    return newUserData
}
function SignUp(){
    usersRegistration(password2Input,mail2Input,nameInput)
    if(usersList.includes(mail2Input.value)){
        alert('this mail is already registered, please sign in')

    }else{
    usersList.push(usersRegistration[newUserData])

    localStorage.setItem('data', JSON.stringify(usersList))
}
clear()
sucessBtn.addEventListener('click', function(e){
    alert('success')
})
signUpPage.classList.remove('d-none')
homePage.classList.add('d-none')
logIn.classList.add('d-none')
console.log(newUserData)

}

function UserSignIn(){
    usersRegistration(password1Input,mail1Input)
    if(!usersList.includes(mail1Input.value)){
        alert('this mail is not registered, Please sign up')
    }
   /* else{
    homePage.classList.remove('d-none')
    logIn.classList.add('d-none')
    
}*/
clear()
    console.log('ok')
}

