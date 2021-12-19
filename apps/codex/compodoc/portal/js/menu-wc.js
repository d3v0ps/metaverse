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
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
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
                                <a href="modules/AssetDetailModule.html" data-type="entity-link" >AssetDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AssetDetailModule-eb7dd1eb58f815b5d7c8c85dd34640dd"' : 'data-target="#xs-components-links-module-AssetDetailModule-eb7dd1eb58f815b5d7c8c85dd34640dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AssetDetailModule-eb7dd1eb58f815b5d7c8c85dd34640dd"' :
                                            'id="xs-components-links-module-AssetDetailModule-eb7dd1eb58f815b5d7c8c85dd34640dd"' }>
                                            <li class="link">
                                                <a href="components/AssetDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssetDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AssetsGridModule.html" data-type="entity-link" >AssetsGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AssetsGridModule-952b5d13f0c1deb514551e8f91b12ca3"' : 'data-target="#xs-components-links-module-AssetsGridModule-952b5d13f0c1deb514551e8f91b12ca3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AssetsGridModule-952b5d13f0c1deb514551e8f91b12ca3"' :
                                            'id="xs-components-links-module-AssetsGridModule-952b5d13f0c1deb514551e8f91b12ca3"' }>
                                            <li class="link">
                                                <a href="components/AssetsGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AssetsGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-441a995af2e48fc691b7aae8d4808e33"' : 'data-target="#xs-components-links-module-DashboardModule-441a995af2e48fc691b7aae8d4808e33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-441a995af2e48fc691b7aae8d4808e33"' :
                                            'id="xs-components-links-module-DashboardModule-441a995af2e48fc691b7aae8d4808e33"' }>
                                            <li class="link">
                                                <a href="components/DashboardScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryModule.html" data-type="entity-link" >InventoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InventoryModule-7045d98e4f93f8be8f122b5b201d8c59"' : 'data-target="#xs-components-links-module-InventoryModule-7045d98e4f93f8be8f122b5b201d8c59"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InventoryModule-7045d98e4f93f8be8f122b5b201d8c59"' :
                                            'id="xs-components-links-module-InventoryModule-7045d98e4f93f8be8f122b5b201d8c59"' }>
                                            <li class="link">
                                                <a href="components/InventoryScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InventoryScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InventoryRoutingModule.html" data-type="entity-link" >InventoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MarketplaceModule.html" data-type="entity-link" >MarketplaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarketplaceModule-46e584c2343078df14753b345ec62317"' : 'data-target="#xs-components-links-module-MarketplaceModule-46e584c2343078df14753b345ec62317"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarketplaceModule-46e584c2343078df14753b345ec62317"' :
                                            'id="xs-components-links-module-MarketplaceModule-46e584c2343078df14753b345ec62317"' }>
                                            <li class="link">
                                                <a href="components/MarketplaceScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketplaceScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketplaceRoutingModule.html" data-type="entity-link" >MarketplaceRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PortalModule.html" data-type="entity-link" >PortalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PortalModule-64c5e38d9009bae32f32d436dfdbe28b"' : 'data-target="#xs-components-links-module-PortalModule-64c5e38d9009bae32f32d436dfdbe28b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PortalModule-64c5e38d9009bae32f32d436dfdbe28b"' :
                                            'id="xs-components-links-module-PortalModule-64c5e38d9009bae32f32d436dfdbe28b"' }>
                                            <li class="link">
                                                <a href="components/PortalRoot.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PortalRoot</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PortalRoutingModule.html" data-type="entity-link" >PortalRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-da5a96a1abd390e63d8f9ddf368125e0"' : 'data-target="#xs-components-links-module-SettingsModule-da5a96a1abd390e63d8f9ddf368125e0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-da5a96a1abd390e63d8f9ddf368125e0"' :
                                            'id="xs-components-links-module-SettingsModule-da5a96a1abd390e63d8f9ddf368125e0"' }>
                                            <li class="link">
                                                <a href="components/SettingsScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
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
                                <a href="interfaces/PortalStateModel.html" data-type="entity-link" >PortalStateModel</a>
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