'use strict';


export class Aircraft {
    private maxAmmo: number;
    private baseDamage: number;
    private ammunition: number;
    
    constructor (maxAmmo: number, baseDamage: number) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammunition = 0;
    }

    fight (): number {
        this.ammunition = 0;
        return this.maxAmmo * this.baseDamage
    }

    refillAmmo (incoming: number): number {
        let used: number = 0;
        let unused: number = incoming - used;
        if (incoming > this.getNeededAmmo()) {
            this.ammunition += this.getNeededAmmo();
            used = this.getNeededAmmo();
        } else {
            this.ammunition += incoming;
            used = incoming;
        }
        return unused
    }

    getNeededAmmo (): number {
        return this.maxAmmo - this.ammunition
    }

    getType (): string {
        return this.constructor.name;
    }
    
    getStatus () {
        console.log('Type: ' + this.constructor.name + ', Ammo: ' + this.ammunition
        + ', Base damage: ' + this.baseDamage +  ', All damage: ' + this.getAllDamage());
    }

    isPriority () : boolean {
        return this.getType() === 'F35';
    }

    getAllDamage (): number {
        return this.baseDamage * this.maxAmmo
    }


}