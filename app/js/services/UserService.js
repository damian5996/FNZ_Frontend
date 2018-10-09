'use strict';

fnzApp.factory('userService', function($http, $cookies){
    return{
        login: function(loginData, success, error){
            console.log(loginData);
            $http.post(
                "http://localhost:57725/Login",
                {
                    'username': loginData.username,
                    'password': loginData.password
                }
            ).then(function(response){
                console.log('serviceOK');
                $cookies.put('auth', response);
                $cookies.put('auth2', response);
                success(response);
            }).catch(function(response){
                console.log('errorService');
                error(response);
            });
        },
        getAuthStatus: function(){
            var status = $cookies.getAll();
            console.log(status);
            console.log(document.cookie);
            if (status){
                return true;
            } else {
                return false;
            }
        },
        logout: function(success, error) {
            $http.get(
                "http://localhost:57725/Logout"
            ).then(function(response){
                console.log('serviceOK');
                success(response);
            }).catch(function(response){
                console.log('errorService');
                error(response);
            });
        }
    }
});