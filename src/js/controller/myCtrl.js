'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('myCtrl', ['$scope','$http','$rootScope','$state', function($scope,$http,$rootScope,$state){

	$scope.headImg=$rootScope.headImage;
	$http({
		method:'get',
		url:'data/positionList.json',
		responseType:'json',
	}).then((resp) => {
		// 请求成功
		$scope.result=resp.data; //数组
	},(resp) => {
		// 请求失败
		console.log('请求失败'+resp.status+','+resp.statusText);
	});

	//未登录
	if($rootScope.state==0){
		$scope.noLogin=true;
		$scope.haveLogin=false;
	}else{
		$scope.noLogin=false;
		$scope.haveLogin=true;
	}


	// 退出登录
	$scope.exitLogin=() => {
		// 退出登录状态变为0
		$rootScope.state=0;
		// $state.go('my');
		window.location.reload();
	};







	// footer底部css样式变化操作
	$scope.css1={
		'background-color': 'white',
	}
	$scope.css2={
		'background-color': '#dbf9f4',
		'color':'#01c5be'
	}
	$scope.cls1=$scope.css1;
	$scope.cls2=$scope.css1;
	$scope.cls3=$scope.css2;
}])