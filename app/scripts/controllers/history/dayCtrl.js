angular.module('Walle')
  .controller('dayCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $ionicPopup, $categories, $transactions, $filters) {
    var transactions = $transactions.get();
    var temp =[];
    temp=$filters.sign(transactions);
    var dates=$filters.cat(temp);
    dates=$filters.day(dates);
    $scope.transactions=dates;
    $scope.graph = {
      options: {segmentShowStroke : false},
      data: dates.map(function(v){return v.price}),
      colours: dates.map(function(v){return v.cat.color}),
      labels: dates.map(function(v){return v.cat.val})
    };
  });
