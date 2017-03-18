var cityControllers = angular.module('cityControllers', ['ngAnimate']);

cityControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
   $http.get('js/data.json'). success(function(data){
   	$scope.cities = data;
   	$scope.citiesOrder = 'name';
   });
}]);

cityControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
   $http.get('js/data.json'). success(function(data){
   	$scope.cities = data;
   	$scope.whichItem = $routeParams.cityId;


   	if($routeParams.cityId > 0){
   		$scope.prevItem = Number($routeParams.cityId)-1;
   	}else {
   		$scope.prevItem = $scope.cities.length-1;
   	}

   	if ($routeParams.cityId < $scope.cities.length-1){
   		$scope.nextItem = Number($routeParams.cityId)+1;
   	} else {
   		$scope.nextItem = 0;
   	}

   });
}]);