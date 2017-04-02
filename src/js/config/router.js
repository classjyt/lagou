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