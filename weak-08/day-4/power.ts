'Use strict';
function calculatePower (base: number, n: number): number {
    if (n == 1){
        return base;
    }
    return base * (calculatePower(base,n-1));
}
console.log(calculatePower(3, 4));
