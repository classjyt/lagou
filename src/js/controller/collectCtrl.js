'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('collectCtrl', ['$scope', '$http', '$state', '$rootScope', function($scope, $http, $state, $rootScope) {

	$scope.star1Img=$rootScope.star1Image;
	$scope.star2Img=$rootScope.star2Image;	

	$rootScope.back = 4;

	// 头部默认显示
	$scope.flag1 = false;
	$scope.flag2 = false;
	$scope.flag3 = false;
	$scope.flag4 = true;

	// 返回
	$scope.goWhere = () => {
		$state.go('my');
	};



	// 初始化显示
	$scope.ulShow1 = true;
	$scope.ulShow2 = false;
	$scope.ulShow3 = false;
	$http({
		method: 'get',
		url: 'data/myFavorite.json',
		responseType: 'json',
	}).then((resp) => {
		// 请求成功
		$scope.result = resp.data; //数组
	}, (resp) => {
		// 请求失败
		console.log('请求失败' + resp.status + ',' + resp.statusText);
	});


	// 星星默认显示
	$scope.conShow = false;
	$scope.conShow2 = true;

	$scope.conClick=() => {
		$scope.conShow = false;
		$scope.conShow2 = true;
	}

	$scope.conClick2=() => {
		console.log(25);
		$scope.conShow = true;
		$scope.conShow2 = false;
	}
}]);