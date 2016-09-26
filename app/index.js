import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'bootstrap'
import uib from 'angular-ui-bootstrap';

import 'jquery-ui/ui/widgets/sortable';
//var autocomplete = require('jquery-ui/ui/widgets/autocomplete');

import 'angular-ui-sortable';

import 'ngdraggable';

import 'ng-sortable';

import myComponent from './dropdownComponent/dropdownComponent'

//console.log('myComponent...',myComponent)

var app = angular.module('app', [uirouter, uib, 'ngDraggable', 'ui.sortable', 'as.sortable', myComponent])

//路由配置文件
app.config(['$urlRouterProvider',
    function ($urlRouterProvider) {

        $urlRouterProvider.otherwise('/ngsort')
    }]);
import 'bootstrap/less/bootstrap.less'

require('./ngDraggable/dragController.js').default(app)
require('./ngInject/ngInject.js').default(app)
require('./imageLoad/imageLoad.js').default(app)
require('./draggableDimension/dimernsionController.js').default(app)
require('./uiSortable/sortController.js').default(app)
require('./ngSortable/ngSortableController.js').default(app)