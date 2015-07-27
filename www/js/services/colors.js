angular.module('app')
    .factory('$colors', function () {
        var colors = [
            {"name": "red", "val": "#f44336"},
            {"name": "pink", "val": "#e91e63"},
            {"name": "purple", "val": "#9c27b0"},
            {"name": "deep-purple", "val": "#673ab7"},
            {"name": "indigo", "val": "#3f51b5"},
            {"name": "blue", "val": "#2196f3"},
            {"name": "light-blue", "val": "#03a9f4"},
            {"name": "cyan", "val": "#00bcd4"},
            {"name": "teal", "val": "#009688"},
            {"name": "green", "val": "#4caf50"},
            {"name": "light-green", "val": "#8bc34a"},
            {"name": "lime", "val": "#cddc39"},
            {"name": "yellow", "val": "#ffeb3b"},
            {"name": "amber", "val": "#ffc107"},
            {"name": "orange", "val": "#ff9800"},
            {"name": "deep-orange", "val": "#ff5722"},
            {"name": "brown", "val": "#795548"},
            {"name": "grey", "val": "#9e9e9e"},
            {"name": "blue-grey", "val": "#607d8b"},
            {"name": "black", "val": "#000000"}
        ];
        return {
            get: function (name) {
                if (name) {
                    var c= colors.filter(function (v) {
                        return v.name == name
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