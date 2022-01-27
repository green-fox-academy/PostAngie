'use strict';
import { Garden } from "./garden";
import { Plant } from "./plant";
import {Flower} from "./flower";
import {Tree} from "./tree";


let plant1 = new Flower ('yellow');
let plant2 = new Flower ('blue');
let plant3 = new Tree ('purple');
let plant4 = new Tree ('orange');

let myGarden = new Garden
myGarden.add(plant1);
myGarden.add(plant2);
myGarden.add(plant3);
myGarden.add(plant4);

myGarden.showGarden();

myGarden.watering(40);

myGarden.printActualLevel();

myGarden.showGarden();
console.log('---'); 

myGarden.watering(70);

myGarden.printActualLevel();

myGarden.showGarden();