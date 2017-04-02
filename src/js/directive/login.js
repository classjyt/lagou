'use strict';

angular.module('app').directive('appLogin', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/login-real.html'
	};
}])