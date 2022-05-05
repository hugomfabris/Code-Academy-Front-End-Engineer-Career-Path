const subLength = (str, char) => {
    //First we define our function scope values
    let splitStr = str.split('')
    let charArr = []
    let subArr = []
    let indexes = []
    //Here we filter que arr made of characters to find out how many occurrences of char we have and store in them in CharArr
    splitStr.filter(item => {
        if (item == char) {
            charArr.push(char)
        }
    })

    if (charArr.length == 2) {
        //In case of 2 occurrences, we'll loop through splitStr tostore the indexes 
        for (let i = 0; i < splitStr.length; i++) {
            if (splitStr[i] == char) {
                indexes.push(i)
            }
        }
        //Now we will use the indexes to slice the part we want in the initial string and return it
        subArr = splitStr.slice(indexes[0], indexes[1] + 1)
        return subArr.length
    }
    else {
        return 0
    }
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0
