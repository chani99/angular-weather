weatherApp.controller('weatherCtrl', function($scope, $routeParams, weatherService) {
    
    if ($routeParams.id) {
        $scope.viewWeather = function() {
            weatherService.getDataByCityName($routeParams.id, onSuccess, onError);
        }
    }
    else {

        $scope.cityName = 'jerusalem'; // DEBUG ONLY
        $scope.climateData = {};

        function onSuccess(res) {
            $scope.climateData = res.data;
        }

        function onError(res) {
            console.log('error');
            console.log(res);
        }

        $scope.viewWeather = function() {
            weatherService.getDataByCityName($scope.cityName, onSuccess, onError );
        }
    }
});