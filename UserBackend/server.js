const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser =  require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 6000;
app.listen(PORT, () => { console.log(`App is running on PORT : ${ PORT }`)});

const MONGODB_URL = 'mongodb+srv://nizith:nizcluster1@nizitp.3t6k8bi.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect( MONGODB_URL )
.then( () => {
    console.log("MongoDB Connection Successfull");
})
.catch( (err) => {
    console.log("MongoDB Connecting Eroor", err);
});
