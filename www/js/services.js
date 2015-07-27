angular.module('App.services', [])
    .service('mainService', function () {
        this.data = [
            {name:"Fasal 1",title: 'Concerning the love of Rasuluallah Sallallhu Alayhi Wasallam.', total: 12},
            {name:"Fasal 2",title: 'Concerning restraining lust and carnal desires.', total: 16},
            {name:"Fasal 3",title: 'Concerning the praises of Rasuluallah Sallallhu Alayhi Wasallam.', total: 31},
            {name:"Fasal 4",title: 'Four Concerning the birth of Rasuluallah Sallallhu Alayhi Wasallam.', total: 13},
            {name:"Fasal 5",title: 'Concerning the blessedness of the invitation of Rasuluallah Sallallhu Alayhi Wasallam', total: 16},
            {name:"Fasal 6",title: 'Concerning the glory of the Qur’an', total: 17},
            {name:"Fasal 7",title: 'Concerning the Mir’aaj of Rasuluallah Sallallhu Alayhi Wasallam', total: 13},
            {name:"Fasal 8",title: 'Concerning the Jihad of Rasuluallah Sallallhu Alayhi Wasallam', total: 22},
            {name:"Fasal 9",title: 'Concerning seeking forgiveness from Allah Ta’alaa and the Intercession of Rasuluallah Sallallhu Alayhi Wasallam', total: 12},
            {name:"Fasal 10",title: 'Concerning seeking salvation and the requisition of necessities', total: 18}
        ];
        this.artists = [
            {
                id:"orq",
                duration: '5:55',
                src: "http://bilalraza.website.org/qasidah_burdah/owaisrazaqadri.mp3",
                name: 'Owais Raza Qadri',
                img: 'img/artists/Owais-Raza-Qadri.jpg'
            },
            {
                id:"hba",
                duration: '4:22',
                src: "http://bilalraza.website.org/qasidah_burdah/hajibilalattari.mp3",
                name: 'Haji Bilal Attari',
                img: 'img/artists/hajibilalattari.jpg'
            },
            {
                duration: '4:22',
                name: 'Hafiz Bilal Qadri',
                img: 'img/artists/hafizbilalqadri.jpg',
                data:[
                    {id:"hbq1",name: 'Fasal 1 - Hafiz Bilal Qadri',title:'Fasal 1',img: 'img/artists/hafizbilalqadri.jpg', duration:'5:57', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal01.mp3"},
                    {id:"hbq2",name: 'Fasal 2 - Hafiz Bilal Qadri',title:'Fasal 2',img: 'img/artists/hafizbilalqadri.jpg', duration:'8:07', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal02.mp3"},
                    {id:"hbq3",name: 'Fasal 3 - Hafiz Bilal Qadri',title:'Fasal 3',img: 'img/artists/hafizbilalqadri.jpg', duration:'12:30', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal03.mp3"},
                    {id:"hbq4",name: 'Fasal 4 - Hafiz Bilal Qadri',title:'Fasal 4',img: 'img/artists/hafizbilalqadri.jpg', duration:'15:30', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal04.mp3"},
                    {id:"hbq5",name: 'Fasal 5 - Hafiz Bilal Qadri',title:'Fasal 5',img: 'img/artists/hafizbilalqadri.jpg', duration:'9:20', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal05.mp3"},
                    {id:"hbq6",name: 'Fasal 6 - Hafiz Bilal Qadri',title:'Fasal 6',img: 'img/artists/hafizbilalqadri.jpg', duration:'10:31', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal06.mp3"},
                    {id:"hbq7",name: 'Fasal 7 - Hafiz Bilal Qadri',title:'Fasal 7',img: 'img/artists/hafizbilalqadri.jpg', duration:'6:35', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal07.mp3"},
                    {id:"hbq8",name: 'Fasal 8 - Hafiz Bilal Qadri',title:'Fasal 8',img: 'img/artists/hafizbilalqadri.jpg', duration:'6:19', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal08.mp3"},
                    {id:"hbq9",name: 'Fasal 9 - Hafiz Bilal Qadri',title:'Fasal 9',img: 'img/artists/hafizbilalqadri.jpg', duration:'9:38', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal09.mp3"},
                    {id:"hbq10",name: 'Fasal 10 - Hafiz Bilal Qadri',title:'Fasal 10',img: 'img/artists/hafizbilalqadri.jpg', duration:'10:42', src:"http://bilalraza.website.org/qasidah_burdah/hafizbilalqadri/fasal10.mp3"}
                ]
            },
            {
                id:"isa",
                duration: '4:49',
                src: "http://bilalraza.website.org/qasidah_burdah/imransheikhattari.mp3",
                name: 'Imran Sheikh Attari',
                img: 'img/artists/hajiimransheikh.jpg'
            },
            {
                id:"sy",
                duration: '4:40',
                src: "http://bilalraza.website.org/qasidah_burdah/samiyusuf.mp3",
                name: 'Sami Yusuf',
                img: 'img/artists/sami-yusuf.jpg'
            },
            {
                id:"alh",
                duration: '4:38',
                src: "http://bilalraza.website.org/qasidah_burdah/aamirliaqathussain.mp3",
                name: 'Aamir Liaquat Hussain',
                img: 'img/artists/Aamir-Liaquat-Hussain.jpg'
            },
            {
                id:"hmq",
                duration: '31:16',
                src: "http://bilalraza.website.org/qasidah_burdah/mushtaqqadri.mp3",
                name: 'Haji Mushtaq Qadri',
                img: 'img/artists/hajimushtaqqadri.jpg'
            },
            {
                id:"mha",
                duration: '8:26',
                src: "http://bilalraza.website.org/qasidah_burdah/mehmudulhasanashrafi.mp3",
                name: 'Mehmudul Hasan Ashrafi',
                img: 'img/artists/Mehmud-ul_Hasan.jpg'
            },
            {
                id:"htq",
                duration: '6:42',
                src: "http://bilalraza.website.org/qasidah_burdah/hafiztahirqadri.mp3",
                name: 'Hafiz Tahir Qadri',
                img: 'img/artists/hafiztahirqadri.jpg'
            },
            {
                id:"haq",
                duration: '1:27',
                src: "http://bilalraza.website.org/qasidah_burdah/hafizahmedraza.mp3",
                name: 'Hafiz Ahmed Qadri',
                img: 'img/artists/hafizahmedraza.jpg'
            }
        ];

    })
    .factory('$GeoLocation', ['$q', function ($q) {
        return {
            getCurrentPosition: function (options) {
                var q = $q.defer();
                navigator.geolocation.getCurrentPosition(function (result) {
                    q.resolve(result);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        };
    }])
    .factory('$DeviceAccounts', ['$q', function ($q) {
        return {
            get: function () {
                var q = $q.defer();
                if(window.plugins.DeviceAccounts){
                    window.plugins.DeviceAccounts.get(function(response){
                        q.resolve(response);
                    }, function(err){
                        q.reject(err)
                    });
                }
                else{
                    q.reject()
                }
                return q.promise;
            }
        };
    }])
    .factory('$Network', ['$rootScope', '$timeout', function ($rootScope, $timeout) {
        return {
            getNetwork: function () {
                return navigator.connection.type;
            },
            isOnline: function () {
                var networkState = navigator.connection.type;
                return networkState !== Connection.UNKNOWN && networkState !== Connection.NONE;
            },
            isOffline: function () {
                var networkState = navigator.connection.type;
                return networkState === Connection.UNKNOWN || networkState === Connection.NONE;
            }
        };
    }])
    .factory('$SocialSharing', ['$q', '$window', function ($q, $window) {
        return {
            share: function (message, subject, file, link) {
                var q = $q.defer();
                subject = subject || null;
                file = file || null;
                link = link || null;
                $window.plugins.socialsharing.share(message, subject, file, link, function () {
                    q.resolve(true);
                }, function () {
                    q.reject(false);
                });
                return q.promise;
            }
        }
    }])
    .service('$Player', function ($rootScope, mainService, $Network, $ionicLoading, $timeout) {
        var self = this, audio = document.getElementsByTagName('audio')[0],
            player, timeUpdateCB, durationUpdateCB, playCB, pauseCB, queue = [], current = 0, artist;
        if (!audio) return;
        mainService.artists.forEach(function (v) {
            if(v.data){
                v.data.forEach(function (v) {
                    queue.push(v)
                })
            }
            else queue.push(v);
        });
        self.current = 0;
        function zeroRemoval(v) {
            if (typeof v !== 'string') return v;
            return v.charAt(0) == 0 && (v = v.slice(1));
        }
        var playerOptions = {
            alwaysShowControls: true,
            features: ['playpause', 'progress', 'current', 'duration', 'tracks', 'volume'],
            audioVolume: 'horizontal',
            audioWidth: 450,
            audioHeight: 70,
            startVolume: 1,
            iPadUseNativeControls: false,
            iPhoneUseNativeControls: false,
            AndroidUseNativeControls: false
        };
        player = new MediaElementPlayer(audio, playerOptions);
        player.media = audio;
        audio.addEventListener('timeupdate', function () {
            self.currentTimeC = zeroRemoval(player.currenttime.text());
            self.currentTime = audio.currentTime;
            $rootScope.$emit('timeupdate', {currentTimeC: self.currentTimeC, currentTime: self.currentTime});
        });
        audio.addEventListener('loadedmetadata', function () {
            self.currentTimeC = zeroRemoval(player.currenttime.text());
            self.currentTime = audio.currentTime;
            self.durationC = zeroRemoval(player.durationD.text());
            self.duration = audio.duration;
            //$ionicLoading.hide();
            $rootScope.$emit('loadedmetadata', {
                currentTimeC: self.currentTimeC,
                currentTime: self.currentTime,
                durationC: self.durationC,
                duration: self.duration
            });

        }, false);
        audio.addEventListener('play', function () {
            self.isPlaying = !0;
            $rootScope.$emit('play', {isPlaying: true, artist: artist, loading: true});
        }, false);
        audio.addEventListener('pause', function () {
            self.isPlaying = !1;
            $rootScope.$emit('pause', {isPlaying: false});
        }, false);
        audio.addEventListener('ended', function () {
            if(self.loop) player.setCurrentTime(0) && self.play();
            else self.shuffle && (self.current = Math.floor(Math.random() * queue.length)) && self.play();
        }, false);
        self.setSrc = player.setSrc;
        self.shuffle = !1;
        this.play = function () {
            if (!queue.length) return;
            var _current = queue[self.current];
            var src = _current.src, reg = new RegExp(src + '$', 'i');
            artist = {
                name: _current.name,
                img: _current.img,
                id: _current.id,
                duration: _current.duration
            };
            if (!reg.test(audio.src)) {
                audio.src = src;
            }
            if ($Network.isOffline()) {
                $ionicLoading.show({template:"<i class='button-icon icon ion-wifi'></i><h4>Network unavailable</h4>"});
                $timeout(function () {
                    $ionicLoading.hide();
                },1000);
                return false;
            }
            player.play();
        };
        this.pause = function (cb) {
            player.pause();
        };
        this.start = function (obj) {
            var index = queue.indexOf(obj);
            if(typeof index === "number" && queue.length > index){
                self.current = index;
                self.play(obj);
            };
        };
        this.isNext = function () {
            return queue.length > self.current + 1;
        };
        this.isPrevious = function () {
            return 0 < self.current;
        };
        this.next = function () {
            if (!self.isNext()) return;
            ++self.current;
            self.play();
        };
        this.previous = function () {
            if (!self.isPrevious()) return;
            --self.current;
            self.play();
        };
        this.progress = function () {
            if (self.duration && self.currentTime)
                var _p = ((Number(self.currentTime) * 100) / Number(self.duration));
            return _p || 0;
        }
    });