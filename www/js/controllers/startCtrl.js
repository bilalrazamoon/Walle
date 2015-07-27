angular.module('app')
    .controller('startCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $ionicPlatform, $app) {
        var start = this;
        start.appName=$app.name;
        $ionicPlatform.ready(function () {
            if(window.StatusBar.backgroundColorByHexString) StatusBar.backgroundColorByHexString($app.primaryColor);
        });
        $scope.slideChanged = function (i) {
            console.log(i)
        };
        $scope.done=function(){
            localStorage.setItem('start', true);
            $state.go('app.home')
        };
        $scope.isPre=function(){
            return $ionicSlideBoxDelegate.currentIndex() != 0
        };
        $scope.isNext=function(){
            return $ionicSlideBoxDelegate.currentIndex()+1 != $ionicSlideBoxDelegate.slidesCount()
        };
        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };
        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };
        $scope.onDragLeft = function () {
            $scope.done()
        };
    });
