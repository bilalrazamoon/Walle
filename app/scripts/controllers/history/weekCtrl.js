angular.module('Walle')
  .controller('weekCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $ionicPopup, $categories, $transactions, $filters) {
    var transactions = $transactions.get();
    var temp = [];
    temp = $filters.sign(transactions);
    var dates = $filters.week(temp);
    $scope.transactions = $filters.cat(dates);
    var data = $filters.weeks($scope.transactions);

    $scope.graph = {
      options: {},
      data: [
        data
      ],
      series: ['one'],
      colours: ['#247CFF'],
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
  });
