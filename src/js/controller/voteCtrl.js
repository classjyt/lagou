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