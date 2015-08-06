angular.module('app')
    .controller('homeCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $ionicPopup, $categories, $transactions) {
        var home = this;
        $scope.categories = $categories.get();
        $scope.transactions = [
            {category: "Gadgets", price: "1300", status: "loss"},
            {category: "Clothes", price: "1300", status: "loss"},
            {category: "Food", price: "1300", status: "profit"},
            {category: "Sales", price: "1300", status: "loss"},
            {category: "Gadgets", price: "1300", status: "loss"},
            {category: "Clothes", price: "1300", status: "loss"},
            {category: "Food", price: "1300", status: "loss"},
            {category: "Sales", price: "1300", status: "loss"},
            {category: "Gadgets", price: "1300", status: "loss"},
            {category: "Gadgets", price: "1300", status: "loss"},
            {category: "Clothes", price: "1300", status: "loss"},
            {category: "Food", price: "1300", status: "loss"},
            {category: "Sales", price: "1300", status: "loss"},
            {category: "Clothes", price: "1300", status: "loss"},
            {category: "Food", price: "1300", status: "loss"},
            {category: "Sales", price: "1300", status: "loss"}
        ];
        $scope.newTran={};
        $scope.newTran.cat="";
        $scope.newTran.date=new Date();
        $scope.selectCat= function (cat) {
            $scope.newTran.cat=cat;
        };
        $scope.IsCat= function (cat) {
            return $scope.newTran.cat==cat;
        };
        $scope.getCat= function (id) {
            if(id)
                return $categories.get(id).val
        };
        $scope.options = ['All Transactions', 'MCB ****1234', 'HBL ****1234'];
        $scope.option = $scope.options[0];
        $scope.selectOption = function (o) {
            $scope.option = o;
            $scope.popover.hide();
        };
        $scope.isSelectedOption = function (o) {
            return $scope.option == o;
        };
        var template = '<ion-popover-view><ion-content><ion-item ng-click="selectOption(o)" ng-repeat="o in options" ng-class="{\'active\':isSelectedOption(o)}">{{o}}</ion-item></ion-content></ion-popover-view>';
        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });

        $scope.addTransaction = function () {
            $ionicModal.fromTemplateUrl('templates/add-transaction.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
                $scope.modal.show();
            });
        };
        $scope.showCat = function () {
            $ionicPopup.show({
                templateUrl: 'templates/categories.html',
                title: 'Categories',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.newTran.cat) {
                                e.preventDefault();
                            } else {
                                return $scope.newTran.cat;
                            }
                        }
                    }
                ]
            });
        };

        $scope.addTran= function () {
            if($scope.newTran.price && $scope.newTran.cat && $scope.newTran.date){
                $transactions.set($scope.newTran);
                $scope.modal.remove();
            }
        }
    });