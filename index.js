const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path')
var cors = require('cors')
const CustomerRouter = require('./Routes/CustomerRouter');

const port = process.env.PORT || 3000;


app.use(cors({
    "Access-Control-Allow-Origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
}))

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('img'));
app.use('/', CustomerRouter);


app.get("/", (req, res) => {
    res.send("Welcome to PLANTAPP");
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
