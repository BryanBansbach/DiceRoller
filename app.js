// Dice Roller
let rolledDice = [];
const dice = (diceType, diceNumber) => {
  if (diceType === 4 || diceType === 6 || diceType === 8 || diceType === 10 || diceType === 12 || diceType === 20) {
    if (typeof diceNumber === 'undefined') {
      finalDice = Math.floor(Math.random() * diceType) + 1;
      rolledDice.push(finalDice);
      console.log(rolledDice);
      return finalDice
    } else {
      let diceC = 0;
      for (let i = 1; i <= diceNumber; i++) {
        let diceR = (Math.floor(Math.random() * diceType) + 1);
        rolledDice.push(diceR);
        console.log(rolledDice);
        diceC = diceC + diceR;
      }
      console.log(diceC);
      return diceC;
    }
  } else {
    return 'You must choose the right type of dice (4, 6, 8, 10, 12, 20)';
  }
}

// Dice UI
// Grab all related classes from HTML file
let diceCounter = document.querySelector('.dice-counter');
let diceMinus = document.querySelector('.dice-minus');
let dicePlus = document.querySelector('.dice-plus');
let rollDice = document.querySelector('.roll-dice');
let diceResults = document.querySelector('.dice-results');
let diceAllRolls = document.querySelector('.dice-all-rolls');

// Diplay Counter
let currentCount = 1; // Set up display counter
diceCounter.innerHTML = currentCount;

// Dice Plus
dicePlus.addEventListener('click',()=> {
  currentCount++;
  diceCounter.innerHTML = currentCount;
});

// Dice Minus
diceMinus.addEventListener('click',()=> {
  if (currentCount > 1) {
    currentCount--;
    diceCounter.innerHTML = currentCount;
  }
});

// Grab Selected Dice

function getDiceSelection(ele) {
  let diceSelection = document.getElementsByName('dice-selection');

  for (i = 0; i < diceSelection.length; i++) {
    if (diceSelection[i].checked) {
      return Number(ele = diceSelection[i].value);
    }
  }
};

/* Clicking on Roll the Dice will run the dice function and display results
*/
rollDice.addEventListener('click',()=> {
  currentDiceSelection = getDiceSelection();
  diceResults.innerHTML = dice(currentDiceSelection,currentCount);
  diceAllRolls.innerHTML = '(' + rolledDice.join(') (') + ')';
  rolledDice = [];
});
