/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  // Your code here
  

  if (!petBreed || !petName ) {
    console.log ('Missing information. Please provide a valid pet.')
  } else if (petBreed === 'dog') {
    console.log (`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log (`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log (`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log (`Not a fan, please take ${petName} and leave.`)
  }else {
    console.log (`What an...interesting pet.`)
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
 //we are taking a starting number and then counting up until but not including our ending number
 for (let i = firstNum; i < secondNum;i++){
 if (firstNum === secondNum || firstNum > secondNum) {
  return 
 }
  console.log(i)
 }
    
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  for(let i = 0; i < str.length; i++){
    
    console.log(`${str[i].toUpperCase()}!`)
  }


};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  const counts = {
    uppercase:0,
    lowercase:0,
    neither: 0

  }

  for (let i = 0; i < str.length; i++){
    const char = str[i]
   if(char >= "a" && char <= "z"){
    counts.lowercase++
   }else if (char >= "A" && char <= "Z"){
    counts.uppercase++
   }else {
    counts.neither++
   }
  }

  return counts
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
  const greedyNames = []
for (let i = 0; i < gnomes.length; i++) {
  if(gnomes[i].stolenDecorations.length > 1){
    greedyNames.push(gnomes[i].name)
  }
}

return greedyNames
};

const sumBetweenIndexes = (nums, start = 0, end = nums.length) => {

  if (start < 0) {
    start = 0;
  }

 
  if (end > nums.length) {
    end = nums.length;
  }

  
  if (start === end) {
    return nums[start];
  }

  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += nums[i];
  }

  return sum;
}

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
