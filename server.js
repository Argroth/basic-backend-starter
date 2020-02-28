const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require('./routes/index-routes')(app);

//###########################################################       Database         ######################################################################
// const databaseConfig = require("./database/config");
// const databaseCredentials = require("./database/credentials");
// const mongoose = require('mongoose');
// const db = mongoose.connection;
//
//
//
// mongoose.connect(
//     `mongodb://${databaseCredentials.login}:${databaseCredentials.pwd}@${databaseConfig.url}/${databaseCredentials.authDatabase}`,
//     {   useNewUrlParser: true,
//         useCreateIndex: true
//     }
// );
//
// //Tests
// const Test = require('./model/test-model');
// const newTest = new Test();
// newTest.name = '123';
// newTest.save();
//
//
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log("we are connected to the database!");
// });
//###########################################################     SANDBOX    ######################################################

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);