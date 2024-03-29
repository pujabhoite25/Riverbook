var app = angular.module('riverbook', []);
app.controller('riverinfoController', function($scope) {
	$scope.rbriverName;
	$scope.rbriverLocation;
	var msg;
	
	var getUserData = function(){
		$scope.rbusername = localStorage.getItem("rbusername");
	}();
	$scope.saveRiverInfo = function(){		
		alert("River Infomration Submitted Successfully");
	}
    
    $scope.getLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition($scope.showPosition);
        } else { 
            $scope.rbriverLocationAuto = "Geolocation is not supported by this browser.";
        }
    }

    $scope.showPosition = function(position) {
        alert(position.coords.latitude);
        $scope.rbriverLocationAuto = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude;
        $scope.rbriverLocationAuto = "yes";
    }
});