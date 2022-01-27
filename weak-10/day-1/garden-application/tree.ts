'use strict';
import { Plant } from "./plant";


export class Tree extends Plant {
 
    constructor(color: string) {
        super(color, 10, 0.4);
    }
}