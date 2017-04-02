'use strict';

angular.module('app').directive('appContentPosition', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/content-position.html'
	};
}])