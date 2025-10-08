const readlineSync = require('readline-sync');

const userName = readlineSync.question("Enter Your User-Name: ");
const userPwd = readlineSync.question("Enter Your Password: ");

console.log("REMINDER:\n 1. The password must be at least 8 characters long.\n 2. The password must contain at least one uppercase letter.\n 3. The password must contain at least one number.");

let isValid = false;

if (userPwd.length >= 8) {
    let hasNumber = false;
    let hasUpper = false;

    for (let i = 0; i < userPwd.length; i++) {
        let char = userPwd[i];
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        if (char >= 'A' && char <= 'Z') {
            hasUpper = true;
        }
    }

    if (hasNumber && hasUpper) {
        console.log("Valid Password!");
        isValid = true;
    } else {
        console.log("Your password is invalid! check password has at least one uppercase letter and one number.");
    }
} else {
    console.log("Your password is invalid! Password have atleast 8 characters long.");
}

