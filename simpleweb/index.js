const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Hi Chotuu')
});

app.listen (8080, ( )=> {
    console.log('Listening on port 8080')
})