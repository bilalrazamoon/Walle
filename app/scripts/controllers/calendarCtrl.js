angular.module('Walle')
    .controller('calendarCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $colors, $cards, $transactions, $ionicSlideBoxDelegate) {
        var today = new Date();
        $scope.dateModel = today;
        $scope.transactions = $transactions.get();
        var filterDates = function (date) {
            var current = +new Date(date);
            return $scope.transactions.filter(function (val) {
                var sD = new Date(val.date);
                var snD = +new Date(sD.getFullYear(), sD.getMonth(), sD.getDate());
                var cD = new Date(current);
                var cnD = +new Date(cD.getFullYear(), cD.getMonth(), cD.getDate());
                if (snD == cnD) {
                    return val
                }
            });
        };
        $scope.filteredTransactions = filterDates(today);
        $scope.options = {
            //dates: events,
            dates: $scope.transactions.map(function (v) {
                var d = new Date(v.date);
                return +new Date(d.getFullYear(), d.getMonth(), d.getDate())
            }),
            change: function () {
                $scope.filteredTransactions = filterDates(this.value());
                $scope.$$phase || $scope.$digest();
            },
            month: {
                // template for dates in month view
                content: '# if ($.inArray(+data.date, data.dates) != -1) { #' +
                    //'#= data.value #' +
                '#= data.value #' +
                '<span></span>' +
                '# } else { #' +
                '#= data.value #' +
                '# } #'
            },
            footer: false
        };
        $scope.onSwipeLeft = function () {
            $(".k-calendar").data("kendoCalendar").navigateToFuture();
        };
        $scope.onSwipeRight = function () {
            $(".k-calendar").data("kendoCalendar").navigateToPast();
        };
        /*$scope.getTitle = function () {
            var d = new Date($scope.date);
            return "Calendar"
        };*/
    });
/*[
 {
 category: "Gadgets",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 8)
 },
 {
 category: "Clothes",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 8)
 },
 {
 category: "Food",
 price: "1300",
 status: "profit",
 date: +new Date(today.getFullYear(), today.getMonth(), 8)
 },
 {
 category: "Sales",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 12)
 },
 {
 category: "Gadgets",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 12)
 },
 {
 category: "Clothes",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 12)
 },
 {
 category: "Food",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 15)
 },
 {
 category: "Sales",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 15)
 },
 {
 category: "Gadgets",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 15)
 },
 {
 category: "Gadgets",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 15)
 },
 {
 category: "Clothes",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 25)
 },
 {
 category: "Food",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 25)
 },
 {
 category: "Sales",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 25)
 },
 {
 category: "Clothes",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 25)
 },
 {
 category: "Food",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 25)
 },
 {
 category: "Sales",
 price: "1300",
 status: "loss",
 date: +new Date(today.getFullYear(), today.getMonth(), 25)
 }
 ];*/
