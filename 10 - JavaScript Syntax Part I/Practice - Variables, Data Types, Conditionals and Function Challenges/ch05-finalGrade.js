function finalGrade(number1, number2, number3) {
    let average = (number1 + number2 + number3)/3;
    
    if (number1 < 0 || number2 < 0 || number3 < 0 || number1 > 100 || number2 > 100 || number3 > 100) {
        return 'You have entered an invalid grade.'
    }
    else {
        if (average >= 90) {
            return 'A'
        }
        else if (average >= 80 && average < 90) {
            return 'B'
        }
        else if (average >= 70 && average < 80) {
            return 'C'
        }
        else if (average >= 60 && average < 70) {
            return 'D'
        }
        else {
            return 'F'
        }
    }
}

console.log(finalGrade(80, 44, 90));