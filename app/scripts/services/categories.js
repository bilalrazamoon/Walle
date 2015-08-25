angular.module('Walle')
  .factory('$categories', function ($colors) {
    var categories = [
      {id: 1, val: "Gadgets", icon: "ion-playstation", color: "yellow"},
      {id: 2, val: "Food", icon: "ion-pizza", color: "indigo"},
      {id: 3, val: "Clothes", icon: "ion-tshirt", color: "green"},
      {id: 4, val: "Sales", icon: "ion-arrow-graph-up-right", color: "pink"},
      {id: 5, val: "Jewelry", icon: "ion-heart", color: "purple"},
      {id: 6, val: "Travelling", icon: "ion-model-s", color: "orange"},
      {id: 7, val: "Sports", icon: "ion-compass", color: "red"},
      {id: 8, val: "Health", icon: "ion-medkit", color: "green"},
      {id: 9, val: "Books", icon: "ion-university", color: "amber"},
      {id: 10, val: "Drinks", icon: "ion-wineglass", color: "dark-green"}
    ];
    return {
      get: function (id) {
        if (id) {
          var c = categories.filter(function (v) {
            return v.id == id
          });
          if (c.length != 0) {
            return c[0]
          }
          else {
            return null
          }
        }
        else {
          return categories.map(function (v) {
            return v
          })
        }
      }
    }
  });
