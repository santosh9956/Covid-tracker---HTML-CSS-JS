// (1.)  ------------ show all the county with their country code --------------
var input = document.querySelector("#phone"),
  errorMsg = document.querySelector("#error-num"),
  validMsg = document.querySelector("#valid-num");

// (2. )--------------------- For number Validation -------------------

// here, the index maps to the error code returned from getValidationError - see readme
var errorMap = [
  " Number is Invalid",
  "Invalid country code",
  "Too Short",
  "Too Long ",
  "Invalid number"
];

// initialise plugin
var iti = window.intlTelInput(input, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

var reset = function () {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};
console.log(" htis is working here");
// on blur: validate
input.addEventListener("blur", function () {
  reset();
  if (input.value.trim()) {
    if (iti.isValidNumber()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      var errorCode = iti.getValidationError();
      errorMsg.innerHTML = errorMap[errorCode];
      errorMsg.classList.remove("hide");
    }
  }
});

// on keyup / change flag: reset
input.addEventListener("change", reset);
input.addEventListener("keyup", reset);
