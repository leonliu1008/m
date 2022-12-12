const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(5050, () => {
    console.log('Server listening on port 5050');
});