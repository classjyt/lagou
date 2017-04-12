'use strict';

angular.module('app').directive('appFooterTechnique', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/footer-technique.html'
	};
}])