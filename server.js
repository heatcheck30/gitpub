const express = require('express') // importing express library into the file (require = import)
const app = express(); // creating 1st applicataion instance
const drinks = [] // creating empty array called 'drinks'

/**
 * client -- server
 * browser, mobile --- databse, server (express)
 * 
 * HTTPS requests (GET, POST, PUT, DELETE)
 */

app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!");
});



app.listen(3000, () => { // app listens and starts server on port 3000
    console.log('listening');
})
