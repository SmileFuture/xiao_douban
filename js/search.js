/**
 * Created by smile蓝 on 2017/2/13.
 */

angular.module('movieApp.searchCtrl',[])
.controller('searchCtrl',['$scope','$routeParams','$movieServ',function($scope,$routeParams,$movieServ){

    //暴露{{searchName}}
    $scope.searchName=$routeParams.searchName;


    //实现加载遮罩层，默认为false，显示
    $scope.isloading=false;



    //1. 实现电影列表的展示功能

    //一开始要先定义一个页码数
    $routeParams.pageid=$routeParams.pageid||1;
    //将这个页码数暴露出去
    $scope.pageid=$routeParams.pageid;
    //创建一个电影列表的属性
    $scope.movie = {};


    //定义一个开始位置、
    var start=($routeParams.pageid-1)*10;
    $movieServ.jsonp(
        'https://api.douban.com/v2/movie/search',{
            q: $routeParams.searchName,
            count: 10,
            start: start
        },function(data) {
            $scope.movie=data;
            //暴露出一个总长度、
            $scope.total=data.total;
            //最大页码数
            $scope.Maxpage=Math.ceil(data.total/5);

            //定义上一页
            $scope.prepage=$routeParams.pageid-1;
            if( $routeParams.pageid<=1){
                $scope.prepage=1;
            }
            //定义下一页
            $scope.nexpage=($routeParams.pageid-0)+1;
            if($routeParams.pageid==$scope.Maxpage){
                $scope.nexpage=$scope.Maxpage;
            }

            //实现加载遮罩层，隐藏
            $scope.isloading=true;

            //手动触发脏检查
            $scope.$apply();
        })
}])