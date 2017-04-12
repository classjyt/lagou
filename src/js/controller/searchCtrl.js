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