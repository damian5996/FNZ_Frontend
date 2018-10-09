'use strict';

fnzApp.controller("LoginController", function LoginController($rootScope, $timeout, userService, $location, $window){
    const vm = this;
    vm.loginData = {};
    vm.loading=false;
        vm.login = function(){
            vm.loading = true;
            userService.login(vm.loginData,
                function(response){
                    $window.localStorage.setItem("firstName", response.data.object.firstName);
                    $window.localStorage.setItem("lastName", response.data.object.lastName);
                    $location.path('/news');
                    $window.location.reload();
                }, function(response){
                    $rootScope.errorMessage = ErrorHandler.handleError(response);
                    vm.loading = false;
                    console.log(response);
                })
        };
        vm.logout = function(){
            vm.loading = true;
            userService.logout(
                function(response){
                    //$rootScope.loggedIn = false;
                    $rootScope.successMessage = "Wylogowano pomyślnie";
                    $window.localStorage.clear();
                    $window.location.reload();
                    console.log(response);
                }, function(response){
                    console.log('logoutErrorController');
                    console.log(response);
                });
            $location.path('/login');
        };
        vm.isLogged = function(){
            vm.logged = userService.getAuthStatus();
            console.log(vm.logged);
        }
});