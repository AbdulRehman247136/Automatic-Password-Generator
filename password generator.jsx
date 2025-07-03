

//TH MAIN FUNCTION WHICH GENERATES THE PASSWORD
function generatePassword(length, includeLowercase, 
    includeNumbers, includesymbols, includeUppercase){
        //ALLOWED CHARACTERS FOR THE PASSWORD
        const LowercaseCHARS = "abcdefghijklmnopqrstuvwxyz";
        const UppercaseCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const umbersCHARS = '0123456789';
        const symbolsCHARS = '!@#$%^&*()_+[]{}|;:,.<>?';
        let allowedchars = "";
        let password = "";
        //CHECKING WHICH CHARACTER TYPES ARE INCLUDED

        allowedchars += includeLowercase ? LowercaseCHARS : " ";
        allowedchars += includeUppercase ? UppercaseCHARS : " ";
        allowedchars += includeNumbers ? umbersCHARS : " ";
        allowedchars += includesymbols ? symbolsCHARS : " ";

        if(length<=0){
            return'(password length must be at least 1)';

        }
        if(allowedchars.length === 0){
            return '(At least one character type must be selected)';
        }
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedchars.length);
            password += allowedchars[randomIndex];
        }
        return password;


}


const passwordlength = 10;
const includeUppercase = true; // Set to true to include uppercase letters
const includeLowercase = true;
const includeNumbers = true;
const includesymbols = true;
//FUNCTION CALL
const password = generatePassword(passwordlength, includeLowercase,
     includeNumbers,
     includesymbols, includeUppercase);
     //PRINTING THE GENERATED PASSWORD
     console.log(`Generated Password: ${password}`);
