export default function (app) {


    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('sort', {
                    url: '/sort',
                    template: require('./sort.html'),
                    controller: 'sortCtr'

                })
        }]);


    app.controller('sortCtr', ['$scope', '$uibModal', '$http',
        function ($scope, $uibModal, $http) {

            $scope.condition = [{
                icon: './img/icons/facebook.jpg',
                title: 'Facebook (a)',
                link: 'http://www.facebook.com'
            }, {
                icon: './img/icons/youtube.jpg',
                title: 'Youtube (a)',
                link: 'http://www.youtube.com'
            }, {
                icon: './img/icons/gmail.jpg',
                title: 'Gmail (a)',
                link: 'http://www.gmail.com'
            }, {
                icon: './img/icons/google+.jpg',
                title: 'Google+ (a)',
                link: 'http://plus.google.com'
            }, {
                icon: './img/icons/twitter.jpg',
                title: 'Twitter (a)',
                link: 'http://www.twitter.com'
            }, {
                icon: './img/icons/yahoomail.jpg',
                title: 'Yahoo Mail (a)',
                link: 'http://mail.yahoo.com'
            }, {
                icon: './img/icons/pinterest.jpg',
                title: 'Pinterest (a)',
                link: 'http://www.pinterest.com'
            }]

            $scope.row = []
            $scope.col = []

            var optionsCondition = {
                placeholder: "app",
                connectWith: ".apps-container",
                allowDuplicates: true,
                //update: function () {
                //    console.log("list optionsCondition : update");
                //},
                //stop: function (e, ui) {
                //    console.log("list optionsCondition : stop");
                //    // if the element is removed from the first container
                //    if ($(e.target).hasClass('first') &&
                //        ui.item.sortable.droptarget &&
                //        e.target != ui.item.sortable.droptarget[0]) {
                //        // clone the original model to restore the removed item
                //        $scope.sourceScreens = originalScreens.slice();
                //    }
                //}
            }

            var optionsRow = {

                placeholder: "app",
                connectWith: ".apps-container",
                clone:true,
                update: function () {
                    console.log("list optionsRow : update");
                }
            }

            $scope.sortableOptionsList = [optionsCondition, optionsRow, optionsRow];


        }])


}