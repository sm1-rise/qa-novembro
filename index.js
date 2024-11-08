const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require("./src/config/dbConfig.js");
const app  = express();
const controller = require("./src/controller/controller.js");


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(controller);

db.hasConection();


app.listen(9000, () => console.log('Express started at http://localhost:9000'));
