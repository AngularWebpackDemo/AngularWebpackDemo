export default function (app) {


    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dimernsion', {
                    url: '/dimernsion',
                    template: require('./dimernsion.html'),
                    controller: 'dimernsionCtr'

                })
        }]);


    app.controller('dimernsionCtr', ['$scope', '$uibModal', '$http',
        function ($scope, $uibModal, $http) {

            $scope.draggableObjects = [{name: '媒体'}, {name: '市场'}, {name: '平台'}, {name: '时间'}];
            $scope.droppedObjects1 = [];
            $scope.droppedObjects2 = [];
            $scope.onDropComplete1 = function (data, evt) {
                console.log('onDropComplete1...',data)
                if(!data){
                    return ;
                }

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
                if(!data){
                    return ;
                }

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