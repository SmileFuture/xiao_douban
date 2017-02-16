/**
 * Created by smile蓝 on 2017/2/13.
 */
    angular.module('movieApp.detailsCtrl',[])
.controller('detailsCtrl',['$scope','$movieServ','$routeParams',function($scope,$movieServ,$routeParams){
    $movieServ.jsonp("https://api.douban.com/v2/movie/subject/"+$routeParams.id,{},function(data){
        $scope.movie={};
        $scope.movie=data;
        console.log(data);
        $scope.$apply();
    })
}])