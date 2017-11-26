weatherApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html"
    })
    .when('/city', {
        templateUrl: 'templates/citydata.html'
    })
    .when('/city/:id', {
        templateUrl: 'templates/citydata.html'
    })
});