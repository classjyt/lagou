'use strict';

angular.module('app',['ui.router','ngCookies']);




//全局作用域(根作用域)
angular.module('app').run(['$rootScope', function($rootScope){
    // cookies操作
    $rootScope.cook=1;
    // 0表示未登录
    $rootScope.state=0;
    // 返回判断（职位1or搜索2个人3）
    $rootScope.back=1;

    $rootScope.headImage='images/head.JPG';
    $rootScope.star1Image='images/star.png';
    $rootScope.star2Image='images/star-active.png';
 }]);
'use strict';

/**
 *  $urlRouterProvider  :  用来配置路由重定向
 *  $stateProvider： 用来配置路由
 *  $state:  用来显示路由状态信息 以及一些方法
 *  通过config 定义
 *  
 */

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	})
	.state('technique',{
		url:'/technique/:id',
		templateUrl:'view/technique.html',
		controller:'techniqueCtrl'
	})
	.state('position',{
		url:'/position/:id',
		templateUrl:'view/position.html',
		controller:'positionCtrl'
	})
	.state('search',{
		url:'/search',
		templateUrl:'view/search.html',
		controller:'searchCtrl'
	})
	.state('my',{
		url:'/my',
		templateUrl:'view/my.html',
		controller:'myCtrl'
	})
	.state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginCtrl'
	})
	.state('regist',{
		url:'/regist',
		templateUrl:'view/regist.html',
		controller:'registCtrl'
	})
	.state('vote',{
		url:'/vote',
		templateUrl:'view/vote.html',
		controller:'voteCtrl'
	})
	.state('collect',{
		url:'/collect',
		templateUrl:'view/collect.html',
		controller:'collectCtrl'
	})	
	;
	$urlRouterProvider.otherwise('main');	
}])
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
'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('registCtrl', ['$scope', '$http', '$cookies', function($scope, $http, $cookies) {
    // 注册验证
    // 手机号验证
    $scope.check1 = false;
    $scope.check2 = false;
    $scope.phoneCheck = () => {
        var reg = /^1[34578]\d{9}$/;
        var phonenumber = $scope.phoneNum;
        if (reg.test(phonenumber)) {
            // 正确
            document.getElementById('phoneCheck').innerHTML = '✅';
            $scope.check1 = true;
        } else {
            // 错误
            $scope.check1 = true;
        }
    };
    $scope.focusCheck1 = () => {
        $scope.check1 = false;
    };
    // 密码验证
    $scope.pwdCheck = () => {
        var reg = /^[0-9_a-zA-Z]{6,20}$/;
        var pwd = $scope.pwd;
        if (reg.test(pwd)) {
            // 正确
            document.getElementById('pwdCheck').innerHTML = '✅';
            $scope.check2 = true;
        } else {
            // 错误
            $scope.check2 = true;
        }
    };
    $scope.focusCheck2 = () => {
        $scope.check2 = false;
    };

    // 发送短信验证码
    $scope.sendCode = () => {
        var count = 60;

        function change() {
            document.getElementById('sendMes').innerHTML = count;
            count--;
            if (count == -1) {
                $scope.code = Math.floor(Math.random() * 9000) + 1000;
                document.getElementById('sendMes').innerHTML = '发送短信';
                clearInterval(timer);
            }
        }
        var timer = setInterval(change, 1000);
    };
    // 注册验证结束后将数据存入cookies中(以一个对象进行存储)
    $scope.regist = () => {
    	// console.log('点击成功');
        // console.log($rootScope.cook);
        $cookies.putObject('register', { phone: $scope.phoneNum, pwd: $scope.pwd });
        // console.log($cookies.getObject('register'));
        // $cookies.put('phone','$scope.phoneNum');
        // $cookies.put('pwd','$scope.pwd');
    };
}])

'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('searchCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
    // 进入搜索页面状态改变
    $rootScope.back = 2;

    // 初始化显示
    $scope.ulShow1 = true;
    $scope.ulShow2 = false;
    $scope.ulShow3 = false;

    $http({
        method: 'get',
        url: 'data/positionList.json',
        responseType: 'json',
    }).then((resp) => {
        // 请求成功
        $scope.result = resp.data; //数组
    }, (resp) => {
        // 请求失败
        console.log('请求失败' + resp.status + ',' + resp.statusText);
    });

    // list默认显示
    $scope.ul1 = true;
    $scope.ul2 = false;



    // footer底部css样式变化操作
    $scope.css1 = {
        'background-color': 'white',
    }
    $scope.css2 = {
        'background-color': '#dbf9f4',
        'color': '#01c5be'
    }
    $scope.cls1 = $scope.css1;
    $scope.cls2 = $scope.css2;
    $scope.cls3 = $scope.css1;

    // 下划线、显示
    $scope.line1 = {
        'border-bottom': '0.05rem solid #eeeeee'
    }
    $scope.line2 = {
        'border-bottom': '0.05rem solid #12d5b5'
    }

    // 背景以及显示内容默认隐藏
    $scope.com1 = false;
    $scope.com2 = false;

    $scope.city1 = () => {
        $scope.bor1 = $scope.line2;
        $scope.bor2 = $scope.line1;
        $scope.bor3 = $scope.line1;
        // 城市http请求
        $http({
            method: 'get',
            url: 'data/city.json',
            responseType: 'json',
        }).then((resp) => {
            // 请求成功
            $scope.city = resp.data; //数组
        }, (resp) => {
            // 请求失败
            console.log('请求失败' + resp.status + ',' + resp.statusText);
        });
        $scope.com1 = !$scope.com1;
        $scope.com2 = !$scope.com2;
    }
    $scope.salary = () => {
        $scope.bor1 = $scope.line1;
        $scope.bor2 = $scope.line2;
        $scope.bor3 = $scope.line1;

        // 薪水http请求
        $http({
            method: 'get',
            url: 'data/salary.json',
            responseType: 'json',
        }).then((resp) => {
            // 请求成功
            $scope.city = resp.data; //数组
        }, (resp) => {
            // 请求失败
            console.log('请求失败' + resp.status + ',' + resp.statusText);
        });
        $scope.com1 = !$scope.com1;
        $scope.com2 = !$scope.com2;
    }
    $scope.scale = () => {
            $scope.bor1 = $scope.line1;
            $scope.bor2 = $scope.line1;
            $scope.bor3 = $scope.line2;

            // 公司规模http请求
            $http({
                method: 'get',
                url: 'data/scale.json',
                responseType: 'json',
            }).then((resp) => {
                // 请求成功
                $scope.city = resp.data; //数组
            }, (resp) => {
                // 请求失败
                console.log('请求失败' + resp.status + ',' + resp.statusText);
            });
            $scope.com1 = !$scope.com1;
            $scope.com2 = !$scope.com2;
        }
        // 取消隐藏
    $scope.hide = () => {
            $scope.com1 = !$scope.com1;
            $scope.com2 = !$scope.com2;

            $scope.bor1 = $scope.line1;
            $scope.bor2 = $scope.line1;
            $scope.bor3 = $scope.line1;
        }
        // 点击背景阴影消失
    $scope.clickBacHide = () => {
        $scope.com1 = !$scope.com1;
        $scope.com2 = !$scope.com2;

        $scope.bor1 = $scope.line1;
        $scope.bor2 = $scope.line1;
        $scope.bor3 = $scope.line1;
    };
}])
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
'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('voteCtrl', ['$scope', '$http', '$cookies', '$state', '$rootScope', function($scope, $http, $cookies, $state, $rootScope) {

    $rootScope.back=3;

    // 头部默认显示
    $scope.flag1 = false;
    $scope.flag2 = false;
    $scope.flag3 = true;
    $scope.flag4 = false;

    // 返回
    $scope.goWhere = () => {
        $state.go('my');
    };

    // 下划线、显示
    $scope.line1 = {
        'border-bottom': '0.05rem solid #eeeeee'
    }
    $scope.line2 = {
        'border-bottom': '0.05rem solid #12d5b5'
    }

    // 内容默认显示
    $scope.bor1 = $scope.line2;
    $scope.bor2 = $scope.line1;
    $scope.bor3 = $scope.line1;

    // 初始化显示
    $scope.ulShow1 = true;
    $scope.ulShow2 = false;
    $scope.ulShow3 = false;

    // 点击全部发送的http请求
    $http({
        method: 'get',
        url: 'data/myPost.json',
        responseType: 'json',
    }).then((resp) => {
        // 请求成功
        $scope.result = resp.data; //数组
    }, (resp) => {
        // 请求失败
        console.log('请求失败' + resp.status + ',' + resp.statusText);
    });

    // list默认显示
    $scope.ul1 = false;
    $scope.ul2 = true;



    $scope.city1 = () => {
        $scope.bor1 = $scope.line2;
        $scope.bor2 = $scope.line1;
        $scope.bor3 = $scope.line1;

        // 初始化显示
        $scope.ulShow1 = true;
        $scope.ulShow2 = false;
        $scope.ulShow3 = false;

        // 点击全部发送的http请求
        $http({
            method: 'get',
            url: 'data/myPost.json',
            responseType: 'json',
        }).then((resp) => {
            // 请求成功
            $scope.result = resp.data; //数组
        }, (resp) => {
            // 请求失败
            console.log('请求失败' + resp.status + ',' + resp.statusText);
        });
    };
    $scope.salary = () => {
        $scope.bor1 = $scope.line1;
        $scope.bor2 = $scope.line2;
        $scope.bor3 = $scope.line1;


        // 初始化显示
        $scope.ulShow1 = false;
        $scope.ulShow2 = true;
        $scope.ulShow3 = false;

        // 点击全部发送的http请求
        $http({
            method: 'get',
            url: 'data/myPost.json',
            responseType: 'json',
        }).then((resp) => {
            // 请求成功
            $scope.result = resp.data; //数组
            // $scope.data = $scope.resut[0];
        }, (resp) => {
            // 请求失败
            console.log('请求失败' + resp.status + ',' + resp.statusText);
        });
    };
    $scope.scale = () => {
        $scope.bor1 = $scope.line1;
        $scope.bor2 = $scope.line1;
        $scope.bor3 = $scope.line2;

        // 初始化显示
        $scope.ulShow1 = false;
        $scope.ulShow2 = false;
        $scope.ulShow3 = true;

        // 点击全部发送的http请求
        $http({
            method: 'get',
            url: 'data/myPost.json',
            responseType: 'json',
        }).then((resp) => {
            // 请求成功
            $scope.result = resp.data; //数组
            // $scope.data = $scope.resut[1];
        }, (resp) => {
            // 请求失败
            console.log('请求失败' + resp.status + ',' + resp.statusText);
        });
    };
}])
'use strict';

angular.module('app').directive('appBackground', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/background.html'
	};
}])
'use strict';

angular.module('app').directive('appCommonList', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/common-list.html'
	};
}])
'use strict';

angular.module('app').directive('company', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/company.html'
	};
}])
'use strict';

angular.module('app').directive('appContentPosition', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/content-position.html'
	};
}])
'use strict';

angular.module('app').directive('appPositionListTechnique', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/content-technique.html'
	};
}])
'use strict';

angular.module('app').directive('appPositionList', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/content.html'
	};
}])
'use strict';

angular.module('app').directive('appFooterTechnique', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/footer-technique.html'
	};
}])
'use strict';

angular.module('app').directive('appFooter', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/footer.html'
	};
}])
'use strict';

angular.module('app').directive('appHeadPosition', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/head-position.html'
	};
}])
'use strict';

angular.module('app').directive('appHeadSearch', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/head-search.html'
	};
}])
'use strict';

angular.module('app').directive('appHeadTechnique', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/head-technique.html'
	};
}])
'use strict';

angular.module('app').directive('appHead', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/head.html'
	};
}])

'use strict';

angular.module('app').directive('appListSearch', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/list-search.html'
	};
}])
'use strict';

angular.module('app').directive('loginBody', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/login-body.html'
	};
}])
'use strict';

angular.module('app').directive('appLogin', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/login-real.html'
	};
}])
'use strict';

angular.module('app').directive('appRegist', [function () {
	return {
		restrict: 'A',
		replace: true, //只能有一个根元素
		templateUrl: 'view/template/regist-real.html'
	};
}])