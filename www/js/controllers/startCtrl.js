angular.module('app')
    .controller('startCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $ionicPlatform, $app) {
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
        $scope.getColor= function () {
            if($ionicSlideBoxDelegate.currentIndex()==0){
                return '#42a190'
            }
            else if($ionicSlideBoxDelegate.currentIndex()==1){
                return '#63a3b4'
            }
            else if($ionicSlideBoxDelegate.currentIndex()==2){
                return '#c7524f'
            }
            else if($ionicSlideBoxDelegate.currentIndex()==3){
                return '#d1a545'
            }
        }
    });
