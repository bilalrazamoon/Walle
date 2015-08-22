angular.module('Walle')
    .controller('settingCtrl', function ($scope, $app, $state) {
        //$scope.currencies=['USD','PKR','EURO'];
        $scope.setting = {
            passcode: ""
        };
        if (localStorage.getItem('setting') == null) {
            localStorage.setItem('setting', JSON.stringify($scope.setting))
        } else {
            $scope.setting = JSON.parse(localStorage.getItem('setting'));
        }
        $scope.flag=false;
        if($scope.setting.passcode!=""){
            $scope.flag=true;
        }
        $scope.changePasscode= function (flag) {
            if(!flag){
                $scope.setting.passcode="";
                localStorage.setItem('setting', JSON.stringify($scope.setting));
            }
        };
        $scope.setPasscode = function (flag) {
            if (flag) $state.go('passcode',{mode:'edit'})
        }
    });
