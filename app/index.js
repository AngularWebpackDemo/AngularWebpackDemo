import angular from 'angular';
import uirouter from 'angular-ui-router';
import uib from 'angular-ui-bootstrap';
import 'ngdraggable';

var app = angular.module('app', [uirouter, uib,'ngDraggable'])

//路由配置文件
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/drag')
        //$stateProvider
        //    .state('a', {
        //        url: '/a',
        //        template: require('../app/jade/a.jade'),
        //        //controller: 'aCtr'
        //
        //    })
        //    .state('b', {
        //        url: '/b',
        //        template: require('../app/jade/b.jade')
        //
        //    })
    }]);
import 'bootstrap/less/bootstrap.less'

require('./ngDraggable/dragController.js').default(app)