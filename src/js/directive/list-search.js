'use strict';

angular.module('app').directive('appListSearch', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/list-search.html'
	};
}])