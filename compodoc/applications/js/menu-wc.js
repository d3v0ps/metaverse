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
                                <a href="modules/ApplicationActionsModule.html" data-type="entity-link" >ApplicationActionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"' : 'data-target="#xs-components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"' :
                                            'id="xs-components-links-module-ApplicationActionsModule-9394bd046d7ca4039a71c53b012199c9"' }>
                                            <li class="link">
                                                <a href="components/ApplicationActionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationActionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
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
                                <a href="modules/ApplicationsCarouselModule.html" data-type="entity-link" >ApplicationsCarouselModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"' : 'data-target="#xs-components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"' :
                                            'id="xs-components-links-module-ApplicationsCarouselModule-416e12bbe78c9ae27d7e4633f87b89fa"' }>
                                            <li class="link">
                                                <a href="components/ApplicationsCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationsCarouselComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationSheetModule.html" data-type="entity-link" >ApplicationSheetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"' : 'data-target="#xs-components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"' :
                                            'id="xs-components-links-module-ApplicationSheetModule-92a38ca74e06b40eb5cdb130a8d3e55b"' }>
                                            <li class="link">
                                                <a href="components/ApplicationSheetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationSheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationShortcutModule.html" data-type="entity-link" >ApplicationShortcutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"' : 'data-target="#xs-components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"' :
                                            'id="xs-components-links-module-ApplicationShortcutModule-1a6d346e0acf3c353ff0c23345dcfff4"' }>
                                            <li class="link">
                                                <a href="components/ApplicationShortcutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApplicationShortcutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationToolbarModule.html" data-type="entity-link" >ApplicationToolbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"' : 'data-target="#xs-components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"' :
                                            'id="xs-components-links-module-ApplicationToolbarModule-0d70644d160d6031655ff80a3f347807"' }>
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
                                            'data-target="#components-links-module-ApplicationViewModule-91689559f0f557c690ad8577eedbae0a"' : 'data-target="#xs-components-links-module-ApplicationViewModule-91689559f0f557c690ad8577eedbae0a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationViewModule-91689559f0f557c690ad8577eedbae0a"' :
                                            'id="xs-components-links-module-ApplicationViewModule-91689559f0f557c690ad8577eedbae0a"' }>
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
                                            'data-target="#components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"' : 'data-target="#xs-components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"' :
                                            'id="xs-components-links-module-ApplicationWebviewModule-2bbbccfaa6a85776655163dc8fec6327"' }>
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
                                    <a href="injectables/InstallApplicationsState.html" data-type="entity-link" >InstallApplicationsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InternalUserApplicationsState.html" data-type="entity-link" >InternalUserApplicationsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecentlyOpenedApplicationsState.html" data-type="entity-link" >RecentlyOpenedApplicationsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectedApplicationState.html" data-type="entity-link" >SelectedApplicationState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StarredApplicationsState.html" data-type="entity-link" >StarredApplicationsState</a>
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