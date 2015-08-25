angular.module('Walle')
  .factory('$filters', function () {
    return {
      sign: function (arr) {
        return arr.filter(function (v) {
          return v.sign == '-'
        });
      },
      cat: function (arr) {
        var dates = [], names = [];
        arr.forEach(function (v) {
          var index = names.indexOf(v.cat.val);
          if (index != -1) {
            dates[index].price += v.price;
          } else {
            dates.push(v);
            names.push(v.cat.val);
          }
        });
        return dates
      },
      day: function (arr) {
        return arr.filter(function (v) {
          return moment(v.date).date() == moment().date();
        });
      },
      week: function (arr) {
       var week= moment().subtract(1, 'week');
        return arr.filter(function (v) {
          return moment(v.date).week() == week.week();
        });
      },
      weeks: function (arr) {
        var daysNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        var days = [0,0,0,0,0,0,0];
        arr.forEach(function (v) {
          var index = moment(v.date).day();
          days[index]+= v.price;
        });
        return days

      },
      month: function (arr) {
        var month= moment().subtract(1, 'month');
        return arr.filter(function (v) {
          return moment(v.date).month() == month.month();
        });
      }
      /*week: function (arr) {
        var start  = moment().subtract(6, 'days');
        var end    = moment();
        //var e = +new Date(), s = e - (1000 * 3600 * 24 * 7);
        /!*return arr.filter(function (v) {
          return v.date >= s && v.date <= e;
        });*!/
        return arr.filter(function (v) {
          return moment(v.date).valueOf() >= moment(start).valueOf() && moment(v.date).valueOf() <= moment(end).valueOf();
        });
      },
      generateWeeks: function () {
        var start  = moment().subtract(6, 'days');
        var end    = moment();
        var weeksNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        var weeks = [];
        weeksNames.forEach(function (v, i) {
          var date = start.date();
          var index= moment().date(date+i).day();
          weeks.push(weeksNames[index])
        });
        return weeks
      },
      date: function (arr) {
        var days = [];
        var week = [];
        week.forEach(function (v, i) {
          var day = new Date(v.date).getDay(), index = days.indexOf(day);
          if (index != -1) {

          } else {
            days.push(day);
            days.push([v])
          }
        });
        return week
      }*/
    }
  });
