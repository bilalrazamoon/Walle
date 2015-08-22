angular.module('Walle')
    .directive('checkLoss', function () {
        return {
            restrict: 'A',
            scope: {
                checkLoss: '='
            },
            link: function ($scope,$element,$attr) {
                if(String($scope.checkLoss).search("-")!=-1){
                    $element.addClass('assertive')
                }else{
                    $element.addClass('light')
                }
            }
        }
    });
