const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const compareTeeth = (speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth

const sortSpeciesByTeeth = arr => {
    return arr = arr.sort((speciesObj1,speciesObj2) => speciesObj1.numTeeth - speciesObj2.numTeeth)
}


console.log(sortSpeciesByTeeth(speciesArray))



