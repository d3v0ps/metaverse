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
                                <a href="modules/CreditsModule.html" data-type="entity-link" >CreditsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreditsModule-4612f79fcc7af8be6a7f892671e6607c"' : 'data-target="#xs-components-links-module-CreditsModule-4612f79fcc7af8be6a7f892671e6607c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreditsModule-4612f79fcc7af8be6a7f892671e6607c"' :
                                            'id="xs-components-links-module-CreditsModule-4612f79fcc7af8be6a7f892671e6607c"' }>
                                            <li class="link">
                                                <a href="components/CreditsScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditsScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreditsRoutingModule.html" data-type="entity-link" >CreditsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CustomizationModule.html" data-type="entity-link" >CustomizationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomizationModule-8762cccfeb36a509b42dcb01415c232f"' : 'data-target="#xs-components-links-module-CustomizationModule-8762cccfeb36a509b42dcb01415c232f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomizationModule-8762cccfeb36a509b42dcb01415c232f"' :
                                            'id="xs-components-links-module-CustomizationModule-8762cccfeb36a509b42dcb01415c232f"' }>
                                            <li class="link">
                                                <a href="components/CustomizationScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomizationScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomizationRoutingModule.html" data-type="entity-link" >CustomizationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortalLayoutSceneModule.html" data-type="entity-link" >PortalLayoutSceneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortalLayoutSceneModule-6fc7676691ad837dfbaa2309cf7a47f2"' : 'data-target="#xs-components-links-module-PortalLayoutSceneModule-6fc7676691ad837dfbaa2309cf7a47f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortalLayoutSceneModule-6fc7676691ad837dfbaa2309cf7a47f2"' :
                                            'id="xs-components-links-module-PortalLayoutSceneModule-6fc7676691ad837dfbaa2309cf7a47f2"' }>
                                            <li class="link">
                                                <a href="components/PortalLayoutScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortalLayoutScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortalMocksModule.html" data-type="entity-link" >PortalMocksModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortalModule.html" data-type="entity-link" >PortalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortalModule-23c2461aa33e4656f409c552628fcbbc"' : 'data-target="#xs-components-links-module-PortalModule-23c2461aa33e4656f409c552628fcbbc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortalModule-23c2461aa33e4656f409c552628fcbbc"' :
                                            'id="xs-components-links-module-PortalModule-23c2461aa33e4656f409c552628fcbbc"' }>
                                            <li class="link">
                                                <a href="components/PortalRoot.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortalRoot</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortalProvidersModule.html" data-type="entity-link" >PortalProvidersModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortalRoutingModule.html" data-type="entity-link" >PortalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-c6bdb027205a335559256db082421cb6"' : 'data-target="#xs-components-links-module-SettingsModule-c6bdb027205a335559256db082421cb6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-c6bdb027205a335559256db082421cb6"' :
                                            'id="xs-components-links-module-SettingsModule-c6bdb027205a335559256db082421cb6"' }>
                                            <li class="link">
                                                <a href="components/SettingsNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorldSceneModule.html" data-type="entity-link" >WorldSceneModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorldSceneModule-477fb8274c748aa50b17f702ba30d08c"' : 'data-target="#xs-components-links-module-WorldSceneModule-477fb8274c748aa50b17f702ba30d08c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorldSceneModule-477fb8274c748aa50b17f702ba30d08c"' :
                                            'id="xs-components-links-module-WorldSceneModule-477fb8274c748aa50b17f702ba30d08c"' }>
                                            <li class="link">
                                                <a href="components/WorldScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorldScene</a>
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
                                    <a href="injectables/BackgroundRenderer.html" data-type="entity-link" >BackgroundRenderer</a>
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
                                <a href="interfaces/Environment.html" data-type="entity-link" >Environment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SidebarItem.html" data-type="entity-link" >SidebarItem</a>
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
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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