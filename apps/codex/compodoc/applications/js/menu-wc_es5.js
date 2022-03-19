'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">\n                        <img alt=\"\" class=\"img-responsive\" data-type=\"custom-logo\" src=images/logo.svg>\n                    </a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"contributing.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CONTRIBUTING\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationActionsModule.html\" data-type=\"entity-link\" >ApplicationActionsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"' : 'data-target="#xs-components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"' : 'id="xs-components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationActionsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationActionsComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationCardModule.html\" data-type=\"entity-link\" >ApplicationCardModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationCardModule-53b098b9a3fc868fd3212cbaee769bb7"' : 'data-target="#xs-components-links-module-ApplicationCardModule-53b098b9a3fc868fd3212cbaee769bb7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationCardModule-53b098b9a3fc868fd3212cbaee769bb7"' : 'id="xs-components-links-module-ApplicationCardModule-53b098b9a3fc868fd3212cbaee769bb7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationCardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationCardComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationDescriptionModule.html\" data-type=\"entity-link\" >ApplicationDescriptionModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationDescriptionModule-a079ec5d39b27d7894b209a4d63785bd"' : 'data-target="#xs-components-links-module-ApplicationDescriptionModule-a079ec5d39b27d7894b209a4d63785bd"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationDescriptionModule-a079ec5d39b27d7894b209a4d63785bd"' : 'id="xs-components-links-module-ApplicationDescriptionModule-a079ec5d39b27d7894b209a4d63785bd"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationDescriptionComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationDescriptionComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationFooterModule.html\" data-type=\"entity-link\" >ApplicationFooterModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationFooterModule-71546d412d58607327b93c2aa7dbe0f7"' : 'data-target="#xs-components-links-module-ApplicationFooterModule-71546d412d58607327b93c2aa7dbe0f7"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationFooterModule-71546d412d58607327b93c2aa7dbe0f7"' : 'id="xs-components-links-module-ApplicationFooterModule-71546d412d58607327b93c2aa7dbe0f7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationFooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationFooterComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationHeaderModule.html\" data-type=\"entity-link\" >ApplicationHeaderModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationHeaderModule-2f9d167515e7ca45237cfd597a1ad68b"' : 'data-target="#xs-components-links-module-ApplicationHeaderModule-2f9d167515e7ca45237cfd597a1ad68b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationHeaderModule-2f9d167515e7ca45237cfd597a1ad68b"' : 'id="xs-components-links-module-ApplicationHeaderModule-2f9d167515e7ca45237cfd597a1ad68b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationHeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationHeaderComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationIconModule.html\" data-type=\"entity-link\" >ApplicationIconModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationIconModule-0b72f400afe0b9d6cd8a07fef36144de"' : 'data-target="#xs-components-links-module-ApplicationIconModule-0b72f400afe0b9d6cd8a07fef36144de"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationIconModule-0b72f400afe0b9d6cd8a07fef36144de"' : 'id="xs-components-links-module-ApplicationIconModule-0b72f400afe0b9d6cd8a07fef36144de"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationIconComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationIconComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationInfoModule.html\" data-type=\"entity-link\" >ApplicationInfoModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationInfoModule-8e3517793cf59d45429e47a3ea3ccc76"' : 'data-target="#xs-components-links-module-ApplicationInfoModule-8e3517793cf59d45429e47a3ea3ccc76"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationInfoModule-8e3517793cf59d45429e47a3ea3ccc76"' : 'id="xs-components-links-module-ApplicationInfoModule-8e3517793cf59d45429e47a3ea3ccc76"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationInfoComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationInfoComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationsCarouselModule.html\" data-type=\"entity-link\" >ApplicationsCarouselModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"' : 'data-target="#xs-components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"' : 'id="xs-components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationsCarouselComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationsCarouselComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationSheetModule.html\" data-type=\"entity-link\" >ApplicationSheetModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"' : 'data-target="#xs-components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"' : 'id="xs-components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationSheetComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationSheetComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationShortcutModule.html\" data-type=\"entity-link\" >ApplicationShortcutModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"' : 'data-target="#xs-components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"' : 'id="xs-components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationShortcutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationShortcutComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationsStoreModule.html\" data-type=\"entity-link\" >ApplicationsStoreModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationsStoreModule-4cebcf4229ce135b968762e89614927f"' : 'data-target="#xs-components-links-module-ApplicationsStoreModule-4cebcf4229ce135b968762e89614927f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationsStoreModule-4cebcf4229ce135b968762e89614927f"' : 'id="xs-components-links-module-ApplicationsStoreModule-4cebcf4229ce135b968762e89614927f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationsStoreComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationsStoreComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationToolbarModule.html\" data-type=\"entity-link\" >ApplicationToolbarModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"' : 'data-target="#xs-components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"' : 'id="xs-components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationToolbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationToolbarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationViewModule.html\" data-type=\"entity-link\" >ApplicationViewModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationViewModule-67b888098d7b3aa83347c977d9174a16"' : 'data-target="#xs-components-links-module-ApplicationViewModule-67b888098d7b3aa83347c977d9174a16"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationViewModule-67b888098d7b3aa83347c977d9174a16"' : 'id="xs-components-links-module-ApplicationViewModule-67b888098d7b3aa83347c977d9174a16"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationViewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationViewComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ApplicationWebviewModule.html\" data-type=\"entity-link\" >ApplicationWebviewModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"' : 'data-target="#xs-components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"' : 'id="xs-components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApplicationWebviewComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApplicationWebviewComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationCatchCommand.html\" data-type=\"entity-link\" >ApplicationCatchCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationCaughtEvent.html\" data-type=\"entity-link\" >ApplicationCaughtEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationCloseCommand.html\" data-type=\"entity-link\" >ApplicationCloseCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationClosedEvent.html\" data-type=\"entity-link\" >ApplicationClosedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationGroupCommand.html\" data-type=\"entity-link\" >ApplicationGroupCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationGroupedEvent.html\" data-type=\"entity-link\" >ApplicationGroupedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationHiddenEvent.html\" data-type=\"entity-link\" >ApplicationHiddenEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationHideCommand.html\" data-type=\"entity-link\" >ApplicationHideCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationOpenCommand.html\" data-type=\"entity-link\" >ApplicationOpenCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationOpenedEvent.html\" data-type=\"entity-link\" >ApplicationOpenedEvent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationShowCommand.html\" data-type=\"entity-link\" >ApplicationShowCommand</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ApplicationShownEvent.html\" data-type=\"entity-link\" >ApplicationShownEvent</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/ApplicationDisplayState.html\" data-type=\"entity-link\" >ApplicationDisplayState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AvailableApplicationsState.html\" data-type=\"entity-link\" >AvailableApplicationsState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ExternalUserApplicationsState.html\" data-type=\"entity-link\" >ExternalUserApplicationsState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/InstallApplicationsState.html\" data-type=\"entity-link\" >InstallApplicationsState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/InternalUserApplicationsState.html\" data-type=\"entity-link\" >InternalUserApplicationsState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LocalApplicationComponentsResolver.html\" data-type=\"entity-link\" >LocalApplicationComponentsResolver</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RecentlyOpenedApplicationsState.html\" data-type=\"entity-link\" >RecentlyOpenedApplicationsState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SelectedApplicationState.html\" data-type=\"entity-link\" >SelectedApplicationState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/StarredApplicationsState.html\" data-type=\"entity-link\" >StarredApplicationsState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/StoreApplicationsState.html\" data-type=\"entity-link\" >StoreApplicationsState</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UserApplicationsState.html\" data-type=\"entity-link\" >UserApplicationsState</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));