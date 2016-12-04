const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(express.static('Client'));

const port = process.env.PORT || 1337

app.listen(port, () => console.log(`Server is listening on port ${port}`))
