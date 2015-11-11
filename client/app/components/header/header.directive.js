'use strict';

angular.module('projekt2App')
.directive('beerHeader', function() {
	return {
		templateUrl: 'app/components/header/header.html',
		replace: true,
		restrict: 'E'
	};
});
