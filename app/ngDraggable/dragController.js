export default function(app) {


app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('drag', {
                url: '/drag',
                template: require('./drag.html'),
                controller: 'dragCtr'

            })
    }]);


    app.controller('dragCtr', ['$scope', '$uibModal','$http',
        function ($scope, $uibModal,$http) {
            console.log('dragCtr......')

            //var modalInstance = $uibModal.open({
            //    animation: $scope.animationsEnabled,
            //    //templateUrl: CONTEXT_PATH + '/comms/delToast.jade',
            //    template: require('../jade/c.jade')(),
            //
            //    //controller: 'testmodal',
            //    //bindToController:true,
            //    //resolve: {
            //    //    items: function () {
            //    //        return $scope;
            //    //    }
            //    //}
            //});

        }])



}