'use strict';
import {Bird} from './bird';
import {Helicopter} from './helicopter';
import { Flyable } from './flyable';

// Create a Flyable interface: flyable.ts
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class: vehicle.ts
// it should have at least 3 fields: ok.
// Extend Helicopter class from Vehicle: ok
// implement your Flyable interface: ok
// Extend Bird from your abstract Animal class (zoo exercise): ok
// implement your Flyable interface: ok

let bird = new Bird('Flamingo');
let bell = new Helicopter;

bell.land();
bird.land();

bell.fly();
bird.fly();