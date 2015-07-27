angular.module('app')
    .factory('$categories', function () {
        var colors = [
            {"id": "1", "val": "Gadgets", color: "purple"},
            {"id": "2", "val": "Food", color: "yellow"}
        ];
        return {
            get: function (id) {
                if (id) {
                    var c= colors.filter(function (v) {
                        return v.id == id
                    });
                    if(c.length!=0){
                        return c[0].val
                    }
                    else{
                        return null
                    }
                }
                else {
                    return colors
                }
            }
        }
    })