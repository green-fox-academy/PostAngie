'Use strict';
import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
print(dominoes)

let dominoArray: number[][] = [];

for (let i=0; i<dominoes.length; i++){
    let list: number [] = dominoes[i].getValues()
    dominoArray.push(list)
}
console.log(dominoArray);

// innentől nincs még kész - visszatérek majd rá. Azt terveztem, hogy vagy array-jel dolgozom, azt rendezem valahogy
// sorba vagy az objecteket rendezem és utána csinálok belőle array-t...

// for (let i = 0; i < dominoArray.length; i++) {
//     if (dominoArray[i][1] === dominoArray[i+1][0]) {
//         continue
//     } else {
        
//     }
    
// }


// print(dominoes);