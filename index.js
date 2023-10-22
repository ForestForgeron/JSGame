const express = require('express');
const path = require('path');
const app = express();
 
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    console.log("Server got GET request to main page. Success.");
});
 
app.listen(port, () => {
    console.log(`Server successfully running on port ${port}`);
  });