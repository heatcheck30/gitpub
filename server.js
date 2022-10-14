const express = require('express') // importing express library into the file (require = import)
const app = express(); // creating 1st applicataion instance
const port = 3000
const drinks = require('./models/drinks.js')
const reqLog = (req) => {
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('this is the request object sent from the browser')
  console.log(`${req.method} request sent to ${req.url}`)
  console.log('req params are: ', req.params)
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=')

}
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
    res.render('drinks_index.ejs', {drink: drinks});
});

app.get('drinks/:id', (req, res) => {
  res.render('show', {drink: drinks[req.params.id]})
})

app.listen(port, () => { // app listens and starts server on port 3000
    console.log('listening on port:', port);
})
