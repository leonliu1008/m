const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/v1/posts', (req, res) => {
    res.json({
        status: 'success',
        data: {
            data: req.body,
        },
    });
});

app.get('/', (req, res) => {
    res.send('Hello, welcome!');
});

app.listen(5050, () => {
    console.log('Server listening on port 5050');
});

/*
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(5050, () => {
    console.log('Server listening on port 5050');
});
*/