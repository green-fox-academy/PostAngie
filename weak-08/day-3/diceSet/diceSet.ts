'use strict';

function getRandomRoll (): number {
  return Math.floor(Math.random() * 6 + 1)
}

class DiceSet {
  private dice: number[] = [];
  readonly numOfDices: number = 6;

  roll(): number[] {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(getRandomRoll());
    }
    return this.dice;
  }

  reroll(index?: number): void {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = getRandomRoll();
      }
    } else {
      this.dice[index] = getRandomRoll();
    }
  }

  getCurrent(index?: number): number[] | number {
    if (index === undefined) {
      return this.dice;
    } else {
      return this.dice[index];
    }
  }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

let diceSet = new DiceSet();
diceSet.roll();
console.log(diceSet.getCurrent());

for (let i = 0; i < diceSet.numOfDices; i++) {
  if (diceSet.getCurrent(i) === 6) {
    continue;
  } else {
    for (; ;) {
      diceSet.reroll(i);
      if (diceSet.getCurrent(i) === 6) {
        break;
      }
    }
  }
}
console.log(diceSet.getCurrent());