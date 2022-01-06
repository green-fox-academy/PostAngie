'use strict';
const fs = require('fs');


// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

function decryptDoubled(filename: string): string {
    try {
        let contentAsArray: string[] = fs.readFileSync(filename, 'utf-8').split("").filter((element: string, i: number) => (i % 2 === 0));
        let contentAsString: string = contentAsArray.join("");
        fs.writeFileSync('output.txt', contentAsString);
        return 'It is done'
    } catch (error) {
        return 'File not found'
    }
}
decryptDoubled('duplicated-chars.txt')