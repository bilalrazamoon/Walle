angular.module('App.directives', [])
    .directive('ionMdInput', function() {
        return {
            restrict: 'E',
            replace: true,
            require: '?ngModel',
            template: '<label class="item item-input item-md-label">' +
            '<input type="text" class="md-input">' +
            '<span class="input-label"></span>' +
            '<div class="hightlight"></div>' +
            '</label>',
            compile: function(element, attr) {

                var hightlight = element[0].querySelector('.hightlight');
                var hightlightColor;
                if (!attr.hightlightColor) {
                    hightlightColor = 'calm';
                } else {
                    hightlightColor = attr.hightlightColor;
                }
                hightlight.className += ' hightlight-' + hightlightColor;

                var label = element[0].querySelector('.input-label');
                label.innerHTML = attr.placeholder;


                /*Start From here*/
                var input = element.find('input');
                angular.forEach({
                    'name': attr.name,
                    'type': attr.type,
                    'ng-value': attr.ngValue,
                    'ng-model': attr.ngModel,
                    'ng-disabled': attr.ngDisabled,
                    'required': attr.required,
                    'ng-required': attr.ngRequired,
                    'ng-minlength': attr.ngMinlength,
                    'ng-maxlength': attr.ngMaxlength,
                    'ng-pattern': attr.ngPattern,
                    'ng-change': attr.ngChange,
                    'ng-trim': attr.trim,
                    'ng-blur': attr.ngBlur,
                    'ng-focus': attr.ngFocus
                }, function(value, name) {
                    if (angular.isDefined(value)) {
                        input.attr(name, value);
                    }
                });

                var cleanUp = function() {
                    ionic.off('$destroy', cleanUp, element[0]);
                }
                // add listener
                ionic.on('$destroy', cleanUp, element[0]);

                return function LinkingFunction($scope, $element, $attributes) {


                    var mdInput = $element[0].querySelector('.md-input')

                    var dirtyClass = 'used'

                    var reg = new RegExp('(\\s|^)' + dirtyClass + '(\\s|$)');

                    //Here is our toggle function
                    var toggleClass = function() {
                        if (this.value === '') {
                            this.className = mdInput.className.replace(reg, ' ');
                        } else {
                            this.classList.toggle(dirtyClass);
                        }
                    };
                    // Here we are saying, on 'blur', call toggleClass, on mdInput
                    ionic.on('blur', toggleClass, mdInput);

                };


            }
        };
    })
    .directive('ionMdTextarea', function() {
        return {
            restrict: 'E',
            replace: true,
            require: '?ngModel',
            template: '<label class="item item-input item-md-label">' +
            '<textarea row="2" class="md-input"></textarea>' +
            '<span class="textarea-label"></span>' +
            '<div class="hightlight"></div>' +
            '</label>',
            compile: function(element, attr) {

                var hightlight = element[0].querySelector('.hightlight');
                var hightlightColor;
                if (!attr.hightlightColor) {
                    hightlightColor = 'calm';
                } else {
                    hightlightColor = attr.hightlightColor;
                }
                hightlight.className += ' hightlight-' + hightlightColor;

                var label = element[0].querySelector('.textarea-label');
                label.innerHTML = attr.placeholder;


                /*Start From here*/
                var textarea = element.find('textarea');
                var textareaLabel = element.find('.textarea-label');
                angular.forEach({
                    'name': attr.name,
                    'type': attr.type,
                    'ng-value': attr.ngValue,
                    'ng-model': attr.ngModel,
                    'required': attr.required,
                    'ng-required': attr.ngRequired,
                    'ng-minlength': attr.ngMinlength,
                    'ng-maxlength': attr.ngMaxlength,
                    'ng-pattern': attr.ngPattern,
                    'ng-change': attr.ngChange,
                    'ng-trim': attr.trim,
                    'ng-blur': attr.ngBlur,
                    'ng-focus': attr.ngFocus
                }, function(value, name) {
                    if (angular.isDefined(value)) {
                        textarea.attr(name, value);
                    }
                });
                /*var oldHeight = 34;
                textarea.on('keyup',function(e){
                    if(e.currentTarget.value.match(/\n/g)){
                        var lineBreak=e.currentTarget.value.match(/\n/g).length;
                        //var height = textarea.css('height').split('px')[0];
                        if(lineBreak){
                            textarea.css('height',oldHeight+(lineBreak*12));
                            textareaLabel.css('transform','translate3d(0, -'+(27+(34*(lineBreak)))+'px, 0) scale(0.9)')
                        }
                        else{
                            textarea.css('height',oldHeight);
                        }
                    }
                });*/
                var node = textarea[0];
                var onChangeTextarea = ionic.debounce(growTextarea, 1);
                textarea.on('keydown', onChangeTextarea);
                textarea.on('scroll', onScroll);
                function growTextarea() {
                    node.style.height = "auto";
                    node.scrollTop = 0;
                    var line = node.scrollHeight - node.offsetHeight;
                    var height = node.offsetHeight + (line > 0 ? line : 0);
                    if (height) node.style.height = height + 'px';
                }

                function onScroll(e) {
                    node.scrollTop = 0;
                    // for smooth new line adding
                    var line = node.scrollHeight - node.offsetHeight;
                    var height = node.offsetHeight + line;
                    node.style.height = height + 'px';
                }
                var cleanUp = function() {
                    ionic.off('$destroy', cleanUp, element[0]);
                }
                // add listener
                ionic.on('$destroy', cleanUp, element[0]);

                return function LinkingFunction($scope, $element, $attributes) {


                    var mdInput = $element[0].querySelector('.md-input')

                    var dirtyClass = 'used'

                    var reg = new RegExp('(\\s|^)' + dirtyClass + '(\\s|$)');

                    //Here is our toggle function
                    var toggleClass = function() {
                        if (this.value === '') {
                            this.className = mdInput.className.replace(reg, ' ');
                        } else {
                            this.classList.toggle(dirtyClass);
                        }
                    };
                    // Here we are saying, on 'blur', call toggleClass, on mdInput
                    ionic.on('blur', toggleClass, mdInput);

                };


            }
        };
    });