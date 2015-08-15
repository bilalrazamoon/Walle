angular.module('app')
    .factory('$cards', function ($colors) {
        return {
            check: function (no) {
                var cards = [];
                if (localStorage.getItem('cards') == null) {
                    return false
                }
                else{
                    cards = JSON.parse(localStorage.getItem('cards'));
                    return cards.filter(function (v) {
                        return v.no==no;
                    }).length!=0
                }
            },
            get: function (no) {
                if (no) {
                    var cards = [];
                    if (localStorage.getItem('cards') == null) {
                        localStorage.setItem('cards', JSON.stringify(cards));
                    }
                    else {
                        cards = JSON.parse(localStorage.getItem('cards'));
                    }
                    return cards.filter(function (v) {
                        return v.no == no
                    });
                }
                else {
                    var cards = [];
                    if (localStorage.getItem('cards') == null) {
                        localStorage.setItem('cards', JSON.stringify([]));
                    }
                    else {
                        cards = JSON.parse(localStorage.getItem('cards'));
                        cards = cards.map(function (v) {
                            v.color=$colors.get(v.color);
                            return v
                        })
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
            },
            remove: function (no) {
                var cards = JSON.parse(localStorage.getItem('cards'));
                cards.forEach(function (v,i) {
                    if(v.no==no){
                        cards.splice(i,1)
                    }
                });
                localStorage.setItem('cards', JSON.stringify(cards));
            }
        }
    });
