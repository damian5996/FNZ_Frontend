'use strict';

var fnzApp = angular.module('fnzApp', ['ngRoute', 'ngSanitize', 'ngMaterial', 'ngCookies', 'datatables'])
    .config(function($routeProvider){
        $routeProvider
            .when('/news',{
                templateUrl: 'templates/AllPosts.html',
                controller: 'AllPostsController as allPostsCtrl'
            })
            .when('/foundationLife',{
                templateUrl: 'templates/AllPosts.html',
                controller: 'AllPostsController as allPostsCtrl'
            })
            .when('/dogsAdoption',{
                templateUrl: 'templates/AllPosts.html',
                controller: 'AllPostsController as allPostsCtrl'
            })
            .when('/catsAdoption',{
                templateUrl: 'templates/AllPosts.html',
                controller: 'AllPostsController as allPostsCtrl'
            })
            .when('/posts/:postId', {
                templateUrl: 'templates/PostDetails.html',
                controller: 'PostDetailsController as postCtrl'
            })
            .when('/addPost', {
                templateUrl: 'templates/AddPost.html',
                controller: 'AddPostController as addPostCtrl'
            })
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'LoginController as loginCtrl'
            })
            .when('/requests', {
                templateUrl: 'templates/AllRequests.html',
                controller: 'RequestsController as requestsCtrl'
            })
    });

angular.module('fnzApp')
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }]);

fnzApp.run(function($rootScope, $window){

    $rootScope.firstName = $window.localStorage.getItem('firstName');
    $rootScope.lastName = $window.localStorage.getItem('lastName');
    $rootScope.fullName = $rootScope.firstName + ' ' + $rootScope.lastName;
    $rootScope.category = null;
    //$rootScope.loggedIn = false;
    $rootScope.alertClosed = false;
    $rootScope.successMessage = null;
    $rootScope.errorMessage = null;
    $rootScope.categories = [
        'Psy do adopcji',
        'Koty do adopcji',
        'Spełnione marzenia',
        'Przekaż datek',
        'Z życia fundacji'
    ];
    $rootScope.actions = [
        'Dodanie postu',
        'Edycja postu',
        'Usunięcie postu',
    ]

});
// angular.module('myApp', ['ngCookies'])
//
//     .run(['$http', '$cookies', function($http, $cookies) {
//         $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
//     }]);
// fnzApp.run(function($rootScope, $location, userService){
//     $rootScope.$on("$routeChangeStart",
//         function(event, next, current){
//             if (next.$$route.authenticated){
//                 if(!userService.getAuthStatus()){
//                     $location.path('/login');
//                 }
//             }
//             if (next.$$route.originalPath === '/login'){
//                 console.log('Login Page');
//                 if (userService.getAuthStatus()){
//                     $location.path(current.$$route.originalPath);
//                 }
//             }
//         })
// });