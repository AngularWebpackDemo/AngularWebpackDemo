import '../style/css/ng-sortable.min.css';
import '../style/css/ng-sortable.style.css';


export default function (app) {

    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('ngsort', {
                    url: '/ngsort',
                    template: require('./ngSortable.html'),
                    controller: 'ngSortableCtr'

                })
        }]);


    app.controller('ngSortableCtr', ['$scope', '$uibModal', '$http', '$log',
        function ($scope, $uibModal, $http, $log) {

            let dpList = {}
            dpList['时间'] = [
                {id: 1, name: '按时'},
                {id: 2, name: '按天'},
                {id: 3, name: '按月'}
            ]
            dpList['媒体'] = [
                {id: 1, name: 'Letv'},
                {id: 2, name: 'Sohu'}
            ]
            dpList['市场'] = [
                {id: 1, name: '北京'},
                {id: 2, name: '上海'},
                {id: 3, name: '广州'}
            ]
            dpList['平台'] = [
                {id: 1, name: 'PC'},
                {id: 2, name: 'Mobile'},
                {id: 3, name: 'OTT'}
            ]
            $scope.dpList = dpList


            var i;
            $scope.itemsList = {
                condition: [],
                row: [],
                col: []
            };

            $scope.itemsList.condition.push({Label: '时间', 'count': 0});
            $scope.itemsList.condition.push({Label: '媒体', 'count': 0});
            $scope.itemsList.condition.push({Label: '市场', 'count': 0});
            $scope.itemsList.condition.push({Label: '平台', 'count': 0});


            $scope.itemsList.row.push({'Label': '维度', 'count': 0});


            //$scope.itemsList.col.push({'Label': '维度', 'count': 0});


            $scope.conditionOptions = {
                containment: '#sortable-container',

                clone: true,
                dragEnd: function (obj) {
                    setAllUsed()

                },
                accept: function () {
                    "use strict";
                    return false;
                }

            };
            $scope.rowOptions = {
                containment: '#sortable-container',
                allowDuplicates: false,
                accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
                    if (destItemScope) {
                        return isAccept(sourceItemHandleScope['item'], destSortableScope.modelValue, $scope.itemsList.col);
                    } else {
                        return false
                    }
                },

            };

            $scope.colOptions = {
                containment: '#sortable-container',
                allowDuplicates: false,
                accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {

                    if (destItemScope) {
                        return isAccept(sourceItemHandleScope['item']);

                    } else {
                        return false
                    }
                }

            }

            // 删除功能
            $scope.del = function (list, index) {
                //delete item
                list.splice(index, 1)

            }


            function isAccept(item) {


                if (item.isUsed) {
                    return true
                }

                let isInCol = isInArray(item, $scope.itemsList.col)
                let isInRow = isInArray(item, $scope.itemsList.row)

                if (isInRow || isInCol) {
                    return false
                } else {
                    return true
                }

            }

            function isInArray(item, ary) {
                if (!ary) {
                    return false
                }
                let newArr = ary.filter(function (ele) {
                    return ele.Label === item.Label
                })
                if (newArr.length > 0) {
                    return true
                } else {
                    return false
                }
            }

            function setAllUsed() {
                for (let item of $scope.itemsList.col) {
                    item.isUsed = true

                }
                for (let item of $scope.itemsList.row) {
                    item.isUsed = true

                }
            }

        }])


}