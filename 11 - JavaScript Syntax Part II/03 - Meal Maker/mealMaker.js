//First we create a menu object
let menu  = {
  _meal: '',
  _price: 0,
//Inside of the menu, we'll have 2 setters to set the meal and the price
  set meal(mealToCheck) {
      if (typeof(mealToCheck) == "string") {
        this._meal = mealToCheck;
      }
      else {
          console.log("Please enter with a valid meal");
      }
  },

  set price(priceToCheck) {
      if (typeof(priceToCheck) == "number") {
         this._price = priceToCheck; 
      }
      else {
        console.log("Please enter with a valid number");
      }
  },
//Finally, we'll add a getter to check if the meal and price values are truthy and log Today's Special meal
  get todaysSpecial() {
      if (this._meal && this._price) {
          return `Today we have Special ${this._meal} for $${this._price} dollars!`
      }
      else {
          return "Meal or price was not set correctly!"
      }
  }
}

menu.meal = 'Pato';
menu.price = 55;

console.log(menu.todaysSpecial);


