const express = require('express') // importing express library into the file (require = import)
const app = express(); // creating 1st applicataion instance
const drinks = [  // creating empty array called 'drinks'
    {
        name: 'cruddy mary',
        price: 132,
        image: 'https://i.imgur.com/Va5iIw5.jpg',
      },
      {
        name: 'index on the beach',
        price: 68,
        image: 'https://i.imgur.com/XV2aPa2.jpg',
      },
      {
        name: 'hack & coke',
        price: 1,
        image: 'https://i.imgur.com/rLOXFRI.jpg',
      },
      {
        name: 'whiskey-value pair',
        price: 11,
        image: 'https://i.imgur.com/a7rmkoS.jpg',
      },
      {
        name: '404 horsemen',
        price: 202,
        image: 'https://i.imgur.com/FLucOLr.jpg',
      },
      {
        name: 'if stateMint julep',
        price: 2,
        image: 'https://i.imgur.com/yaoK0Dg.jpg',
      },
      {
        name: 'APIPA',
        price: 43,
        image: 'https://i.imgur.com/qAhA7pi.jpg',
      },
      {
        name: 'node to joy',
        price: 56,
        image: 'https://i.imgur.com/MbVdwZz.jpg',
      },
];

/**
 * client -- server
 * browser, mobile --- databse, server (express)
 * 
 * HTTPS requests (GET, POST, PUT, DELETE)
 */

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!");
});

app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs");
});

app.listen(3000, () => { // app listens and starts server on port 3000
    console.log('listening');
})
