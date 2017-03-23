app.factory('repoService', function($http){

    function extract(results){
        return results.data;
    }

    function getItems() {
        return $http.get("/data/repos.json").then(extract);
    }

    return {
        getData: getItems
    }
});