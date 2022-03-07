'use strict';
import { Captain } from './captain';
import { Pirate } from './pirate';
import {Ship} from './ship'

let ship1 = new Ship;
let ship2 = new Ship;
ship1.fillShip();
ship2.fillShip();
console.log('---');

ship1.printShipCondition();
console.log('---');

ship2.printShipCondition();
console.log('---');




ship1.battle(ship2);
console.log(ship1.getWinner(ship2));
console.log('---');
ship1.printShipCondition();
console.log('---');
ship2.printShipCondition();
console.log('---');

