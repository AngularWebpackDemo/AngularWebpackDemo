//require('./main.css');

//require('./sass/main.scss');
//
//var sub = require('./sub');
//var $ = require('jquery');
//var moment = require('moment');
//var app  = document.createElement('div');
//app.innerHTML = '<h1>Hello World it</h1>';
//document.body.appendChild(app);
//app.appendChild(sub());
//$('body').append('<p>look at me! now is ' + moment().format() + '</p>')


//########ES6
//import './sass/main.scss';
//import generateText from './sub';
//import $ from 'jquery';
//import moment from 'moment';
////import j from './jade/index.jade'
//
//
//console.log(require('./jade/index.jade'))
//
//let app  = document.createElement('div');
//const myPromise = Promise.resolve(42);
//myPromise.then((number) => {
//    $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
//});
//app.innerHTML = '<h1>Hello World it</h1>';
//document.body.appendChild(app);
//app.appendChild(generateText());

//#########  angularJS  #############
//import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular'
import uirouter from 'angular-ui-router';

import uib from 'angular-ui-bootstrap'
//import directive from './directives/hello-world'
import routing from './app.config';
//var path = require('path');
//
//console.log('path:'+path)

var app = angular.module('app', [uirouter, uib])

//console.log('b', require('../jade/c.jade'))

//路由配置文件
app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/drag')
        $stateProvider
            .state('a', {
                url: '/a',
                template: require('../app/jade/a.jade'),
                //controller: 'aCtr'

            })
            .state('b', {
                url: '/b',
                template: require('../app/jade/b.jade')

            })
    }]);
//
//app.run(function ($rootScope, $state) {
//
//    $rootScope.$state = $state;
//});


//.config(routing)

//var ngModule = angular.module('app',[])
//directive(ngModule)
console.log('jade.....')
//console.log(require('./directives/he.jade'))

////import './sass/main.scss'
//import './stylus/bootstrap.min.styl'
//import './stylus/iconfont.styl'

import 'bootstrap/less/bootstrap.less'


//import generateText from './sub'
//import directive from './directives/hello-world/hello-world.js'
//generateText()
//directive(app)
//import cJade from '../jade/c.jade'

require('./ngDraggable/dragController.js').default(app)


//require('./ngDraggable/dragController.js')(app)






//app.controller('aCtr', ['$scope', '$uibModal','$http',
//    function ($scope, $uibModal,$http) {
//        console.log('aCtr......')
//
//        var modalInstance = $uibModal.open({
//            animation: $scope.animationsEnabled,
//            //templateUrl: CONTEXT_PATH + '/comms/delToast.jade',
//            template: require('../jade/c.jade')(),
//
//            //controller: 'testmodal',
//            //bindToController:true,
//            //resolve: {
//            //    items: function () {
//            //        return $scope;
//            //    }
//            //}
//        });
//
//    }])

//
//app.controller('testmodal',
//    ['$rootScope', '$scope', '$uibModalInstance',
//        function ($rootScope, $scope, $uibModalInstance) {
//            $scope.close = function () {
//                $uibModalInstance.close();
//            };
//        }]);