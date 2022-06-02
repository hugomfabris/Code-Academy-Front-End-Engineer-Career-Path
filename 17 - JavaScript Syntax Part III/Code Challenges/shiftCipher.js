class ShiftCipher  {
    constructor(value) {
        this.value = value
    }
    encrypt(str) {
        let encryptStr = '';
        for (let i = 0; i < str.length; i++) {
            let tempChar = str[i].toUpperCase();
            let tempCharIndex = tempChar.charCodeAt();
            if (tempCharIndex >= 65 && tempCharIndex <= 90) {
                if (tempCharIndex + this.value > 90) {
                    tempCharIndex -= 26;
                    tempChar = String.fromCharCode(tempCharIndex + this.value);
                    encryptStr += tempChar;
                }
                else {
                    tempChar = String.fromCharCode(tempCharIndex + this.value);
                    encryptStr += tempChar;
                }
                
            }
            else {
                encryptStr += tempChar;
            }
            
        }
        return encryptStr
    }
    decrypt(str) {
        let decryptStr = '';
        for (let i = 0; i < str.length; i++) {
            let tempChar = str[i].toLowerCase();
            let tempCharIndex = tempChar.charCodeAt();
            if (tempCharIndex >= 97 && tempCharIndex <= 122) {
                if (tempCharIndex - this.value < 97) {
                    tempCharIndex += 26;
                    tempChar = String.fromCharCode(tempCharIndex - this.value);
                    decryptStr += tempChar;
                }
                else {
                    tempChar = String.fromCharCode(tempCharIndex - this.value);
                    decryptStr += tempChar;
                }
                
            }
            else {
                decryptStr += tempChar;
            }
        }
        return decryptStr

    }

}

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); //returns 'i <3 my puppy'
