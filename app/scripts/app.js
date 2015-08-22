angular.module('Walle', [
    'ionic',
    'ngCordova',
    //'ui.mask',
    //'kendo.directives'
])
    .constant('$app', {
        name: "Walle",
        version: "1.0",
        id: "com.example.walle",
        desc: "",
        developer: {
            name: "Bilal Raza",
            email: "hafizbilal112@gmail.com"
        },
        social: {
            "facebook": 'http://facebook.com/QasidahBurdahApp',
            "twitter": 'http://facebook.com/QasidahBurdahApp'
        },
        primaryColor: "#2e2e3b",
        primaryColorDark: "#25252f",
        primaryColorLight: "#353543",
        ancentColor: "#8254ff",
        feedback: {
            subject: "Walle Android App",
            message: "",
            email: "hafizbilal112@gmail.com"
        },
        share: {
            title: "Walle Android App",
            desc: "Install app to save an manage transactions by respective card and see history by month or year"
        }
    })
    .run(['$ionicPlatform', '$rootScope', '$state', '$ionicHistory', '$app', '$cordovaSocialSharing', '$ionicLoading', '$message', function ($ionicPlatform, $rootScope, $state, $ionicHistory, $app, $cordovaSocialSharing, $ionicLoading, $message) {
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
        $rootScope.passcode = false;
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.name == "app.home" && localStorage.getItem('start') == null) {
                    event.preventDefault();
                    $state.go('start');
                } else if (toState.name == 'app.home' && (localStorage.getItem('setting') != null && JSON.parse(localStorage.getItem('setting')).passcode != "") && !$rootScope.passcode) {
                    event.preventDefault();
                    $state.go('passcode', {mode: 'apply'});
                }
            });
        //helperFunctions
        $rootScope.shareApp = function () {
            $cordovaSocialSharing
                .share($app.share.desc, $app.share.title, null, 'https://play.google.com/store/apps/details?id=' + $app.id)
                .then(function () {
                    $message.show("<i class='icon ion-thumbsup'></i><p>Thanks for Sharing an app</p>")
                })
        };
        $rootScope.feedback = function () {
            $cordovaSocialSharing
                .shareViaEmail($app.feedback.message, $app.feedback.subject, $app.feedback.email)
                .then(function (result) {
                    $message.show("<i class='icon ion-thumbsup'></i><p>Thanks for giving a Feedback.</p>")
                });
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
            .state('passcode', {
                url: "/passcode/{mode}",
                templateUrl: "templates/passcode.html",
                controller: "passcodeCtrl"
            })
            .state('about', {
                url: "/about",
                templateUrl: "templates/about.html",
                controller: "aboutCtrl"
            })
    }]);
