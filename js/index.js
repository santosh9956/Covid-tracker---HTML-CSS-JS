'use strict'
// console.log("santo");
const signupData = JSON.parse(window.localStorage.getItem("allValue"));
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginSubmit = document.getElementById('loginSubmit');
const rememberCheck = document.querySelector('.form-check-input');


loginSubmit.addEventListener('click', function(e){
  e.preventDefault();


if(signupData == null || signupData == {}){
    alert("You email does not exist please signup to continue");
}else{
    let eCheck = false;
    let pCheck = false;
    console.log(!eCheck);
    for(let i in signupData){
        const signupPassword = signupData[i].Password;
        if(loginEmail.value == i){
            eCheck = true ;
            if(loginPassword.value == signupPassword){
              alert("please Confirm for the home page");
                const getLoginData = {"email":loginEmail.value ,
                "password":loginPassword.value}
                sessionStorage.setItem("key" , JSON.stringify(getLoginData))
              pCheck = true ;
              window.location.href = "covid.html" ;
            
            break
            }else{
                alert("Your account exit but you enter a wrong password, Please enter a correct password");
            }
        }
    }
    if(!eCheck) alert("your email and password is invalid");
}
});

const getLoggedinData = JSON.parse(window.sessionStorage.getItem("key"));
if(getLoggedinData == {} || getLoggedinData == null){
    console.log("its totally null");
}else{
    // console.log("Its not null");
    loginEmail.addEventListener('click' , function(){
        loginEmail.value = getLoggedinData.email;
        loginPassword.value = getLoggedinData.password;
        rememberCheck.checked = true ; 
    });  
}















