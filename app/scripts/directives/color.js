angular.module('Walle')
    .directive('catColor', function ($colors) {
        return {
            restrict: 'A',
            scope: {
                catColor: '='
            },
            link: function ($scope, $element, $attr) {
                $element.css('background-color',$colors.get($scope.catColor));
            }
        }
    });
