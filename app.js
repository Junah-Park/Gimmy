const http = require('http');

const hostname = '127.0.0.1';
var port = process.env.PORT || 3000;

const express = require('express');
const app = express();

// Set up static files
app.use(express.static('public'));
app.use(express.static('public/scripts'));
// app.use('/styles', express.static(path.join(dirname, 'public/styles')));
// app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));
// app.use('/views', express.static(path.join(__dirname, 'public/views')));
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
// });

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
});


// app.get('private/scripts.js', (req, res) => {
//   res.sendFile('/private/scripts.js');
// });