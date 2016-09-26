/**
 * Created by xia on 16/9/26.
 */

import template from './dropdown.html'




function DropDownController($scope) {

    console.log('compont..',$scope.dp.selected,!$scope.dp.selected)

    if(!$scope.dp.selected && $scope.dp.list && $scope.dp.list.length > 0){
        $scope.dp.name = $scope.dp.list[0].name
    }else{
        $scope.dp.name = $scope.dp.selected
    }


    // DropDown*******************
    let dropDown = {name: $scope.dp.name, value: 1}
    dropDown.data = $scope.dp.list

    $scope.dropDown = dropDown
    $scope.dropDown.click = function (item) {
        $scope.dropDown.name = item.name
        console.log('222..',$scope.dp)
        $scope.dp.selected = item.name
    }
}
export default angular.module('myComponent', [])
    .component('dropdown', {
        template: template,
        controller: DropDownController,
        controllerAs:'dp',
        bindings: {
            list: '=',
            selected:'=',

        }
    })
    .name
