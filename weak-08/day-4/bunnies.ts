'Use strict';
function calculateEars (bunnies: number): number {
    let ears: number = 2;
    if (bunnies <= 0){
        return 0;
    }
    return ears + calculateEars(bunnies-1);
}
console.log(calculateEars(6));
