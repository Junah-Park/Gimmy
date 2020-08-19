const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const express = require('express');
const app = express();


// Set up static files
app.use(express.static('public'));
// app.use('/styles', express.static(path.join(dirname, 'public/styles')));
// app.use('/scripts', express.static(path.join(dirname, 'public/scripts')));
// app.use('/views', express.static(path.join(__dirname, 'public/views')));
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
// });

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


app.listen(process.env.PORT || port);


app.get('/', (req, res) => {
    res.sendFile('/public/index.html');
})
