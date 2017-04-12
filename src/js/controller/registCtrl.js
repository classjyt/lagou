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
