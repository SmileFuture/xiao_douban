angular.module('movieApp.indexCrtl',[])
    .controller('indexCrtl',['$scope','$location',function($scope,$location){
        $scope.searchName="";
        $scope.search=function(){

            $location.url('/search/'+$scope.searchName);
        }
    }])