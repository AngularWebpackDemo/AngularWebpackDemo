export default function (app) {


    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('imageLoad', {
                    url: '/imageLoad',
                    template: require('./imageLoad.jade'),
                    // jade模版或html方式
                    //template: require('./imageLoad.html'),
                    controller: 'imageLoadCtr'

                })
        }]);


    app.controller('imageLoadCtr', ['$scope', '$uibModal', '$http',
        function ($scope, $uibModal, $http) {


        }])


}