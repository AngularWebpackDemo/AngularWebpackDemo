export default function (app) {


    app.config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('ngInject', {
                    url: '/ngInject',
                    template: require('./ngInject.html'),
                    controller: 'ngInjectCtrl'

                })
        }]);

    // 行内注入声明(语法糖式)
    app.controller('ngInjectCtrl', ['$scope', '$uibModal', '$http',
        function ($scope, $uibModal, $http) {
            console.log('ngInject .......')

        }])


    // 推断式注入(如果进行了压缩混淆 就会受到影响)
    //app.controller('ngInjectCtrl',
    //    function ($scope, $uibModal, $http) {
    //        console.log('ngInject .......')
    //
    //    })


    // 显式注入声明
    var controller = function ($scope) {
                console.log('ngInject .......')

            }

    controller.$inject = ['$scope'];
    app.controller('ngInjectCtrl',controller);


}