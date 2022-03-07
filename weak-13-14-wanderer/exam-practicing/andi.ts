export function countLetters(strings: string[], numbers: number[]): { [key: string]: number } {

    let lettersToCount: string[] = [];
    let counts: { [key: string]: number } = {};

    numbers.forEach(element => {
        lettersToCount.push(strings[element]);
    });

    for (const s of lettersToCount) {
        if (counts[s]) {
            counts[s]++
        } else {
            counts[s] = 1
        }
    }

    return counts;
}
console.log(countLetters(["p", "h", "f", "t", "e", "z", "p", "g", "f", "f", "p"], [2, 5, 6]))