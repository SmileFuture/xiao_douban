/**
 * Created by smile蓝 on 2017/2/16.
 */
angular.module('movieApp.directive',[])
.directive('direActive',function(){
    return{
        link:function(scope,element){
            element.on('click',function(){
                element.parent().find('li').removeClass('active');
                element.addClass('active');
            })

        }
    }
})