export default function (app) {


    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('drag', {
                    url: '/drag',
                    template: require('./drag.html'),
                    controller: 'dragCtr'

                })
        }]);


    app.controller('dragCtr', ['$scope', '$uibModal', '$http',
        function ($scope, $uibModal, $http) {

            $scope.draggableObjects = [{name: 'one'}, {name: 'two'}, {name: 'three'}, {
                name: 'no-clone',
                allowClone1: false
            }];
            $scope.droppedObjects1 = [];
            $scope.droppedObjects2 = [];
            $scope.onDropComplete1 = function (data, evt) {
                console.log('onDropComplete1...',data)

                var index = $scope.droppedObjects1.indexOf(data);
                if (index == -1)
                    $scope.droppedObjects1.push(data);
            }
            $scope.onDragSuccess1 = function (data, evt) {

                console.log('onDragSuccess1...',data)
                var index = $scope.droppedObjects1.indexOf(data);
                if (index > -1) {
                    $scope.droppedObjects1.splice(index, 1);
                }
            }
            $scope.onDragSuccess2 = function (data, evt) {


                var index = $scope.droppedObjects2.indexOf(data);
                if (index > -1) {
                    $scope.droppedObjects2.splice(index, 1);
                }
            }
            $scope.onDropComplete2 = function (data, evt) {
                var index = $scope.droppedObjects2.indexOf(data);
                if (index == -1) {
                    $scope.droppedObjects2.push(data);
                }
            }
            var inArray = function (array, obj) {
                var index = array.indexOf(obj);
            }


        }])


}