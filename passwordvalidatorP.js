const readline = require('readline-sync');

let name = readline.question("What is your name? ");
let pwd;

function hasUppercase(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    let char = pwd[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function hasNumber(pwd) {
  for (let i = 0; i < pwd.length; i++) {
    let char = pwd[i];
    if (char >= "0" && char <= "9") {
      return true;
    }
  }
  return false;
}

do {
  pwd = readline.question("Enter password: ");

  if (pwd.length < 8 || !hasUppercase(pwd) || !hasNumber(pwd) ) 
    {
    console.log("Password must be 8+ chars, 1 uppercase, and 1 number. Try again!");
  }

} while (pwd.length < 8 || !hasUppercase(pwd) || !hasNumber(pwd));

console.log("Hello " + name + ", password created successfully!");
  
  
   


