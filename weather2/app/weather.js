var weather = angular.module('weather', ['ngRoute']);


weather.service('weather_service', function ($http) {

    this.getWatherByCityName = function(name) {
        console.log(name);
        
        $http({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather",
            params: {
                q: name,
                appid: 'key',
                units: 'metric'
            }

        }).then(sucsses, error);

        function sucsses(response) {
            return(response.data);

        }

        function error(response) {
        }

    }

});

// router
weather.config(function($routeProvider){
    $routeProvider
    .when("/weatherfind",{
        templateUrl: "main_temp.html"
    })
    // .when("/order",{
    //     templateUrl: "order.html"
        
    // })
});



weather.controller('findWeather', function weather($scope, weather_service) {
    $scope.city = "";

    $scope.getwether = function () {
        console.log($scope.city);
        weather_service.getWatherByCityName($scope.city);
    }

}); 

weather.controller('navcontroller', function weather($scope, weather_service) {
    let city = "new york";
    $scope.getwetherNewYork = function() {
        console.log(city);
        weather_service.getWatherByCityName($scope.city);
    }
}); 