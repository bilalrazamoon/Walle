angular.module('app', ['ionic', 'ngCordova', 'ui.mask', 'kendo.directives'])
    .constant('$app', {
        name: "Walle",
        version: "1.0",
        id: "com.example.walle",
        desc: "",
        author: "Bilal Raza",
        social: {
            "facebook": 'http://facebook.com/QasidahBurdahApp',
            "twitter": 'http://facebook.com/QasidahBurdahApp'
        },
        primaryColor: "#2e2e3b",
        primaryColorDark: "#25252f",
        primaryColorLight: "#353543",
        ancentColor: "#8254ff",
        shareTitle: 'App',
        shareDesc: 'Download and share an App!'
    })
    .run(['$ionicPlatform', '$rootScope', '$state', '$ionicHistory', '$app', function ($ionicPlatform, $rootScope, $state, $ionicHistory, $app) {
        $rootScope.appName = $app.name;
        $rootScope.$ionicHistory = $ionicHistory;
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
                StatusBar.backgroundColorByHexString($app.primaryColorDark);
            }
        });
        //stateChangeStartEvent
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.name == "app.home" && localStorage.getItem('start')==null) {
                    event.preventDefault();
                    $state.go('start');
                }
            });
        //helperFunctions
        $rootScope.shareApp = function () {
            $SocialSharing.share($app.shareDesc, $app.shareTitle, null, 'https://play.google.com/store/apps/details?id=' + $app.id)
        };
        $rootScope.feedback = function () {
            $SocialSharing.share($app.shareDesc, $app.shareTitle, null, 'https://play.google.com/store/apps/details?id=' + $app.id)
        };
        $rootScope.openLink = function (link) {
            window.open(link, "_system");
        };
        $rootScope.rateApp = function () {
            window.open("market://details?id=" + $app.id, "_system");
        };
    }])
    .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', '$compileProvider', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {
        //compileProvider
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|market):/);
        //ionicConfigProvider
        $ionicConfigProvider.views.maxCache(0);
        $ionicConfigProvider.views.transition('android');
        //routing
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('start', {
                url: "/start",
                templateUrl: "templates/start.html",
                controller: 'startCtrl'
            })

            .state('app', {
                abstract: true,
                templateUrl: "templates/drawer.html"
            })
            .state('app.home', {
                url: "/home",
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html",
                        controller: 'homeCtrl'
                    }
                }
            })
            .state('app.cards', {
                url: "/cards",
                views: {
                    'menuContent': {
                        templateUrl: "templates/cards.html",
                        controller: 'cardsCtrl'
                    }
                }
            })
            .state('app.calendar', {
                url: "/calendar",
                views: {
                    'menuContent': {
                        templateUrl: "templates/calendar.html",
                        controller: 'calendarCtrl'
                    }
                }
            })
            .state('app.profile', {
                url: "/profile",
                views: {
                    'menuContent': {
                        templateUrl: "templates/profile.html",
                        controller: "profileCtrl"
                    }
                }
            })
            .state('setting', {
                url: "/setting",
                templateUrl: "templates/setting.html",
                controller: "settingCtrl"
            })
            .state('about', {
                url: "/about",
                templateUrl: "templates/about.html",
                controller: "aboutCtrl"
            })
    }]);
