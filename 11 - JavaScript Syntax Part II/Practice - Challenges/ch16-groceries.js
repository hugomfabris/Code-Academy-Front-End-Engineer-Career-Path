const groceries = arr => {
    let resultArr = []
    arr.map(obj => {
        resultArr.push(obj.item)
    })
    if (resultArr.length > 1) {
        resultArr.splice(resultArr.length - 1, 0, 'and');
        let commaSep = resultArr.slice(0, resultArr.length - 2).join(', ');
        let andLast = resultArr.slice(resultArr.length - 2).join(' ');
        let result = commaSep + ' ' + andLast;
        return result
    }
    else {
        return resultArr.join('')
    }
    

}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
console.log(groceries( [{item: 'Cheese Balls'}] ));


