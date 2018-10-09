'use strict';

fnzApp.controller('MainController', function MainController($rootScope){
    const vm = this;
    vm.closeAlert = function(){
        $rootScope.closed = true;
        console.log("wchodzi");
    }
});