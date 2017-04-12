'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('techniqueCtrl', ['$scope', '$http', '$state', '$rootScope', function($scope, $http, $state, $rootScope) {

	$scope.star1Img=$rootScope.star1Image;
	$scope.star2Img=$rootScope.star2Image;


	$http({
		method: 'get',
		url: 'data/position.json?id=' + $state.params.id,
		responseType: 'json',
	}).then((resp) => {
		// 请求成功
		$scope.result = resp.data; //数组
	}, (resp) => {
		// 请求失败
		console.log('请求失败' + resp.status + ',' + resp.statusText);
	});

	// 头部默认显示
	$scope.flag1 = true;
	$scope.flag2 = false;
	$scope.flag3 = false;
	$scope.flag4 = false;

	// 返回
	$scope.goWhere = () => {
		// $state.go('main');
		if ($rootScope.back == 1) {
			// 职位页面
			$state.go('main');
		} else if ($rootScope.back == 2) {
			$state.go('search');
		} else if ($rootScope.back == 3) {
			$state.go('vote');
		}else {
			$state.go('collect');
		}
	};


	//未登录
	if ($rootScope.state == 0) {
		$scope.techShow = false;
		$scope.foot1 = true;
		$scope.foot2 = false;
		$scope.foot3 = false;
	} else {
		$scope.techShow = true;
		$scope.foot1 = false;
		$scope.foot2 = true;
		$scope.foot3 = false;
	}
	// 是否已经投递
	if ($rootScope.back == 3 || $rootScope.back==4) {
		$scope.techShow = false;
		$scope.techShow2 = true;

		$scope.foot1 = false;
		$scope.foot2 = false;
		$scope.foot3 = true;
	}

	// 点击投递
	$scope.techClick = () => {
		$scope.techShow = false;
		$scope.techShow2 = true;

		$scope.foot1 = false;
		$scope.foot2 = false;
		$scope.foot3 = true;
	};
	// 点击取消投递
	$scope.techClick2 = () => {
		$scope.techShow = true;
		$scope.techShow2 = false;

		$scope.foot1 = false;
		$scope.foot2 = true;
		$scope.foot3 = false;
	};


	// 判断是否需要去登录
	$scope.loginGo = () => {
		if ($scope.foot1 == true) {
			// 需要去登陆
			$state.go('login');
		}
	};
}])