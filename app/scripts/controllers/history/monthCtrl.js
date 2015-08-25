angular.module('Walle')
  .controller('monthCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $ionicPopup, $categories, $transactions, $filters) {
    var transactions = $transactions.get();
    var temp = [];
    temp = $filters.sign(transactions);
    var dates = $filters.month(temp);
    dates=$filters.cat(dates);
    $scope.transactions = dates;
    $scope.graph = {
      options: {segmentShowStroke : false},
      data: dates.map(function(v){return v.price}),
      colours: dates.map(function(v){return v.cat.color}),
      labels: dates.map(function(v){return v.cat.val})
    };
   /* $scope.graph = {
      options: {segmentShowStroke : false},
      data: [
        dates
      ],
      colours: ['#247CFF'],
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    };*/
  });
