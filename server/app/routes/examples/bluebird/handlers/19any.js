/**
 * Route handler for:
 * GET /examples/bluebird/19any
 *
 * ***
 * BPromise.any([promisA, promisB, valueA, valueB]).then(function (valArr) { ... })
 * Execute then() when first promise is in fullfiled state.
 * Returned value is only from fulfilled promise.
 */

var BPromise = require('bluebird');

module.exports = function (req, res, next) {
    'use strict';
    res.send('View console results.');


    var promisArr = [];
    promisArr[0] = new BPromise(function (resolve, reject) { //8sec
        setTimeout(function () {
            resolve('From promise promisArr[0].');
        }, 8000);
    });
    promisArr[1] = new BPromise(function (resolve, reject) { //13sec
        setTimeout(function () {
            resolve('From promise promisArr[1].');
        }, 13000);
    });



    //*** uncomment this and .then() will be executed instantly
    promisArr[2] = 'Some string'; //instantly


    //*** uncomment this and .then() will be executed instantly but val will be undefined (use race() instead of any())
    // promisArr[3] = BPromise.resolve('From promise promisArr[3].');

    //*** uncomment this and .then() will be executed instantly but val will be undefined (use race() instead of any())
    // promisArr[4] = new BPromise(function (resolve, reject) { //13sec
    //     resolve('From promise promisArr[4].');
    // });



    BPromise.any(promisArr) //waits for first fulfilled promise
        .then(function (val) {
            console.log('One promise is fulfilled!');

            console.log(JSON.stringify(val, null, 4));
        })
        .catch(function (err) {
            console.log(err);
        });

};
