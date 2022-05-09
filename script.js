var generateBtn = document.querySelector("#generate");
var specialchar = ["#", "$", "%", "&", "*", "=", "@", "~"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var bigLetters = [ "A", "B","C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P","Q","R","S", "T", "U", "V","W", "X","Y","Z",
];


var LowerCaseLetters = bigLetters.map((array) => {
  return array.toLowerCase();
});

var all = LowerCaseLetters.concat(bigLetters, specialchar, numbers);

var userIn = prompt("How many character would you like to get for your password?");
if (isNaN(userIn)) {
  alert("Only numbers please.");
} else {
  var userInputSpec = prompt("Would you like special characters?");
}


function generatePassword() {
  var password = "";
  for (var i = 0; i < userIn; i++) {
    password += all[Math.floor(Math.random() * all.length)];
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);
