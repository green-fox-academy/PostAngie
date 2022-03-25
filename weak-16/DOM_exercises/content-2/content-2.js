// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']

let listItems = document.querySelectorAll('li');
let newItems =  ['apple', 'banana', 'cat', 'dog'];

listItems.forEach ((element, index) => {
    element.innerHTML = newItems[index];
});


// 2) change the <ul> element's background color to 'limegreen'
//   - use css class to change the color instead of the style property

let ul = document.querySelector('ul');
ul.setAttribute('class', 'limegreen');

// for (item of listItems){
//     item.setAttribute('class', 'limegreen');
// }
