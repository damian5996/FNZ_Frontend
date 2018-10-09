'use strict';

fnzApp.controller('RequestsController', function RequestsController(requestService){
    const vm = this;
    vm.showAccepted = false;
    vm.showRefused= false;
    vm.data = {
        showAccepted: false,
        showRefused: false
    };
    vm.ascending = true;
    vm.setStatus = function(){

    };
    vm.getRequests = function(){requestService.getAllRequests(vm.data,
        function (allRequests){
            vm.allRequests = allRequests.data.object.requests;
            vm.currentPage = allRequests.data.object.currentPage;
            vm.totalPageCount = allRequests.data.object.totalPageCount;
            console.log(allRequests);
        }, function(response){
            console.log('error');
            console.log(response);
        })
    };
    vm.getRequests();
});