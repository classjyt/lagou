'use strict';

angular.module('app').directive('appRegist', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/regist-real.html'
	};
}])