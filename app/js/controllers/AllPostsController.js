'use strict';

fnzApp.controller('AllPostsController',
    function AllPostsController(postData, $window){
        const vm = this;
        vm.data = {
            sort: 'AddedAt',
            ascending: true
        };
        postData.getAllPosts(vm.data,
            function (allPosts){
                vm.allPosts = allPosts.data.object.posts;
                vm.currentPage = allPosts.data.object.currentPage;
                vm.totalPageCount = allPosts.data.object.totalPageCount;
                console.log('wtf');
                console.log(allPosts);
            }, function(response){
                console.log('error');
                console.log(response);
        });
        vm.getPosts = function(){
            postData.getAllPosts(vm.data,
                function (allPosts){
                    vm.allPosts = allPosts.data.object.posts;
                    vm.currentPage = allPosts.data.object.currentPage;
                    vm.totalPageCount = allPosts.data.object.totalPageCount;
                    console.log('wtf');
                    console.log(allPosts);
                }, function(response){
                    console.log('error');
                    console.log(response);
                });
        };

        vm.getPhotoPath = function(singlePost){
            const constPath = "http://localhost:8040/postImages/";
            if (singlePost){
                var path = constPath + singlePost.id + "/" + singlePost.photoPath;
                return path;
            }
        };
        vm.isEnterPressed = function($event) {
            var keyCode = $event.which || $event.keyCode;
            if (keyCode === 13) {
                vm.getPosts();
            }
        }
    });