class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title
    }
    get isCheckedOut() {
        return this._isCheckedOut
    }
    get ratings(){
        return this._ratings
    }
    set isCheckedOut(checked) {
        this._isCheckedOut = checked;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut == false ? this._isCheckedOut = true : this._isCheckedOut = false;
    }
    getAverageRating() {
        let average = (this._ratings.reduce(function(curr, acc) {return curr + acc}))/this._ratings.length;
        return average.toFixed(2)
    }
    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
            this.ratings.push(rating);
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author
    }
    get pages() {
        return this._pages
    }

}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director
    }
    get runTime(){
        return this._runTime
    }
}
//Creating a Book instance and testing methods

let historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.ratings);
//Creating a Movie instance and testing methods

let speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating())