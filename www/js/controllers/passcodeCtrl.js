angular.module('app')
    .controller('passcodeCtrl', function ($scope, $ionicHistory, $state, $stateParams, $rootScope, $timeout) {
        $scope.mode = $stateParams.mode;
        $scope.setting = {
            passcode: ""
        };
        if (localStorage.getItem('setting') == null) {
            localStorage.setItem('setting', JSON.stringify($scope.setting))
        } else {
            $scope.setting = JSON.parse(localStorage.getItem('setting'));
        }
        $scope.setPasscode = function (val) {
            if (String(val).length == 4) {
                localStorage.setItem('setting', JSON.stringify($scope.setting));
                $ionicHistory.goBack();
            }
        };
        $scope.applyPasscode = function (val) {
            if (val === $scope.setting.passcode) {
                $rootScope.passcode = true;
                $state.go('app.home')
            }
        };
        $scope.passcode = "";
        $scope.set = function (v) {
            $scope.passcode += String(v);
            $timeout(function () {
                if ($scope.passcode.length == 4) {
                    if ($scope.mode == 'edit') {
                        $scope.setting.passcode=angular.copy($scope.passcode);
                        localStorage.setItem('setting', JSON.stringify($scope.setting));
                        $ionicHistory.goBack();
                    }
                    if ($scope.mode == 'apply' && $scope.passcode == $scope.setting.passcode) {
                        $rootScope.passcode = true;
                        $state.go('app.home')
                    }
                }
            },100)
        };
        $scope.clear= function () {
            $scope.passcode=$scope.passcode.slice(0,$scope.passcode.length-1);
        }
    });