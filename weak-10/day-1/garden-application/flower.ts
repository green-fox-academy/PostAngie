'use strict';
import { Plant } from "./plant";

export class Flower extends Plant {

    constructor (color: string) {
        super(color, 5, 0.75);
    }
}