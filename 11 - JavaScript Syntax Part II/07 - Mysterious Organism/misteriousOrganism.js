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
    },
    compareDNA(otherDna) {
      let count = 0;
      for (let i = 0; i < dna.length; i++) {
        if (otherDna['dna'][i] === dna[i]) {
          count += 1;
        }
      }
      let percentage = Math.round(count / dna.length * 100);

      return `The species has ${percentage}% in common`
    },
    willLikelySurvive() {
      let dnaCopy = dna.slice();
      return dnaCopy.filter(item => item == 'C' || item == 'G').length >= 9
    }
  }
}

//Generate 30 species

let species = [];
let i = 1
while (species.length <= 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive()) {
    species.push(temp);
    i++
  }
}

console.log(species);
