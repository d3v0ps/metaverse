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
                                <a href="modules/ApplicationCardModule.html" data-type="entity-link" >ApplicationCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationCardModule-e12dad03063880f677250d4afe53b8a4"' : 'data-target="#xs-components-links-module-ApplicationCardModule-e12dad03063880f677250d4afe53b8a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationCardModule-e12dad03063880f677250d4afe53b8a4"' :
                                            'id="xs-components-links-module-ApplicationCardModule-e12dad03063880f677250d4afe53b8a4"' }>
                                            <li class="link">
                                                <a href="components/ApplicationCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationSheetModule.html" data-type="entity-link" >ApplicationSheetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationSheetModule-bca6661a9a07861e29a81df4a62bb9f3"' : 'data-target="#xs-components-links-module-ApplicationSheetModule-bca6661a9a07861e29a81df4a62bb9f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationSheetModule-bca6661a9a07861e29a81df4a62bb9f3"' :
                                            'id="xs-components-links-module-ApplicationSheetModule-bca6661a9a07861e29a81df4a62bb9f3"' }>
                                            <li class="link">
                                                <a href="components/ApplicationSheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationSheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationToolbarModule.html" data-type="entity-link" >ApplicationToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationToolbarModule-0fbbacb03824158596828c6688fbb06b"' : 'data-target="#xs-components-links-module-ApplicationToolbarModule-0fbbacb03824158596828c6688fbb06b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationToolbarModule-0fbbacb03824158596828c6688fbb06b"' :
                                            'id="xs-components-links-module-ApplicationToolbarModule-0fbbacb03824158596828c6688fbb06b"' }>
                                            <li class="link">
                                                <a href="components/ApplicationToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationViewModule.html" data-type="entity-link" >ApplicationViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationViewModule-bdb774ace38d387f82da6ff1a51d01cd"' : 'data-target="#xs-components-links-module-ApplicationViewModule-bdb774ace38d387f82da6ff1a51d01cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationViewModule-bdb774ace38d387f82da6ff1a51d01cd"' :
                                            'id="xs-components-links-module-ApplicationViewModule-bdb774ace38d387f82da6ff1a51d01cd"' }>
                                            <li class="link">
                                                <a href="components/ApplicationViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationWebviewModule.html" data-type="entity-link" >ApplicationWebviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationWebviewModule-7d8c031f8885f29d417dc6a7f84c2fea"' : 'data-target="#xs-components-links-module-ApplicationWebviewModule-7d8c031f8885f29d417dc6a7f84c2fea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationWebviewModule-7d8c031f8885f29d417dc6a7f84c2fea"' :
                                            'id="xs-components-links-module-ApplicationWebviewModule-7d8c031f8885f29d417dc6a7f84c2fea"' }>
                                            <li class="link">
                                                <a href="components/ApplicationWebviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationWebviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                    <a href="injectables/AvailableApplicationsState.html" data-type="entity-link" >AvailableApplicationsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExternalUserApplicationsState.html" data-type="entity-link" >ExternalUserApplicationsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InternalUserApplicationsState.html" data-type="entity-link" >InternalUserApplicationsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreApplicationsState.html" data-type="entity-link" >StoreApplicationsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserApplicationsState.html" data-type="entity-link" >UserApplicationsState</a>
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