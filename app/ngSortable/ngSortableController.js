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
            $scope.itemsList = {condition: [], sheets: []}

            var dimension = [{v: 1}]
            var sheet = {
                dimension: dimension,
                row: [{'name': '维度', 'count': 0, 'isUsed': true, dimension: dimension}],
                col: []
            };


            $scope.itemsList.sheets.push(sheet)


            $scope.itemsList.condition.push({name: '时间', value: '按时'});
            $scope.itemsList.condition.push({name: '媒体', value: '按时'});
            $scope.itemsList.condition.push({name: '市场', value: '按时'});
            $scope.itemsList.condition.push({name: '平台', value: '按时'});


            //$scope.itemsList.row.push({'name': '维度', 'count': 0});

            //$scope.itemsList.col.push({'name': '维度1', 'count': 0});
            //$scope.itemsList.col.push({'name': '维度2', 'count': 0});
            //$scope.itemsList.col.push({'name': '维度3', 'count': 0});


            $scope.conditionOptions = {
                containment: '#sortable-container',

                clone: true,
                dragEnd: function () {
                    setAllUsed()
                    setDimensionToEnd()
                },
                accept: function () {
                    "use strict";
                    return false;
                }

            };
            var option = {
                containment: '#sortable-container',
                allowDuplicates: false,
                accept: function (sourceItemHandleScope, destSortableScope, destItemScope) {
                    //console.log('destSortableScope.....',destSortableScope)
                    console.log('destItemScope.....', destItemScope)


                    //
                    //if(destItemScope && destItemScope.item && destItemScope.item.name === '维度'){
                    //    return false
                    //}

                    var sheetNo = destSortableScope.element[0].id

                    return isAccept(sourceItemHandleScope['item'], sheetNo);

                },
                dragEnd: function () {
                    setDimensionToEnd()
                },

            }
            $scope.rowOptions = option
            $scope.colOptions = option

            $scope.addSheet = function () {
                console.log('addSheet....', angular.toJson($scope.itemsList))
                var dimension = [{v: 1}]
                var sheet = {
                    dimension: dimension,
                    row: [{'name': '维度', 'count': 0, 'isUsed': true, dimension: dimension}],
                    col: []
                };


                $scope.itemsList.sheets.push(sheet)
            }


            $scope.delSheet = function (sheet, index) {
                //delete item
                sheet.splice(index, 1)

            }


            // 删除功能
            $scope.del = function (list, index) {
                //delete item
                list.splice(index, 1)

            }

            // 增加维度
            $scope.addDimension = function (dimension) {
                console.log('dimension......', dimension)
                dimension.push({v: 1})

            }

            $scope.addDimensionValue = function (item) {
                console.log('addDimensionValue......', item)
                item.v = item.v + 1

            }


            function isAccept(item, sheetNo) {


                if (item.isUsed) {
                    return true
                }

                let isInCol = isInArray(item, $scope.itemsList.sheets[sheetNo].col)
                let isInRow = isInArray(item, $scope.itemsList.sheets[sheetNo].row)

                if (isInRow || isInCol) {
                    return false
                } else {
                    return true
                }
                return true
            }

            function isInArray(item, ary) {
                if (!ary) {
                    return false
                }
                let newArr = ary.filter(function (ele) {
                    return ele.name === item.name
                })
                if (newArr.length > 0) {
                    return true
                } else {
                    return false
                }
            }

            function setAllUsed() {


                for (let sheet of $scope.itemsList.sheets) {
                    for (let item of sheet.col) {
                        item.isUsed = true


                    }
                    for (let item of sheet.row) {
                        item.isUsed = true

                    }
                }
            }

            // 将维度设置到尾部
            function setDimensionToEnd() {
                for (let sheet of $scope.itemsList.sheets) {
                    setToEnd(sheet.col)
                    setToEnd(sheet.row)


                }

                function setToEnd(ary) {

                    for (let i in ary) {

                        if (ary[i].name === '维度') {
                            ary.push(ary[i])
                            ary.splice(i, 1)
                            break
                        }
                    }

                }

            }
        }])

    var json = {
        "sheets": [
            {
                "dimension": [
                    {name: "推送量", id: 1},
                    {name: "推送完成率", id: 2}
                ],
                "row": [
                    {"name": "市场", "value": "按时"},
                    {"name": "媒体", "value": "Letv"},
                    {
                        "name": "维度",
                        "dimension": [
                            {name: "推送量", id: 1},
                            {name: "推送完成率", id: 2}
                        ]
                    }
                ],
                "col": [
                    {"name": "平台", "value": "PC"}]
            }
        ]
    }


}