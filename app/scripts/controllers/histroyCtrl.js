angular.module('Walle')
  .controller('historyCtrl', function ($app, $scope, $ionicPopover, $state) {
    $scope.options = ['Week', 'Month'];
    if($state.current.url.split('/')[1]=='week'){
      $scope.option = $scope.options[0];
    }else if($state.current.url.split('/')[1]=='month'){
      $scope.option = $scope.options[1];
    }
    $scope.selectOption = function (o) {
      $scope.option = o;
      if($scope.option==$scope.options[0]){
        $state.go('app.history.home');
      }else if($scope.option==$scope.options[1]){
        $state.go('app.history.month');
      }
      $scope.popover.hide();
    };
    $scope.isSelectedOption = function (o) {
      return $scope.option == o;
    };
    var template = '<ion-popover-view style="height: 116px;"><ion-content>' +
      '<ion-item ng-click="selectOption(o)" ng-repeat="o in options" ng-class="{\'active\':isSelectedOption(o)}">History ({{o}})</ion-item>' +
      '</ion-content></ion-popover-view>';
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });
  });
