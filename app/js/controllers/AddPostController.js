'use strict';

fnzApp.controller("AddPostController", function AddPostController(postData, $rootScope) {
    const vm = this;
    vm.newPost = {};
    vm.addPost = function () {
        postData.addPost(vm.newPost,
            function (response) {
                $rootScope.errorMessage = null;
                $rootScope.successMessage = "Wysłano prośbę o dodanie postu.";
                console.log(response);
            }, function (response) {
                $rootScope.successMessage = null;
                $rootScope.alertClosed = false;
                console.log($rootScope.alertClosed);
                $rootScope.errorMessage = ErrorHandler.handleError(response);
            });
    }
});
