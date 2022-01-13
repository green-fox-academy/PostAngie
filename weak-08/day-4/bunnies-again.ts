'Use strict';
function calculateTotalEars (bunnies: number): number {
    let oddEars: number = 2;
    let evenEars: number = 3;
    if (bunnies <= 0){
        return 0;
    }
    if (bunnies%2 == 0){
        evenEars += calculateTotalEars(bunnies-2);
    } else {
        oddEars += calculateTotalEars(bunnies-2);
    }
    return  evenEars + oddEars;
}
console.log(calculateTotalEars(8));