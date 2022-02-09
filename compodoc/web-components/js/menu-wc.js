'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" src=images/logo.svg>
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/BemModule.html" data-type="entity-link" >BemModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-BemModule-2902b14de9e185beea6f8bb3c6f378a0"' : 'data-target="#xs-directives-links-module-BemModule-2902b14de9e185beea6f8bb3c6f378a0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-BemModule-2902b14de9e185beea6f8bb3c6f378a0"' :
                                        'id="xs-directives-links-module-BemModule-2902b14de9e185beea6f8bb3c6f378a0"' }>
                                        <li class="link">
                                            <a href="directives/BlockDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlockDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ElemDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ElemDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ModDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ColorPickerSelectModule.html" data-type="entity-link" >ColorPickerSelectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ColorPickerSelectModule-ffa138554e7255a14a56e7369b732d0d"' : 'data-target="#xs-components-links-module-ColorPickerSelectModule-ffa138554e7255a14a56e7369b732d0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ColorPickerSelectModule-ffa138554e7255a14a56e7369b732d0d"' :
                                            'id="xs-components-links-module-ColorPickerSelectModule-ffa138554e7255a14a56e7369b732d0d"' }>
                                            <li class="link">
                                                <a href="components/ColorPickerSelectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorPickerSelectComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DraggableModule.html" data-type="entity-link" >DraggableModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DraggableModule-f87ce089a45f82416828a5fd9f72f501"' : 'data-target="#xs-directives-links-module-DraggableModule-f87ce089a45f82416828a5fd9f72f501"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DraggableModule-f87ce089a45f82416828a5fd9f72f501"' :
                                        'id="xs-directives-links-module-DraggableModule-f87ce089a45f82416828a5fd9f72f501"' }>
                                        <li class="link">
                                            <a href="directives/DraggableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DraggableDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FileUploadModule.html" data-type="entity-link" >FileUploadModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FileUploadModule-bca94d2e21f58c06ef465c258e0f7bbe"' : 'data-target="#xs-components-links-module-FileUploadModule-bca94d2e21f58c06ef465c258e0f7bbe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FileUploadModule-bca94d2e21f58c06ef465c258e0f7bbe"' :
                                            'id="xs-components-links-module-FileUploadModule-bca94d2e21f58c06ef465c258e0f7bbe"' }>
                                            <li class="link">
                                                <a href="components/FileUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FileUploadComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavbarModule.html" data-type="entity-link" >NavbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavbarModule-01709e3a9a1f9c38505fec4e38a01a3c"' : 'data-target="#xs-components-links-module-NavbarModule-01709e3a9a1f9c38505fec4e38a01a3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavbarModule-01709e3a9a1f9c38505fec4e38a01a3c"' :
                                            'id="xs-components-links-module-NavbarModule-01709e3a9a1f9c38505fec4e38a01a3c"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PopoverModule.html" data-type="entity-link" >PopoverModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' : 'data-target="#xs-components-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' :
                                            'id="xs-components-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' }>
                                            <li class="link">
                                                <a href="components/PopoverContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopoverContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' : 'data-target="#xs-directives-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' :
                                        'id="xs-directives-links-module-PopoverModule-95d08308d78eb1474d6388d5fbafb894"' }>
                                        <li class="link">
                                            <a href="directives/PopoverDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopoverDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResizableModule.html" data-type="entity-link" >ResizableModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ResizableModule-a1ba694f06025536837ee36b7126711c"' : 'data-target="#xs-directives-links-module-ResizableModule-a1ba694f06025536837ee36b7126711c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ResizableModule-a1ba694f06025536837ee36b7126711c"' :
                                        'id="xs-directives-links-module-ResizableModule-a1ba694f06025536837ee36b7126711c"' }>
                                        <li class="link">
                                            <a href="directives/ResizableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResizableDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' : 'data-target="#xs-components-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' :
                                            'id="xs-components-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' : 'data-target="#xs-directives-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' :
                                        'id="xs-directives-links-module-SidebarModule-e6c9c4f01f30ebbafa07d8e325f7aa77"' }>
                                        <li class="link">
                                            <a href="directives/CloseSidebarDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CloseSidebarDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpinnerModule.html" data-type="entity-link" >SpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpinnerModule-584ca970117705362aa35810ad5ab541"' : 'data-target="#xs-components-links-module-SpinnerModule-584ca970117705362aa35810ad5ab541"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpinnerModule-584ca970117705362aa35810ad5ab541"' :
                                            'id="xs-components-links-module-SpinnerModule-584ca970117705362aa35810ad5ab541"' }>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashScreenModule.html" data-type="entity-link" >SplashScreenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SplashScreenModule-a73a0ca7bacf42f848f778363c8b94f9"' : 'data-target="#xs-components-links-module-SplashScreenModule-a73a0ca7bacf42f848f778363c8b94f9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SplashScreenModule-a73a0ca7bacf42f848f778363c8b94f9"' :
                                            'id="xs-components-links-module-SplashScreenModule-a73a0ca7bacf42f848f778363c8b94f9"' }>
                                            <li class="link">
                                                <a href="components/SplashScreenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashScreenComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SvgIconModule.html" data-type="entity-link" >SvgIconModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SvgIconModule-703479458291685e8140bc3591ef9ee6"' : 'data-target="#xs-components-links-module-SvgIconModule-703479458291685e8140bc3591ef9ee6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SvgIconModule-703479458291685e8140bc3591ef9ee6"' :
                                            'id="xs-components-links-module-SvgIconModule-703479458291685e8140bc3591ef9ee6"' }>
                                            <li class="link">
                                                <a href="components/SvgIconComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SvgIconComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsetModule.html" data-type="entity-link" >TabsetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsetModule-946cda979987c4408255d478658cfdb2"' : 'data-target="#xs-components-links-module-TabsetModule-946cda979987c4408255d478658cfdb2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsetModule-946cda979987c4408255d478658cfdb2"' :
                                            'id="xs-components-links-module-TabsetModule-946cda979987c4408255d478658cfdb2"' }>
                                            <li class="link">
                                                <a href="components/TabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TabsetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WindowModule.html" data-type="entity-link" >WindowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WindowModule-16cd5aa919977ca808f7a8d9c246c9ee"' : 'data-target="#xs-components-links-module-WindowModule-16cd5aa919977ca808f7a8d9c246c9ee"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WindowModule-16cd5aa919977ca808f7a8d9c246c9ee"' :
                                            'id="xs-components-links-module-WindowModule-16cd5aa919977ca808f7a8d9c246c9ee"' }>
                                            <li class="link">
                                                <a href="components/WindowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WindowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BemConfig.html" data-type="entity-link" >BemConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/SvgIconHelper.html" data-type="entity-link" >SvgIconHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/SvgLoader.html" data-type="entity-link" >SvgLoader</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BemService.html" data-type="entity-link" >BemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SvgHttpLoader.html" data-type="entity-link" >SvgHttpLoader</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SvgIconRegistryService.html" data-type="entity-link" >SvgIconRegistryService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SvgIconConfig.html" data-type="entity-link" >SvgIconConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});