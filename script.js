// Assignment code here
var password=document.getElementById(".password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~qwertyuiopasdfghjklzxcvbnm");
  var passwordLenght = 8;
  var chars = "  "

  
  passwordText.value = password;
  for (var i = 0; i <= passwordLenght; i++ ) {
    var randomNumber = Math.floor(math.random() * chars.length); 
    password += chars.substring(randomNumber, randomNumber +1);
    return;

  }

}

// Add event listener to generate button

password.addEventListener("click", writePassword);

