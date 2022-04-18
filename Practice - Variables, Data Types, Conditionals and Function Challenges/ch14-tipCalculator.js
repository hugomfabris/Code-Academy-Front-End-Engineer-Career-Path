function tipCalculator(quality, total) {
    let qualityArr = ['bad', 'ok', 'good', 'excellent'];
    let tip = 0;
    if (quality == qualityArr[0]) {
        tip = total * 5/100;
    }
    else if (quality == qualityArr[1]) {
        tip = total * 15/100;
    }
    else if (quality == qualityArr[2]) {
        tip = total * 20/100;
    }
    else if (quality == qualityArr[3]) {
        tip = total * 30/100;
    }
    else {
      tip = total * 18/100;
    }


    return tip
}

console.log(tipCalculator('good', 100))

