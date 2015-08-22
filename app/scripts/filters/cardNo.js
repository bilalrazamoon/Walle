angular.module('Walle')
    .filter('cardNo',function () {
       return function(input) {
           return input.slice(0,4) + " " + input.slice(4,8) + " " + input.slice(8,12) + " " + input.slice(12,16);
       };
    });
