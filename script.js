// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
let allOptions = lowerArray.concat(upperArray, numArray, specArray);

let newPass = [];
let howLong;
var wantLower;
var wantUpper;
var wantNum;
var wantSpec;
let firstChar;
let secondChar;
let thirdChar;
let forthChar;
const randomIndex;
const randomChar;


function getInfo() {
  howLong = prompt("How many characters long should your password be?");
  if (howLong < 8 || > 128) {
    alert("Please choose a length of at least 8 characters and no more than 128 characters.");
  }
  else {
    return number(howLong);
  }
}

function getMore() {
  wantLower = confirm("Include lower case letters?");
  wantUpper = confirm("Include upper case letters?");
  wantNum = confirm("Include numbers?");
  wantSpec = confirm("Include special characters?");   
  // at least one option must be selected, alert if none
  if (!wantLower && !wantUpper && !wantNum && !wantSpec) {
    alert("Please choose at least one character type.");
    }
}

function generatePassword() {
  getInfo();
  getMore();
  if (wantLower && wantUpper && wantNum && wantSpec)  {
    //forcing the password to contain at least one lower, one upper, one num, and one spec, then a random selection of any of them
    let firstChar() = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar() = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    let thirdChar() = numArray[Math.floor(Math.random()*numArray.length)];
    let forthChar() = specArray[Math.floor(Math.random)()*specArray)];
    newPass.push(firstChar, secondChar, thirdChar, forthChar);
    //only run the for loop for the remaining needed characters
    for (let i = 0; i < howLong-4; i++) {
    const randomIndex = Math.floor(Math.random()*allOptions.length);
    const randomChar = allOptions[randomIndex];
      newPass.push(randomChar); 
    }
    return newPass.toString();
  }
}

// function generatePassword() {
//     if (wantLower && wantUpper && wantNum && wantSpec)  {
//     //forcing the password to contain at least one lower, one upper, one num, and one spec, then a random selection of any of them
//     let firstChar() = lowerArray[Math.floor(Math.random()*lowerArray.length)];
//     let secondChar() = upperArray[Math.floor(Math.random()*upperArray.length)]; 
//     let thirdChar() = numArray[Math.floor(Math.random()*numArray.length)];
//     let forthChar() = specArray[Math.floor(Math.random)()*specArray)];
    
//     newPass.push(firstChar, secondChar, thirdChar, forthChar);

//     let allOptions = lowerArray.concat(upperArray, numArray, specArray);
//     //only run the for loop 
//     for (let i = 0; i < howLong-4; i++) {
//       const randomIndex = Math.floor(Math.random()*allOptions.length);
//       const randomChar = allOptions[randomIndex];
//       newPass.push(randomChar); 
//     }
//     return newPass.toString();
//   }
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



