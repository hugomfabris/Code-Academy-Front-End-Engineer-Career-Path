const factorial = num => {
  if (num == 0 || num == 1) {
    return 1
  }
  else {
      let result = num * factorial(num - 1);
      return result
  }
}

console.log(factorial(7));