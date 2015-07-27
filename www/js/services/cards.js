angular.module('app')
    .factory('$cards', function () {
        return {
            get: function (id) {
                if (id) {
                    var cards = [];
                    if (localStorage.getItem('cards') == null) {
                        localStorage.setItem('cards', JSON.stringify(cards));
                    }
                    else {
                        cards = JSON.parse(localStorage.getItem('cards'));
                    }
                    return cards.filter(function (v) {
                        return v.id == id
                    });
                }
                else {
                    var cards = [];
                    if (localStorage.getItem('cards') == null) {
                        localStorage.setItem('cards', JSON.stringify([]));
                    }
                    else {
                        cards = JSON.parse(localStorage.getItem('cards'));
                    }
                    return cards;
                }
            },
            set: function (arg) {
                if (angular.isArray(arg)) {
                    var cards = arg;
                    if (localStorage.getItem('cards') == null) {
                        localStorage.setItem('cards', JSON.stringify(cards));
                    } else {
                        cards = JSON.parse(localStorage.getItem('cards'));
                    }
                    return cards
                } else {
                    var cards = [];
                    if (localStorage.getItem('cards') == null) {
                        localStorage.setItem('cards', JSON.stringify(cards));
                    } else {
                        cards = JSON.parse(localStorage.getItem('cards'));
                    }
                    cards.unshift(arg);
                    localStorage.setItem('cards', JSON.stringify(cards));
                }
            }
        }
    });
