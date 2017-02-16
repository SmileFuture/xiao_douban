/**
 * Created by smile蓝 on 2017/2/11.
 */

angular.module('movieApp.service',[])
.service("$movieServ",function(){
    // json的参数 url表示传入进来的API地址 params表示API需要传入的参数 例如 start=0起始电影 callback就是回调函数  success(function (data) {})
    this.jsonp = function(url, params, callback) {
        //1.动态创建一个script标签
        var script = document.createElement('script');
        //2. 拼接url https://api.douban.com/v2/movie/in_theaters?count=1&start=0&callback=aa
        url += '?';
        for (var key in params) {
            url += key + '=' + params[key] + '&';
        }
        url += 'callback=aa';
        //3.把url设置到script的src上
        script.src = url;
        //4.把script添加到页面上
        document.body.appendChild(script);
        //5.在window里面创建一个aa全局函数
        // aa({数据})
        window.aa = function(data) { //形参
            //  6.在函数里面能拿到数据 然后传给 success的回调函数作为参数
            callback(data); //实参
            //7. 获取完成数据后删除script标签
            document.body.removeChild(script);
        }
    }
})