'use strict';

angular.module('app').directive('appHeadTechnique', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/head-technique.html'
	};
}])