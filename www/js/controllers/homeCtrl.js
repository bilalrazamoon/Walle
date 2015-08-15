angular.module('app')
    .controller('homeCtrl', function ($app, $scope, $ionicPopover, $ionicModal, $ionicPopup, $categories, $transactions, $cards, $colors) {
        var home = this;
        $scope.categories = $categories.get();
        //$scope.getColors = $colors.get;
        $scope.transactions = $transactions.get();
        $scope.cards=$cards.get();
        $scope.newTran={cat:"",date:new Date(),price:"",no:""};
        if($scope.cards.length!=0){
          $scope.newTran.no=$scope.cards[0].no
        }
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
        $scope.checkLoss= function (val) {
            return String(val).search("-")!=-1
        };
        /*$scope.options = ['All Transactions', 'MCB ****1234', 'HBL ****1234'];
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
        });*/

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
        $scope.setCard= function (i) {
            $scope.newTran.no=$scope.cards[i].no;
        };
        $scope.addTran= function () {
            if($scope.newTran.price && $scope.newTran.cat && $scope.newTran.date && $scope.newTran.no){
                $scope.newTran.date=+new Date($scope.newTran.date);
                $transactions.set($scope.newTran);
                $scope.transactions = $transactions.get();
                $scope.newTran={cat:"",date:new Date(),price:"",no:$scope.cards[0].no};
                $scope.modal.remove();
            }
        };
        $scope.getClass= function (c) {
            var obj={};
            if($scope.IsCat(c.id))
                obj['ion-checkmark']=true;
            if(!$scope.IsCat(c.id))
                obj[c.icon]=true;
            return obj
        }
    });
