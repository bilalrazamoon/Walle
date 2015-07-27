angular.module('app')
    .controller('settingCtrl', function ($scope, $app) {
        $scope.currencies=['USD','PKR','EURO'];
        $scope.setting={currency:'USD'}
    });