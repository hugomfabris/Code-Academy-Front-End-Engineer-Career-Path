let input = 'Mewpa e Mewsa seus amigos';
const vowels = ['A', 'E', 'I', 'O', 'U'];
let resultArray = [];
let upperInput = input.toUpperCase();
for (let i = 0; i < upperInput.length; i++) {
  if (vowels.indexOf(upperInput[i]) !== -1) {
    resultArray.push(upperInput[i])
  }
}
for (let j = 0; j < resultArray.length; j++) {
  if (resultArray[j] === 'E') {
    resultArray[j] = 'EE'
  }
  else if (resultArray[j] === 'U') {
    resultArray[j] = 'UU'
  }
}
resultArray = resultArray.join('');
console.log(resultArray);
