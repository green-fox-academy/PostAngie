'use strict';
import { Station } from "./station";
import { Car } from "./car";

let station1 = new Station;
let opel = new Car();
let toyota = new Car();

toyota.printActualGasLevel();
station1.refill(opel);
station1.printInventory();
opel.printActualGasLevel();