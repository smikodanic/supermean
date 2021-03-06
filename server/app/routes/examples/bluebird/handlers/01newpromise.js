/**
 * Route handler for:
 * GET /examples/bluebird/01newpromise
 *
 * ***
 * Comment x=12 to return error.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';


    // create promise object
    var promis = new BPromise(function (resolve, reject) {

        var x;
        x = 12; //comment this line to generate the error

        if (x) {
            resolve('x= ' + x);
        } else {
            reject('Error: x is ' + x); //Error: x is undefined
        }

    });



    promis
        .then(function (val) {
            res.send('Resolved value: ' + val); //Resolved value: 12
        }).catch(function (err) {
            res.send(err); //Error: x is undefined
        });




    console.log(JSON.stringify(promis, null, 2));
/*
{
  "isFulfilled": true,
  "isRejected": false,
  "fulfillmentValue": 12
}
or
{
  "isFulfilled": false,
  "isRejected": true,
  "rejectionReason": "bad very bad"
}
*/
};
