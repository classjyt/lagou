'use strict';

angular.module('app').directive('appPositionListTechnique', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/content-technique.html'
	};
}])