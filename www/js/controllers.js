angular.module('App.controllers', [])

    .controller('startCtrl', function ($scope, $state, $ionicSlideBoxDelegate, $ionicPlatform) {
        $ionicPlatform.ready(function () {
            if(window.StatusBar.backgroundColorByHexString) StatusBar.backgroundColorByHexString("#aaaaaa");
        });
        $scope.slideChanged = function (i) {
            console.log(i)
        };
        $scope.done=function(){
            localStorage.setItem('start', true);
            $state.go('app.read')
        };
        $scope.isPre=function(){
            return $ionicSlideBoxDelegate.currentIndex() != 0
        };
        $scope.isNext=function(){
            return $ionicSlideBoxDelegate.currentIndex()+1 != $ionicSlideBoxDelegate.slidesCount()
        };
        $scope.previous = function () {
            $ionicSlideBoxDelegate.previous();
        };
        $scope.next = function () {
            $ionicSlideBoxDelegate.next();
        };
        $scope.onDragLeft = function () {
            $scope.done()
        };
    })
    .controller('readCtrl', function ($scope, mainService, $ionicPopup) {
        $scope.fasals = mainService.data;
    })

    .controller('readListCtrl', function ($scope, $state, $stateParams, mainService, $ionicModal, $ionicPopup) {
        $scope.fasal = $stateParams.fasal;
        $scope.dua='';
        $scope.title="Fasal ";
        if($scope.fasal=='duaStart'){
            $scope.dua='img/dua/start.svg';
            $scope.title="Starting Dua";
            return false
        }
        else if($scope.fasal=='duaEnd'){
            $scope.dua='img/dua/end.svg';
            $scope.title="Ending Dua";
            return false
        }
        var index = $scope.fasal - 1;
        $scope.title+=$scope.fasal;
        $scope.list = [];
        $scope.list.length = mainService.data[index].total;
        $scope.fullViewModalShow = function (fasal, verse) {
            mainService.current = {};
            mainService.current.fasal = fasal;
            mainService.current.verse = verse;
            $ionicModal.fromTemplateUrl('templates/fullView.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.fullViewModal = modal;
                $scope.fullViewModal.show();
                StatusBar.backgroundColorByHexString("#aaaaaa");
            });
        };

        $scope.fullViewModalHide = function () {
            $scope.fullViewModal.remove();
            StatusBar.backgroundColorByHexString("#388E3C");
        };
        var currentFasal=mainService.data[index];
        $scope.showDetail= function () {
            $ionicPopup.alert({
                template: currentFasal.title,
                title: currentFasal.name,
                scope: $scope
            });
        }
    })
    .controller('fullViewCtrl', function ($scope, $state, $stateParams, mainService, $ionicSlideBoxDelegate) {
        $scope.fasal = mainService.current.fasal;
        $scope.verse = mainService.current.verse;
        $scope.list = [];
        $scope.list.length = mainService.data[$scope.fasal - 1].total;
        $scope.activeVerse = ($scope.list.length - $scope.verse);
        function isNext() {
            return (($ionicSlideBoxDelegate.slidesCount() - $ionicSlideBoxDelegate.currentIndex()) >= 0);
        }

        function isPrevious() {
            return (($ionicSlideBoxDelegate.slidesCount() - $ionicSlideBoxDelegate.currentIndex()) >= 0);
        }

        $scope.previous = function () {
            $ionicSlideBoxDelegate.next();
        };
        $scope.next = function () {
            $ionicSlideBoxDelegate.previous();
        };
        $scope.currentVerse = function () {
            return ($ionicSlideBoxDelegate.slidesCount() - $ionicSlideBoxDelegate.currentIndex());
        }
    })
    .controller('listenCtrl', function ($scope, mainService, $Player, $ionicModal, $rootScope) {
        console.log('listenCtrl');
        $scope.artists = mainService.artists;
        $scope.playerModalShow = function () {
            $ionicModal.fromTemplateUrl('templates/player.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.playerModal = modal;
                $scope.playerModal.show();
                StatusBar.backgroundColorByHexString("#aaaaaa");
            });
        };
        $scope.playerModalHide = function () {
            $scope.playerModal.remove();
            StatusBar.backgroundColorByHexString("#388E3C");
        };
        $scope.start = function (p,e) {
            if(e)e.stopPropagation();
            if(p.data && !e){
                p.showData=!p.showData;
                return false
            }
            $Player.start(p)
        };
        $scope.play = function (e) {
            e.stopPropagation();
            $Player.play()
        };
        $scope.pause = function (e) {
            e.stopPropagation();
            $Player.pause()
        };
        $scope.showPlayer = function () {
            return $rootScope.player.artist;
        };
        $scope.progress = $Player.progress;
        $scope.checkPlaying= function (id) {
            if($rootScope.player.artist){
                return $rootScope.player.artist.id===id && $rootScope.player.isPlaying && !$rootScope.player.loading;
            }
        };
        $scope.checkLoading= function (id) {
            if($rootScope.player.artist){
                return $rootScope.player.artist.id===id && $rootScope.player.isPlaying && $rootScope.player.loading;
            }
        };
    })
    .controller('PlayerCtrl', function ($scope, $stateParams, $ionicHistory, $ionicPopover, mainService, $Player, $rootScope, $ionicLoading, $timeout) {
        $scope.artists = mainService.artists;
        $scope.next = $Player.next;
        $scope.previous = $Player.previous;
        $scope.play = $Player.play;
        $scope.pause = $Player.pause;
        $scope.progress = $Player.progress;
        $scope.loop = function (v) {
            if (v === undefined) return $Player.loop;
            $Player.loop = !$Player.loop;
            var msg =$Player.loop?"Activated":"Deactivated";
            $ionicLoading.show({template:"<i class='button-icon icon ion-android-sync'></i><h4>Loop "+msg+"</h4>"});
            $timeout(function () {
                $ionicLoading.hide();
            },1000);
        };
        $scope.shuffle = function (v) {
            if (v === undefined) return $Player.shuffle;
            $Player.shuffle = !$Player.shuffle;
            var msg =$Player.shuffle?"Activated":"Deactivated";
            $ionicLoading.show({template:"<i class='button-icon icon ion-shuffle'></i><h4>Shuffle "+msg+"</h4>"});
            $timeout(function () {
                $ionicLoading.hide();
            },1000);
        };
    })
    .controller('FeedbackCtrl', function ($GeoLocation, $DeviceAccounts, $scope, $ionicHistory, mainService, $ionicPopover, $http, $ionicLoading, $timeout, $ionicPopup, $log, $Network) {
        $scope.subjects=["Suggestion","Bug","Improvements","Other"];
        var template = '<ion-popover-view><ion-content><ion-list>' +
            "<ion-item ng-click='select(s)' ng-class='{\"active\":isSelected(s)}' ng-repeat='s in subjects'>{{s}}</ion-item>" +
            '</ion-list></ion-content></ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });
        $scope.feedback={};
        $scope.feedback.subject="Select Subject";
        $scope.select= function (s) {
            $scope.feedback.subject=s;
            $scope.popover.hide();
        };
        $scope.isSelected= function (s) {
            return $scope.feedback.subject==s;
        };
        $GeoLocation.getCurrentPosition({enableHighAccuracy:true}).then(function (result) {
            $scope.feedback.location={__type: "GeoPoint",latitude: result.coords.latitude,longitude: result.coords.longitude};
            $scope.$$phase || $scope.$digest();
        });
        $DeviceAccounts.get().then(function (accounts) {
            $scope.feedback.email=accounts.filter(function (a) {
                return a.type=="com.google"
            })[0].name;
            $scope.$$phase || $scope.$digest();
        });
        $scope.feedback.device={id:device.uuid,platform:device.platform,version:device.version};
        $scope.submit= function () {
            if($scope.feedback.subject=="Select Subject"){
                $ionicPopup.alert({
                    template: "Please select subject",
                    title: "Error",
                    scope: $scope
                });
                return false
            }
            else if(!$scope.feedback.email){
                $ionicPopup.alert({
                    template: "Please enter your email",
                    title: "Error",
                    scope: $scope
                });
                return false
            }
            else if(!$scope.feedback.name){
                $ionicPopup.alert({
                    template: "Please enter your name",
                    title: "Error",
                    scope: $scope
                });
                return false
            }
            else if(!$scope.feedback.message){
                $ionicPopup.alert({
                    template: "Please enter your feedback message",
                    title: "Error",
                    scope: $scope
                });
                return false
            }
            else if($Network.isOffline()) {
                $ionicLoading.show({template:"<i class='button-icon icon ion-wifi'></i><h4>Network unavailable</h4>"});
                $timeout(function () {
                    $ionicLoading.hide();
                },1000);
                return false;
            }
            $http.post('https://api.parse.com/1/classes/feedback',$scope.feedback,{headers:{"X-Parse-Application-Id":"balvYdu69RMtKZJVDXMRIf81hEBnB5D5tMdFM2jE","X-Parse-REST-API-Key":"AbD1azr6qec16KvPqAYQ0hiCsT0vkE8JIWuftZac","Content-Type":"application/json"}})
                .success(function(data){
                    if(data.objectId){
                        $ionicLoading.show({template:"<i class='button-icon icon ion-android-done'></i><h4>Feedback has been Sent!</h4>"})
                        $scope.feedback.subject="Select Subject";
                        $scope.feedback.name="";
                        $scope.feedback.message="";
                        $timeout(function () {
                            $ionicLoading.hide()
                        },1000)
                    }
                })
                .error(function (err) {
                    $log.error(err)
                })
        }
    });