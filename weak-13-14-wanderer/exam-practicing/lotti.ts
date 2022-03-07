export function countOccurrences(letters: string[], indexes: number[]): { [key: string]: number } {
    let characters: string[] = [];
    let occurrencesOfCharacters: { [key: string]: number } = {};

    for (const char of letters) {
        for (const num of indexes) {
            if (char === letters[num])
                characters.push(char);
        }
    }
    console.log(characters);
    

    characters.forEach(char => {
        if (occurrencesOfCharacters.hasOwnProperty(char)) {
            occurrencesOfCharacters[char] += 1;
        } else {
            occurrencesOfCharacters[char] = 1;
        }
    })

    return occurrencesOfCharacters;
}

let letters: string[] = ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f", "p"];
let indexes: number[] = [2, 5, 6];

console.log(countOccurrences(letters,indexes));