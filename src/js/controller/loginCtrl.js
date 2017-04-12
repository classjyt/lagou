'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('loginCtrl', ['$scope', '$http', '$cookies','$state','$rootScope', function($scope, $http, $cookies,$state,$rootScope) {
	// 登录验证
	$scope.check = false;
	$scope.loginCheck = () => {
		if ($scope.loginPhone === $cookies.getObject('register').phone && $scope.loginPwd === $cookies.getObject('register').pwd) {
			// 登陆成功状态变为1
			$rootScope.state=1;
			//登陆成功
			$state.go('main');

		}else{
			//登陆失败
			$scope.check = true;
		}
	};
}])