angular.module('app')
    .controller('calendarCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $colors, $cards, $ionicSlideBoxDelegate) {
        var today = new Date();
        $scope.current = +today;
        $scope.dateModel = today;
        $scope.transactions = [
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
        ];
        $scope.filteredTransactions = [];
        /*$scope.filterFunc = function (val) {
            var sD = new Date(val.date);
            var snD = +new Date(sD.getFullYear(), sD.getMonth(), sD.getDate());
            var cD = new Date($scope.current);
            var cnD = +new Date(cD.getFullYear(), cD.getMonth(), cD.getDate());
            if (snD == cnD) {
                return true
            }
            return false
        };*/
        //console.log(events.map(function(v){return new Date(v).getDate()}))
        $scope.options = {
            //dates: events,
            dates: $scope.transactions.map(function (v) {
                return v.date
            }),
            change: function () {
                var current = +new Date(this.value());
                $scope.filteredTransactions = $scope.transactions.filter(function (val) {
                    var sD = new Date(val.date);
                    var snD = +new Date(sD.getFullYear(), sD.getMonth(), sD.getDate());
                    var cD = new Date(current);
                    var cnD = +new Date(cD.getFullYear(), cD.getMonth(), cD.getDate());
                    if (snD == cnD) {
                        return val
                    }
                });
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
        $scope.logDate = function (v) {
            console.log(v)
        };
        $scope.onSwipeLeft = function () {
            $(".k-calendar").data("kendoCalendar").navigateToFuture();
        };
        $scope.onSwipeRight = function () {
            $(".k-calendar").data("kendoCalendar").navigateToPast();
        };
        $scope.getTitle = function () {
            var d = new Date($scope.date);
            return "Calendar"
        };
    });
