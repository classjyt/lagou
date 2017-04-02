'use strict';

angular.module('app').directive('appCommonList', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/common-list.html'
	};
}])