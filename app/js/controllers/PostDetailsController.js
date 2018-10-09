'use strict';

fnzApp.controller('PostDetailsController',
    function PostDetailsController(postData, $routeParams){
        const vm = this;
        vm.postId = $routeParams.postId;
        postData.getPost(vm.postId,function(post){
            vm.singlePost = post.data.object;
            console.log(post);
        },function (response) {
            console.log('error');
            console.log(response);
        });
        vm.getPhotoPath = function(singlePost){
            const constPath = "http://localhost:8040/postImages/";
            if (singlePost){
                var path = constPath + singlePost.id + "/" + singlePost.photoPath;
                console.log(path);
                return path;
            }

        }

});