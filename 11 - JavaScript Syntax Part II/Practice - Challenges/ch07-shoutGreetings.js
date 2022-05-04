const shoutGreetings = arr => arr = arr.map(item => {
    if (typeof(item) != 'string') {
        console.log("Invalid data inside the given array")
    }
    else {
        return `${item}!`.toUpperCase()
    }
})

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings))

