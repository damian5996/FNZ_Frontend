'use strict';
fnzApp.factory("postData", function($http){
    return{
        getPost: function(postId, success, error){
            $http.get("http://localhost:57725/Posts/" + postId)
                .then(function(response){
                    success(response);
                })
                .catch(
                    function (response) {
                        error(response);
                    });
        },
        getAllPosts: function(data, success, error){
            $http.post(
                "http://localhost:57725/Posts",
                {
                    'pageNumber': data.pageNumber,
                    'limit': data.limit,
                    'sort': data.sort,
                    'query': data.query,
                    'ascending': data.ascending
                }
            ).then(function(response){
                success(response);
            }).catch(function(response){
                error(response);
            });
        },
        addPost: function(newPost, success, error){
                $http.post(
                    "http://localhost:57725/Posts/Add",
                    {
                        'author': newPost.author,
                        'category': newPost.category,
                        'content': newPost.content,
                        'title': newPost.title,
                        'photoPath': newPost.photoPath
                    }
            ).then(function(response){
                console.log('udalo sie');
                console.log(response);
                success(response);
            }).catch(function(response){
                console.log('error1');
                console.log(response);
                error(response);
            });
        }
    }
});