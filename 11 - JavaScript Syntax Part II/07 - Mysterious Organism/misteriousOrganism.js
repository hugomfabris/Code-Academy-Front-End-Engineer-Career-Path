// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Here we use a factory function to categorize species into specie's number and DNA (which will be the parameters)
const pAequorFactory = (specimenNum , dna) => { 
  return {
    specimenNum: specimenNum,
    dna: dna,
    //The mutate method will randomly choose a base in the specie and and change it's value
    mutate() {
      mutateDna = this.dna.slice();
      let randomIndex = Math.floor(Math.random() * 15);
      let choosenBase = mutateDna[randomIndex];
      //The target function is used here to ensure that the mutated base won't be the same by using recursion
      let target = () => {
        let result = returnRandBase();
        if (result == choosenBase) {
          target()
        }
        else {
            return result
        }

        return result
       }  
       mutateDna.splice(randomIndex, 1, target())   
       return  mutateDna
    }
  }
}


let ourDna = pAequorFactory(1, [
  'T', 'C', 'A', 'C',
  'T', 'A', 'A', 'A',
  'T', 'A', 'G', 'T',
  'C', 'C', 'T'
]);

console.log(ourDna);

console.log(ourDna.mutate());
