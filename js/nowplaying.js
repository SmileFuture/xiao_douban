/**
 * Created by smile蓝 on 2017/2/11.
 */

angular.module('movieApp.nowplayingCtrl',[])
    .controller("nowplayingCtrl",['$scope','$movieServ','$routeParams',function($scope,$movieServ,$routeParams){

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
            'https://api.douban.com/v2/movie/in_theaters',{
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



    // 实现分页:
    // 点击上一页:页码减一
    // 点击下一页:页码加一
    // 实现上一页和下一页的切换都是通过改变路由的参数,通过传递不同的页码数来获取不同的数据
    // 请求第一页的数据:  count: 5, start: 0    count: 5, start: 5    count: 5, start: 10
    // 得出规律,count不用变,变得是start,     (pageid-1)*5
    // 定义两个全局变量 prepage=pageid-1   nexpage=pageid+1
    // if(pageid==1){prepage=pageid}   if(pageid==Maxpage){nexpage=Maxpage}
    // 定义一个最大页码数 Maxpage=Math.ceil(data.total,5)
    // 定义一个总条数 data.total