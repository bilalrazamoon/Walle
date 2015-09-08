angular.module('Walle')
  .factory('$push', function ($window, $q, $rootScope) {

    //register error event
    $window.PushNotification.on('error', function (e) {
      // e.message
      $rootScope.$broadcast('$push:notificationError', e);
    });

    //register notification event
    $window.PushNotification.on('notification', function (data) {
      // data.message,
      // data.title,
      // data.count,
      // data.sound,
      // data.image,
      // data.additionalData
      $rootScope.$broadcast('$push:notificationReceived', data);
    });
    return {
      init: function (androidOpt, iosOpt, winOpt) {
        androidOpt = androidOpt ? androidOpt : {};
        iosOpt = iosOpt ? iosOpt : {};
        winOpt = winOpt ? winOpt : {};

        var push = PushNotification.init({
          "android": androidOpt, //{senderID,icon,iconColor,sound,vibrate,clearNotifications}
          "ios": iosOpt,
          "windows": winOpt
        });
        push.on('registration', function (data) {
          // data.regis0trationId
          $rootScope.$broadcast('$push:registrationIdReceived', data);
        });
      },
      unregister: function (options) {
        var q = $q.defer();
        $window.PushNotification.unregister(function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        }, options);
        return q.promise;
      },
      setBadgeNumber: function (number) {
        var q = $q.defer();
        $window.PushNotification.setApplicationIconBadgeNumber(function (result) {
          q.resolve(result);
        }, function (error) {
          q.reject(error);
        }, number);
        return q.promise;
      }
    }
  });
