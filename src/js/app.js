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

    $rootScope.headImage='../images/head.JPG';
    $rootScope.star1Image='../images/star.png';
    $rootScope.star2Image='../images/star-active.png';
 }]);