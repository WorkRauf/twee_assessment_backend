//Dependencies
const express = require('express');
const app = express();
require('./startup/routes')(app);
require('./startup/connection')();

//GET
app.get('/', (req, res) => {
    res.send('*** Tweets API Running ***')
});

//Port settings
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));