'use strict';

import { Sharpie } from "./sharpie";

// Create SharpieSet class
// it contains a list of Sharpie, named listOfSharpies
// it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
// it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
// it has a method that removes all unusable Sharpies: removeTrash()

export class SharpieSet {
    private listOfSharpies: Sharpie [] = [];

    add (sharpie: Sharpie) {
        return this.listOfSharpies.push(sharpie);
    }

    countUsable (): number {
       let usableSharpies: number = 0;
            for (let i = 0; i < this.listOfSharpies.length; i++) {
                if (this.listOfSharpies[i].getInkAmount() > 0) {
                usableSharpies ++;
                }
            }
        return usableSharpies;
    }

    removeTrash () {
        return this.listOfSharpies = this.listOfSharpies.filter(ink => ink.getInkAmount() > 0);
    }
}