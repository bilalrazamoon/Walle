angular.module('app')
  .controller('homeCtrl', function ($app, $scope, $ionicPopover, $ionicModal) {
    var home = this;
    var categories = [
      {id: 1, val: "Gadgets", color:"yellow"},
      {id: 2, val: "Food", color: "indigo"},
      {id: 3, val: "Clothes", color:"green"},
      {id: 5, val: "Sales on Creative Market", color:"pink"},
      {id: 5, val: "Jewelry", color:"purple"},
      {id: 5, val: "Activities", color:"orange"},
      {id: 5, val: "Sports", color:"red"}
    ];
    $scope.transactions = [
      {category: "Gadgets", price: "1300", status:"loss"},
      {category: "Clothes", price: "1300", status:"loss"},
      {category: "Food", price: "1300", status:"profit"},
      {category: "Sales", price: "1300", status:"loss"},
      {category: "Gadgets", price: "1300", status:"loss"},
      {category: "Clothes", price: "1300", status:"loss"},
      {category: "Food", price: "1300", status:"loss"},
      {category: "Sales", price: "1300", status:"loss"},
      {category: "Gadgets", price: "1300", status:"loss"},
      {category: "Gadgets", price: "1300", status:"loss"},
      {category: "Clothes", price: "1300", status:"loss"},
      {category: "Food", price: "1300", status:"loss"},
      {category: "Sales", price: "1300", status:"loss"},
      {category: "Clothes", price: "1300", status:"loss"},
      {category: "Food", price: "1300", status:"loss"},
      {category: "Sales", price: "1300", status:"loss"}
    ];
    $scope.options=['All Transactions','MCB ****1234','HBL ****1234'];
    $scope.option=$scope.options[0];
    $scope.selectOption=function (o) {
      $scope.option=o;
      $scope.popover.hide();
    }
    $scope.isSelectedOption=function (o) {
      return $scope.option==o;
    }
    var template = '<ion-popover-view><ion-content><ion-item ng-click="selectOption(o)" ng-repeat="o in options" ng-class="{\'active\':isSelectedOption(o)}">{{o}}</ion-item></ion-content></ion-popover-view>';
    $scope.popover = $ionicPopover.fromTemplate(template, {
     scope: $scope
    });
    $scope.addTransaction=function () {
      $ionicModal.fromTemplateUrl('templates/add-transaction.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
    }
  })
