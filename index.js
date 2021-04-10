var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');

//MySql Database Connection
var { mysqlConnection } = require('./app/connections');

// Parse data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//CONSTANTS
var { server, database, endpoints } = require('./app/constants');

/* var whitelist = server.CLIENTS;
console.log(whitelist)
var corsOptions = {
    origin: function (origin, callback) {
        console.log(origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
} */

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));

//ROUTES
var { CollaboratorsRoute, PositionsRoute } = require('./app/routes');
const APP_ROUTE = endpoints.API_NAME + endpoints.API_VERSION;

//MySQL Database Connection
mysqlConnection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connection successfully established with database ' + mysqlConnection.config.database);
    app.listen(server.PORT, function () {
        console.log('Server Running on port ' + server.PORT);
    })
});

app.use(APP_ROUTE + endpoints.COLLABORATORS_URL.MAIN, CollaboratorsRoute);
app.use(APP_ROUTE + endpoints.POSITIONS_URL.MAIN, PositionsRoute);

