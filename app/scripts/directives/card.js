angular.module('Walle')
    .directive('card', function () {
        return {
            restrict: 'E',
            scope: {
                color: '=',
                bank: '=',
                type: '=',
                number: '=',
                name: '=',
                valid: '='
            },
            template: '<div class="card-block" ng-style="{\'background-color\': color}">' +
            '<div class="logo">{{bank}}</div>' +
            '<div class="type">{{type}}</div>' +
            '<div class="number">{{number?number:\'xxxx-xxxx-xxxx-xxxx\' | cardNo}}</div>' +
            '<span>Valid Thru</span>' +
            '<div class="valid">{{valid.m}}/{{valid.y}}</div>' +
            '<div class="name">{{name}}</div>' +
            '<div class="circle"></div>' +
            '</div>'
        }
    });
