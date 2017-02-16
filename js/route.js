/**
 * Created by smile蓝 on 2017/2/11.
 */

angular.module('movieApp.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'tmps/index-tmp.html'

            }).when('/nowplaying/:pageid?', {
                templateUrl: 'tmps/nowplaying-tmp.html',
                controller:'nowplayingCtrl'
            }).when('/later/:pageid?',
            {
                templateUrl: 'tmps/later-tmp.html',
                controller:'laterCtrl'
            }).when('/top250/:pageid?',
            {
                templateUrl: 'tmps/top250-tmp.html',
                controller:'top250Ctrl'
            }).when('/details/:id?',
            {
                templateUrl: 'tmps/details-tmp.html',
                controller:'detailsCtrl'
            }).when('/search/:searchName?/:pageid?',
            {
                templateUrl: 'tmps/search.tmp.html',
                controller:'searchCtrl'
            })

    }]);



