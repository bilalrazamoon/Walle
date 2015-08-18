angular.module('app')
    .factory('$message', function ($ionicLoading,$timeout) {
        return {
            show: function (msg,dur) {
                angular.element('body').addClass('message');
                var dur=dur?dur:'3000';
                $ionicLoading.show({
                    template: msg
                });
                $timeout(function () {
                    angular.element('body').removeClass('message');
                    $ionicLoading.hide()
                },dur)
            }
        }
    });