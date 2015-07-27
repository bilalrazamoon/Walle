angular.module('app')
    .controller('cardsCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $colors, $cards, $ionicSlideBoxDelegate) {
        $scope.colors=$colors.get();
        $scope.cards = $cards.get();
        $scope.getColors=$colors.get;


        //
        $scope.step=1;
        $scope.back= function () {
            $scope.step=1;
        };
        $scope.next= function () {
            $scope.step=2;
        };
        $scope.banks=['citi','hbl','mcb'];
        $scope.type=['Card','Master Card'];
        $scope.newCard={};
        $scope.selectColor= function (c) {
            $scope.newCard.color= c.name;
        };
        $scope.isSelectedColor= function (c) {
            return $scope.newCard.color==c.name;
        };
        $scope.selectColor($scope.colors[0]);
        $scope.addCard= function () {
            $ionicModal.fromTemplateUrl('templates/add-card.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };
        $scope.done= function () {
            $cards.set($scope.newCard);
            $scope.modal.remove();
            $scope.newCard={};
            $scope.step=1;
            $scope.selectColor($scope.colors[0]);
            $scope.cards=$cards.get();
            $ionicSlideBoxDelegate.update();
        }
    });
