'use strict';

angular.module('app').directive('company', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/company.html'
	};
}])