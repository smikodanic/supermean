/*global angular*/

/******************* START APP AND LOAD MODULES *******************
 **********************************************/
require('../../bower_components/angular-cookies/angular-cookies.min.js');

var clientApp = angular.module('clientApp', [
    // 'ngRoute',
    'ui.router',
    'ngCookies'
]);


/******************* CONFIG *******************
 **********************************************/
clientApp.constant('APPCONF', require('./config/constants'));
clientApp.config(require('./config/html5mode'));


/******************* ROUTES *******************
 **********************************************/
// clientApp.config(['$routeProvider', require('./config/routes-ng')]);
clientApp.config(require('./config/routes-ui'));



/******************* CONTROLLERS *******************
 ***************************************************/
clientApp.controller('404Ctrl', require('./app/_common/404/404Ctrl'));
clientApp.controller('ListSPAexamplesCtrl', require('./app/examples-spa/listSPAexamplesCtrl'));

//********* ui-router examples
clientApp.controller('StateControllerAliasCtrl', require('./app/examples-spa/uirouter/stateControllerAliasCtrl'));

//********* $q promise examples
clientApp.controller('ListQcreationCtrl', require('./app/examples-spa/q/listQcreationCtrl'));
clientApp.controller('ListQmethodsCtrl', require('./app/examples-spa/q/listQmethodsCtrl'));

//********* login examples
clientApp.controller('PageCtrl', require('./app/examples-spa/login/pageCtrl'));


/******************* SERVICES *******************
 **********************************************/
clientApp.factory('basicAuth', require('./lib/factory/basicAuth'));
clientApp.factory('base64', require('./lib/factory/base64'));
