function calculateWeight(earthWeight, planet) {
    
    let weight = 0;
    let planetArr = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'];
    
    if (typeof(earthWeight) !== 'number' || typeof(planet) !== 'string') {
        return 'Please enter with valid data type'
    }
    else if (planetArr.indexOf(planet) === -1) {
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
    else {
        if (planet === planetArr[0]) {
            weight = earthWeight * 0.378;
            return weight
        }
        else if (planet === planetArr[1]) {
            weight = earthWeight * 0.907;
            return weight
        }
        else if (planet === planetArr[2]) {
            weight = earthWeight * 0.377
            return weight
        }
        else if (planet === planetArr[3]) {
            weight = earthWeight * 2.36
            return weight
        }
        else if (planet === planetArr[4]) {
            weight = earthWeight * 0.916
            return weight
        }
    }
}

console.log(calculateWeight(71, 'Mars'));