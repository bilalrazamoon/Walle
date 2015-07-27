angular.module('app')
    .controller('calendarCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $colors, $cards, $ionicSlideBoxDelegate) {
        var today = new Date();
        $scope.current=+today;
        $scope.dateModel=today;
        $scope.transactions = [
            {category: "Gadgets", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 8)},
            {category: "Clothes", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 8)},
            {category: "Food", price: "1300", status:"profit", date: +new Date(today.getFullYear(), today.getMonth(), 8)},
            {category: "Sales", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 12)},
            {category: "Gadgets", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 12)},
            {category: "Clothes", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 12)},
            {category: "Food", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 15)},
            {category: "Sales", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 15)},
            {category: "Gadgets", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 15)},
            {category: "Gadgets", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 15)},
            {category: "Clothes", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 25)},
            {category: "Food", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 25)},
            {category: "Sales", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 25)},
            {category: "Clothes", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 25)},
            {category: "Food", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 25)},
            {category: "Sales", price: "1300", status:"loss", date: +new Date(today.getFullYear(), today.getMonth(), 25)}
        ];
        var events = [
            +new Date(today.getFullYear(), today.getMonth(), 8),
            +new Date(today.getFullYear(), today.getMonth(), 8),
            +new Date(today.getFullYear(), today.getMonth(), 12),
            +new Date(today.getFullYear(), today.getMonth(), 24),
            +new Date(today.getFullYear(), today.getMonth() + 1, 6),
            +new Date(today.getFullYear(), today.getMonth() + 1, 7),
            +new Date(today.getFullYear(), today.getMonth() + 1, 25),
            +new Date(today.getFullYear(), today.getMonth() + 1, 27),
            +new Date(today.getFullYear(), today.getMonth() - 1, 3),
            +new Date(today.getFullYear(), today.getMonth() - 1, 5),
            +new Date(today.getFullYear(), today.getMonth() - 2, 22),
            +new Date(today.getFullYear(), today.getMonth() - 2, 27)
        ];
        $scope.filterFunc= function (val) {
            var sD = new Date(val.date);
            var snD = +new Date(sD.getFullYear(), sD.getMonth(), sD.getDay());
            var cD = new Date($scope.current);
            var cnD = +new Date(cD.getFullYear(), cD.getMonth(), cD.getDay());
            if(nD==cnD){
                return true
            }
            return false
        };
        //console.log(events.map(function(v){return new Date(v).getDate()}))
        $scope.options = {
            //dates: events,
            dates: $scope.transactions.map(function (v) {
                return v.date
            }),
            change: function () {
                $scope.current=+new Date(this.value())
                console.log($scope.current)
            },
            month: {
                // template for dates in month view
                content: '# if ($.inArray(+data.date, data.dates) != -1) { #' +
                //'#= data.value #' +
                '#= data.value #' +
                '<span></span>'+
                '# } else { #' +
                '#= data.value #' +
                '# } #'
            },
            footer: false
        };
        $scope.logDate = function (v) {
            console.log(v)
        };
        $scope.onSwipeLeft= function () {
            $(".k-calendar").data("kendoCalendar").navigateToFuture();
        };
        $scope.onSwipeRight= function () {
            $(".k-calendar").data("kendoCalendar").navigateToPast();
        };
        $scope.getTitle= function () {
            var d=new Date($scope.date);
            return "Calendar"
        };
    });
