app.directive('portfolioDirective', ['repoService', function(repoService){
    return {
        restrict: 'E',
        templateUrl:"/js/ng/portfolio_directive/index.html",
        link: function (scope, element, attrs) {

            var repos = repoService.getData();

            repos.then(function(repos) {
                scope.repos = repos;
            });
        }
    }
}]);