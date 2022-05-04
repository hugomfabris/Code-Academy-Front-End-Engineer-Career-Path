const isTheDinnerVegan = arr => {
    return arr.every(item => item.source == 'plant')
}

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
const dinner2 = [{name: 'salad', source: 'plant'}, {name: 'potato', source: 'plant'}, {name: 'nuts', source: 'plant'}];

console.log(isTheDinnerVegan(dinner));
console.log(isTheDinnerVegan(dinner2));
