import angular from 'angular';
import uirouter from 'angular-ui-router';
import uib from 'angular-ui-bootstrap';
import 'ngdraggable';

var app = angular.module('app', [uirouter, uib,'ngDraggable'])

//路由配置文件
app.config(['$urlRouterProvider',
    function ($urlRouterProvider) {

        $urlRouterProvider.otherwise('/imageLoad')
    }]);
import 'bootstrap/less/bootstrap.less'

require('./ngDraggable/dragController.js').default(app)
require('./ngInject/ngInject.js').default(app)
require('./imageLoad/imageLoad.js').default(app)