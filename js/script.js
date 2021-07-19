'use strict'

function initAutocomplete() {
    const input = document.querySelector(".pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
}

// document.write("santohs");

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const signupEmail  = document.getElementById('signupEmail');
const signPassword = document.getElementById('signPassword');
const signConfirmPassword = document.getElementById('signConfirmPassword');
const birthDate = document.getElementById('birthdate');
const address = document.getElementById('address');
const mobileNumber = document.getElementById('phone');
const submit = document.getElementById('signupsubmit');


const strongPassword = function(){
    const signPassValue = signPassword.value ;
    console.log(signPassValue , "lkfjlaksfdslkfjkd");
    if( signPassValue.length > 8 && signPassValue.length <= 16){
        if(signPassValue.match(/[A-Z]/) && signPassValue.match(/[a-z]/) && signPassValue.match(/\d+/)){
            if (signPassValue.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ){
                ageCalculator();
            }else{
                alert("please include a special character also :)")
            }  
        }else{
            alert("you password is not strong Please include a UPPERCASE,lowercase , number and a special character");
        }
    }else{
        alert("please input a password between 8 - 16 character and must contain a number,letter and special character")
    }
    if(signPassValue != signConfirmPassword.value){
        alert("your password and confirm password are not same");
    }
}

// ---------------------------- age calculator ------------------------------ 
const ageCalculator = function(){
    const myBirthDate = new Date(birthDate.value); 
    const birthYear = myBirthDate.getFullYear();
    var currDate = new Date();
    console.log(currDate);
    var currYear = currDate.getFullYear();
    // console.log( currYear, "santoshbirthday");

    if(currYear < birthYear){
        alert("please choose your valid birth date")
    }else{
        if(currYear-birthYear < 18){
            alert("you are not eligible to signup , you should be above 18 to signup this page !");
        }else if(currYear-birthYear > 100){
            alert("You are too long You are not able to signup");
          
        }else{
          duplicteMailId();
        }
    }
}


// ------------ Email - validate- -----
const signupData = JSON.parse(window.localStorage.getItem("allValue"));
const duplicteMailId = function(){

  console.log(signupData , "santosh");
  // for(let i=0 ;i<allItems.length; i++){
    const newEmail = signupEmail.value ;
    const mobilenumber = Number(mobileNumber.value)
    if(signupData == null || signupData == {}){
      // console.log(signupData);
      // console.log("null portion");
      var allItems = JSON.parse(window.localStorage.getItem("allValue"));
      const mainLocal = {...allItems} ; 
      // console.log(mainLocal);
      const tempD = { Fname:firstName.value, 
                      Lname:lastName.value,
                      Email:newEmail,   
                      Password:signPassword.value ,
                      Birthdate:birthDate.value,
                      Address : address.value,
                    Mobilenumber:mobilenumber
                }
      mainLocal[newEmail]=tempD;
      localStorage.setItem("allValue" , JSON.stringify(mainLocal))
      window.location.href = "index.html" ;
    }else if(newEmail in signupData || mobilenumber in signupData){
      alert("This email or mobile number  already exits" );
    }else{
      console.log("else portion");
      var allItems = JSON.parse(window.localStorage.getItem("allValue"));
      const mainLocal = {...allItems} ; 
      const newEmail = signupEmail.value ;
      const mobilenumber = Number(mobileNumber.value)
      const tempD = { Fname:firstName.value, 
                    Lname:lastName.value,
                    Email:newEmail,   
                    Password:signPassword.value ,
                    Birthdate:birthDate.value,
                    Address : address.value,
                    Mobilenumber:mobilenumber
                }
      mainLocal[newEmail]=tempD;
      localStorage.setItem("allValue" , JSON.stringify(mainLocal));
      window.location.href = "index.html" ;
}
};

submit.addEventListener('click' , function(e){
    e.preventDefault();
    strongPassword();
})










