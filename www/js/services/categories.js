angular.module('app')
    .factory('$categories', function ($colors) {
        var categories = [
            {id: 1, val: "Gadgets", color: "yellow"},
            {id: 2, val: "Food", color: "indigo"},
            {id: 3, val: "Clothes", color: "green"},
            {id: 4, val: "Sales on Creative Market", color: "pink"},
            {id: 5, val: "Jewelry", color: "purple"},
            {id: 6, val: "Activities", color: "orange"},
            {id: 7, val: "Sports", color: "red"},
            {id: 8, val: "Health", color: "green"},
            {id: 9, val: "Books", color: "amber"}
        ];
        return {
            get: function (id) {
                if (id) {
                    var c= categories.filter(function (v) {
                        return v.id == id
                    });
                    if(c.length!=0){
                        c.color=$colors.get(c.color);
                        return c[0]
                    }
                    else{
                        return null
                    }
                }
                else {
                    return categories.map(function (v) {
                        v.color=$colors.get(v.color);
                        return v
                    })
                }
            }
        }
    })