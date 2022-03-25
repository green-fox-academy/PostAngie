//    1. store the element that says 'The King' in the 'king' variable.
//    console.log it.
let king = document.getElementById('b325');
console.log(king);

//    2. store 'The Businessman' and 'The Lamplighter'
//    in the 'businessLamp' variable.
//    console.log each of them.
let businessLamp = document.querySelectorAll('.big');
console.log(businessLamp);


//    3. store 'The King' and 'The Conceited Man'
//    in the 'conceitedKing' variable.
//    alert them one by one.
let conceitedKing = document.getElementsByClassName("container");
console.log(conceitedKing);
for (element of conceitedKing){
    window.alert(element.innerText);
}


//    4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//    in the 'noBusiness' variable.
//    console.log each of them.
let noBusiness = document.getElementsByTagName('div');
console.log(noBusiness);
for (element of noBusiness){
    console.log(element.innerText);
}
