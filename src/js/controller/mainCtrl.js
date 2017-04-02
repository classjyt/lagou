'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('mainCtrl', ['$scope','$http','$cookies','$rootScope', function($scope,$http,$cookies,$rootScope){

	// 初始化cookies数据，防止进入main页面报错
    $cookies.putObject('register', { phone: '13218093602', pwd: '123456' });
    $rootScope.back=1;

    // 初始化显示
    $scope.ulShow1=true;
    $scope.ulShow2=false;
    $scope.ulShow3=false;

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

	// 获取注册name
	$scope.userName='老铁';




	//未登录
	if($rootScope.state==0){
		$scope.hello=false;
		$scope.pos=true;
		$scope.goLo=true;
	}else{
		$scope.hello=true;
		$scope.pos=false;
		$scope.goLo=false;
	}

	// footer底部css样式变化操作
	$scope.css1={
		'background-color': 'white',
	}
	$scope.css2={
		'background-color': '#dbf9f4',
		'color':'#01c5be'
	}
	$scope.cls1=$scope.css2;
	$scope.cls2=$scope.css1;
	$scope.cls3=$scope.css1;
}])