const getSleepHours = day => {
    switch (day) {
        case 'sunday':
            return 7
            break;
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 6
            break
        case 'wednesday':
            return 6
            break
        case 'thursday':
            return 8.5
            break
        case 'friday':
            return 7
            break
        case 'saturday':
            return 5.5
            break
    }
}

function getActualSleepHours() {
    const week = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    let actualSleepHours = 0;
    for (day in week) {
        actualSleepHours += getSleepHours(week[day])
    }
    return actualSleepHours
}

const getIdealSleepHours = (idealHours = 7) => idealHours * 7;

let ideal = getIdealSleepHours();
let actual = getActualSleepHours();

const calculateSleepDebt  = () => {
    
    if (actual > ideal) {
        return "Congratulations, you're sleeping more than necessary"
    }
    else if (actual === ideal) {
        return "You're sleeping just the necessary, keep doing it!"
    }
    else {
        return `You need ${ideal - actual} more yours of sleep!`
    }
    

}

console.log(calculateSleepDebt());