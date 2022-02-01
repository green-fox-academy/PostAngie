'use strict';

export interface Flyable {
    maxHeightOfFlying: number;
    land (): void;
    fly (): void;
    takeOff (): void;
    setMaxHeightOfFlying (height: number): void;
    getMaxHeightOfFlying (): number;
}