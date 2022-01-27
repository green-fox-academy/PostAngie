'use strict';
import { Aircraft } from "./aircraft";
import { F16 } from "./f16";
import { F35 } from "./f35";
import { Carrier } from "./carrier";
import os from 'os';

let falcon = new F16;
let eagle = new F16;
let crow = new F35;
let flamingo = new F35;
let hawk = new F35;

let mother = new Carrier (5000, 10000);
let grandmother = new Carrier (4300, 12000);

mother.add(falcon);
mother.add(eagle);
mother.add(crow);
mother.add(flamingo);
mother.add(hawk);

// mother.getStatus();
// console.log(os.EOL);

// mother.fill();
// mother.getStatus();
console.log(os.EOL);



grandmother.getStatus();
console.log(os.EOL);
mother.fight(grandmother);

mother.getStatus();
console.log(os.EOL);
grandmother.getStatus();



