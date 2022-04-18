function howOld(age, year) {
    if (year > 2022) {
        let futureAge = age + (year - 2022);
        return `'You will be ${futureAge} in the year ${year}'`
    }
    else if (year < 2022 - age) {
        let beforeBorn = 2022 - (year + age)
        return `'The year ${year} was ${beforeBorn} years before you were born'`
    }
    else {
        let afterBorn = age - (2022-year);
        return `You were ${afterBorn} in the year ${year}`
    }
}

console.log(howOld(28, 1999));