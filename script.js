// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "=", "?", "@", "|", "~"];
var allOptions = lowerArray.concat(upperArray, numArray, specArray);
var lowUpNum = lowerArray.concat(upperArray, numArray);
var lowUpSpec = lowerArray.concat(upperArray, specArray);
var lowNumSpec= lowerArray.concat(numArray, specArray);
var upNumSpec = upperArray.concat(numArray, specArray);
var lowUp = lowerArray.concat(upperArray);
var lowNum = lowerArray.concat(numArray);
var lowSpec = lowerArray.concat(specArray);
var upNum = upperArray.concat(numArray);
var upSpec = upperArray.concat(specArray);
var numSpec = numArray.concat(specArray);


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
let randomIndex;
let randomChar;


function getInfo() {
  howLong = prompt("How many characters long should your password be?");
  if (howLong < 8 || howLong > 128) {
    alert("Please choose a length of at least 8 characters and no more than 128 characters.");
  }
  else {
    return Number(howLong);
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
    let firstChar = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    let thirdChar = numArray[Math.floor(Math.random()*numArray.length)];
    let forthChar = specArray[Math.floor(Math.random()*specArray.length)];
    newPass.push(firstChar, secondChar, thirdChar, forthChar);
    //only run the for loop for the remaining needed characters
    for (let i = 0; i < howLong-4; i++) {
      let randomIndex = Math.floor(Math.random()*allOptions.length);
      let randomChar = allOptions[randomIndex];
      newPass.push(randomChar); 
    }
    return newPass.toString(); 
  }
  else if(wantLower && wantUpper && wantNum) {
    let firstChar = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    let thirdChar = numArray[Math.floor(Math.random()*numArray.length)];
    newPass.push(firstChar, secondChar, thirdChar);
    for (let i = 0; i < howLong-3; i++) {
      let randomIndex = Math.floor(Math.random()*lowUpNum.length);
      let randomChar = lowUpNum[randomIndex];
      newPass.push(randomChar); 
      }
      return newPass.toString(); 
  }

  else if(wantLower && wantUpper && wantSpec) {
    let firstChar = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    let thirdChar = specArray[Math.floor(Math.random()*specArray.length)];
    newPass.push(firstChar, secondChar, thirdChar);
    for (let i = 0; i < howLong-3; i++) {
      let randomIndex = Math.floor(Math.random()*lowUpSpec.length);
      let randomChar = lowUpSpec[randomIndex];
      newPass.push(randomChar); 
      }
      return newPass.toString(); 
  }

  else if(wantLower && wantNum && wantSpec) {
    let firstChar = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar = numArray[Math.floor(Math.random()*numArray.length)];
    let thirdChar = specArray[Math.floor(Math.random()*specArray.length)];
    newPass.push(firstChar, secondChar, thirdChar);
    for (let i = 0; i < howLong-3; i++) {
      let randomIndex = Math.floor(Math.random()*lowNumSpec.length);
      let randomChar = lowNumSpec[randomIndex];
      newPass.push(randomChar); 
      }
      return newPass.toString(); 
  }

  else if(wantUpper && wantNum && wantSpec) {
    let firstChar = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    let secondChar = numArray[Math.floor(Math.random()*numArray.length)];
    let thirdChar = specArray[Math.floor(Math.random()*specArray.length)];
    newPass.push(firstChar, secondChar, thirdChar);
    for (let i = 0; i < howLong-3; i++) {
      let randomIndex = Math.floor(Math.random()*upNumSpec.length);
      let randomChar = upNumSpec[randomIndex];
      newPass.push(randomChar); 
      }
      return newPass.toString(); 
  }
  else if(wantLower && wantUpper) {
    let firstChar = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    newPass.push(firstChar, secondChar);
    for (let i = 0; i < howLong-2; i++) {
      let randomIndex = Math.floor(Math.random()*lowUp.length);
      let randomChar = lowUp[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }

  else if(wantLower && wantNum) {
    let firstChar = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar = numArray[Math.floor(Math.random()*numArray.length)];
    newPass.push(firstChar, secondChar);
    for (let i = 0; i < howLong-2; i++) {
      let randomIndex = Math.floor(Math.random()*lowNum.length);
      let randomChar = lowNum[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }
  
  else if(wantLower && wantSpec) {
    let firstChar = lowerArray[Math.floor(Math.random()*lowerArray.length)];
    let secondChar = specArray[Math.floor(Math.random()*specArray.length)];
    newPass.push(firstChar, secondChar);
    for (let i = 0; i < howLong-2; i++) {
      let randomIndex = Math.floor(Math.random()*lowSpec.length);
      let randomChar = lowSpec[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }

  else if(wantUpper && wantNum) {
    let firstChar = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    let secondChar = numArray[Math.floor(Math.random()*numArray.length)];
    newPass.push(firstChar, secondChar);
    for (let i = 0; i < howLong-2; i++) {
      let randomIndex = Math.floor(Math.random()*upNum.length);
      let randomChar = upNum[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }

  else if(wantUpper && wantSpec) {
    let firstChar = upperArray[Math.floor(Math.random()*upperArray.length)]; 
    let secondChar = specArray[Math.floor(Math.random()*specArray.length)];
    newPass.push(firstChar, secondChar);
    for (let i = 0; i < howLong-2; i++) {
      let randomIndex = Math.floor(Math.random()*upSpec.length);
      let randomChar = upSpec[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }

  else if(wantNum && wantSpec) {
    let firstChar = numArray[Math.floor(Math.random()*numArray.length)];
    let secondChar = specArray[Math.floor(Math.random()*specArray.length)];
    newPass.push(firstChar, secondChar);
    for (let i = 0; i < howLong-2; i++) {
      let randomIndex = Math.floor(Math.random()*numSpec.length);
      let randomChar = numSpec[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }
  
  else if(wantLower) {
    for (let i = 0; i < howLong; i++) {
      let randomIndex = Math.floor(Math.random()*lowerArray.length);
      let randomChar = lowerArray[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }

  else if(wantUpper) {
    for (let i = 0; i < howLong; i++) {
      let randomIndex = Math.floor(Math.random()*upperArray.length);
      let randomChar = upperArray[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }

  else if(wantNum) {
    for (let i = 0; i < howLong; i++) {
      let randomIndex = Math.floor(Math.random()*numArray.length);
      let randomChar = numArray[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }

  else if(wantSpec) {
    for (let i = 0; i < howLong; i++) {
      let randomIndex = Math.floor(Math.random()*specArray.length);
      let randomChar = specArray[randomIndex];
      newPass.push(randomChar); 
      }
    return newPass.toString(); 
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



