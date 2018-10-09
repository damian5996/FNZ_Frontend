'use strict';

fnzApp.factory('requestService', function($http){
    return{
        getAllRequests: function(data, success, error){
            $http.post(
                "http://localhost:57725/Requests",
                {
                    // 'requestStatus': data.requestStatus,
                    'showAccepted': data.showAccepted,
                    'showRefused': data.showRefused,
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
        }
    }
});