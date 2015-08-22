angular.module('app')
    .controller('cardsCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $colors, $cards, $transactions, $ionicSlideBoxDelegate, $ionicPopup, $ionicListDelegate, $timeout) {
        $scope.colors = $colors.get();
        $scope.cards = $cards.get();
        $scope.getColors = $colors.get;

        //
        $scope.step = 1;
        $scope.back = function () {
            $scope.step = 1;
        };
        $scope.next = function () {
            $scope.step = 2;
        };
        $scope.type = ["Visa", "MasterCard", "American Express", "Diners Club", "Discover", "JCB", "UnionPay", "Maestro", "Forbrugsforeningen", "Dankort"];
        $scope.newCard = {color: $scope.colors[0].name, valid: {y: "", m: ""}, type: "", bank: "", no: "", name: ""};
        $scope.selectColor = function (c) {
            $scope.newCard.color = c.name;
        };
        $scope.isSelectedColor = function (c) {
            return $scope.newCard.color == c.name;
        };
        $scope.addCard = function () {
            $ionicModal.fromTemplateUrl('templates/add-card.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };
        $scope.done = function () {
            if ($cards.check($scope.newCard.no)) {
                $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Card no. already exists'
                });
                return
            }
            $cards.set($scope.newCard);
            $scope.cards = $cards.get();
            $scope.newCard = {
                color: $scope.colors[0].name,
                valid: {y: "", m: ""},
                type: "",
                bank: "",
                no: "",
                name: ""
            };
            $scope.step = 1;
            $ionicSlideBoxDelegate.update();
            $scope.modal.remove();
        };
        var popup = null;
        $scope.more = function () {
            popup = $ionicPopup.show({
                templateUrl: 'templates/card-options.html',
                title: 'Options',
                scope: $scope,
                buttons: []
            });
            $timeout(function () {
                angular.element(document.querySelector(".popup-container")).click(function () {
                    popup.close();
                });
                angular.element(document.querySelector(".popup")).click(function (e) {
                    e.stopPropagation()
                });
            })
        };
        $scope.deleteCard = function () {
            var no = $scope.cards[$ionicSlideBoxDelegate.currentIndex()].no;
            $cards.remove(no);
            $scope.cards = $cards.get();
            $ionicSlideBoxDelegate.update();
            popup.close();
        };
        var transactions = $transactions.get();
        if ($scope.cards.length > 0) {
            var currentNo = $scope.cards[0].no;
            $scope.filteredTransactions = transactions.filter(function (v) {
                return v.no == currentNo
            });
        }

        $scope.cardChanged = function (i) {
            var no = $scope.cards[i].no;
            $scope.filteredTransactions = transactions.filter(function (v) {
                return v.no == no
            })
        }
    });
