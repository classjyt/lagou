'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('positionCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$http({
		method: 'get',
		url: 'data/company.json?id=' + $state.params.id,
		responseType: 'json',
	}).then((resp) => {
		// 请求成功
		$scope.result = resp.data; //数组
		// console.log(resp.data);
	}, (resp) => {
		// 请求失败
		console.log('请求失败' + resp.status + ',' + resp.statusText);
	});


	// 头部默认显示
	$scope.flag1 = false;
	$scope.flag2 = true;
	$scope.flag3 = false;
	$scope.flag4 = false;

	// 返回
	$scope.goWhere = () => {
		$state.go('technique');
	};



	// 显示隐藏
	$scope.flag1 = false;
	$scope.flag2 = true;
	// 样式
	$scope.sele1 = {
		'background-color': '#def8f5',
		'color': 'black'
	}
	$scope.sele2 = {
		'background-color': '#12d5b5',
		'color': 'white'
	}
	$scope.btn1 = $scope.sele2;
	$scope.change1 = () => {
		$scope.btn1 = $scope.sele2;
		$scope.btn2 = $scope.sele1;
		if ($scope.flag1 == true) { //显示的时候不变化
			$scope.flag1 = !$scope.flag1;
			$scope.flag2 = !$scope.flag2;
		}
	};
	$scope.change2 = () => {
		$scope.btn1 = $scope.sele1;
		$scope.btn2 = $scope.sele2;
		if ($scope.flag2 == true) {
			$scope.flag1 = !$scope.flag1;
			$scope.flag2 = !$scope.flag2;
		}
	};
}]);