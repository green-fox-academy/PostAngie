const express = require('express');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// exercise - helloworld
app.get('/', (req, res) => {
    // render `home.ejs`
    res.render('home', {
        title: 'Hello World',
        welcome: 'You did it!'
    });
});

// exercise greetings
app.get('/greeting', (req, res) => {
    let name = req.query.name;
    if (!name) {
        name = 'Guest';
    }
    res.render('home_greetings', { name: name });
});

// exercise todos
app.get('/todos', (req, res) => {
    const todos = ['get up', 'survive', 'go back to bed'];
    res.render('todo', {todos: todos});
  });

// exercise coctail
app.get('/coctail', (req, res) => {
    const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];
    res.render('coctail', {alcoholList: alcoholList});
  });
const cocktails = [
    {
      name: 'GIN FIZZ',
      price: 1520,
      contains: ['gin', 'sugar', 'lemon juice', 'soda'],
      isAlcoholic: true,
    },
    {
      name: 'BLOODY MARY',
      price: 1650,
      contains: ['vodka', 'tomato juice', 'spices'],
      isAlcoholic: true,
    },
    {
      name: 'SEX ON THE BEACH',
      price: 1850,
      contains: [
        'vodka',
        'peach schnapps',
        'orange juice',
        'cranberry juice'
      ],
      isAlcoholic: true,
    },
    {
      name: 'CUBA LIBRE',
      price: 1850,
      contains: ['rum', 'cola', 'lime juice'],
      isAlcoholic: true,
    },
    {
      name: 'MOJITO',
      price: 1850,
      contains: ['rum', 'sugar', 'lime juice', 'soda water'],
      isAlcoholic: true,
    },
    {
      name: 'LONG ISLAND ICE TEA',
      price: 2450,
      contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'],
      isAlcoholic: true,
    },
    {
      name: 'VIRGIN MOJITO',
      price: 990,
      contains: ['sugar', 'lime juice', 'soda water'],
      isAlcoholic: false,
    },
    {
      name: 'SAFE SEX ON THE BEACH',
      price: 990,
      contains: ['peach schnapps', 'orange juice', 'cranberry juice'],
      isAlcoholic: false,
    },
  ];

 




// start express app on port 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});