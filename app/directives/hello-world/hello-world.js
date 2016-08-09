////我们这里使用CommonJS的风格
//function generateText() {
//
//
//    var element = document.createElement('h2');
//    element.innerHTML = "Hello h111 world";
//    return element;
//}
//
//module.exports = generateText;
import './hello-world.css'

export default function(ngModule) {
    console.log('hello load...')
    //var a = require('./helloWorld.jade')
    //console.log(a)


    // 定义指令
    ngModule.directive('helloWorld',['$http',helloWorldFn])
    function helloWorldFn($http){
        return {
            restrict: 'E',//元素
            scope:{},
            //templateUrl:'./directives/hello-world.jade',

            template:require('../../../jade/helloWorld.jade'),
            controllerAs:'vm',
            controller : function(){
                console.log('####################')

                //
                ////var url = 'http://192.168.0.89:8081/u'
                //var url = 'http://demoapi.datamax.com/dmp/1'
                //
                //$http.delete(url)
                //    .then(function(resp){
                //        console.log(resp)
                //        //let data=resp['data']
                //        //if(data.ret === 0){
                //        //    $scope._this.getDMPList()
                //        //}
                //    },function(){})





                console.log('####################')
                var vm = this
                vm.greeting = '世界,世界,世界22,你好11'
            }

        }
    }
}