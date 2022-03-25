// 1)  Append every paragraph with the last one's content.
let lastParagraphContent = document.querySelector('.animals').textContent;
console.log(lastParagraphContent);

let otherParagraphs = document.querySelectorAll('.apple, .balloon, .cat');
for (item of otherParagraphs){
    item.innerHTML += ' ' + lastParagraphContent;
}


// 2)  Do the same again, but you should keep the cat strong.
let lastParagraphContent2 = document.querySelector('.animals').innerHTML;
console.log(lastParagraphContent2);

let otherParagraphs2 = document.querySelectorAll('.apple, .balloon, .cat');
for (item of otherParagraphs2){
    item.innerHTML += ' ' + lastParagraphContent2;
}