angular.module('Walle')
  .directive('transaction', function () {
    return {
      restrict: 'E',
      scope: {
        t: '=transaction'
      },
      template: '<ion-item class="item" ng-click="">' +
      '<div class="cat" ng-style="{\'background-color\':t.cat.color}">' +
      '<i class="icon" ng-class="t.cat.icon"></i></div><h2>{{t.cat.val}}</h2>' +
      '<span class="price" ng-class="{\'balanced\':t.sign==\'+\',\'assertive\':t.sign==\'-\'}">{{t.sign}} {{t.price | currency}}</span>' +
      '<p>{{getDate(t.date)}}</p>' +
      '</ion-item>',
      link: function ($scope) {
        $scope.getDate = function (d) {
          return moment(d).calendar()
        };
      }
    }
  });
