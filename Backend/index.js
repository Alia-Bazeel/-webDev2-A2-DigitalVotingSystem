const express = require('express');
const app = express();

app.get('/posts', (req, res) => {
    res.send({
        name: 'BathSpa', 
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

