/**
 * Route handler for:
 * GET /examples/mongoose/00connection
 *
 * ***
 * Mongoose connection to database and simple example.
 */

var config = require('../../../../config');
var mongoose = require('mongoose');
mongoose.connect(config.env.mongodb);

//schema
var usersSchema = mongoose.Schema({
    first_name: String
}, {collection: 'advertiser'});

//model
var usersModel = mongoose.model('Advertisers', usersSchema);


//object
var john = new usersModel({first_name: 'John'});



module.exports = function (req, res, next) {
    'use strict';

    //object insertion
    john.save(function (err, data) {
        if (err) {
            console.error(err);
        } else {
            res.send('MongoDB connection established and data inserted: <br>' + data);
            console.log(JSON.stringify(data, null, 2));
        }
    });


};


/*
MONGO:

{
    "_id" : ObjectId("5772a126376df5a638446e43"),
    "first_name" : "John",
    "__v" : NumberInt(0)
}
 */
