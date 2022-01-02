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
                                <a href="modules/CreateAvatarModule.html" data-type="entity-link" >CreateAvatarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateAvatarModule-b2212e39bd02a1216abe125387fc6780"' : 'data-target="#xs-components-links-module-CreateAvatarModule-b2212e39bd02a1216abe125387fc6780"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateAvatarModule-b2212e39bd02a1216abe125387fc6780"' :
                                            'id="xs-components-links-module-CreateAvatarModule-b2212e39bd02a1216abe125387fc6780"' }>
                                            <li class="link">
                                                <a href="components/CreateAvatarScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAvatarScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateAvatarRoutingModule.html" data-type="entity-link" >CreateAvatarRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ManageAvatarsModule.html" data-type="entity-link" >ManageAvatarsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ManageAvatarsModule-46d7c4aa9a8142066638dde7837c86b1"' : 'data-target="#xs-components-links-module-ManageAvatarsModule-46d7c4aa9a8142066638dde7837c86b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ManageAvatarsModule-46d7c4aa9a8142066638dde7837c86b1"' :
                                            'id="xs-components-links-module-ManageAvatarsModule-46d7c4aa9a8142066638dde7837c86b1"' }>
                                            <li class="link">
                                                <a href="components/ManageAvatarsRoot.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageAvatarsRoot</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ManageAvatarsRoutingModule.html" data-type="entity-link" >ManageAvatarsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectAvatarModule.html" data-type="entity-link" >SelectAvatarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectAvatarModule-cccbca8d055c53f397b75dd876cb3ae6"' : 'data-target="#xs-components-links-module-SelectAvatarModule-cccbca8d055c53f397b75dd876cb3ae6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectAvatarModule-cccbca8d055c53f397b75dd876cb3ae6"' :
                                            'id="xs-components-links-module-SelectAvatarModule-cccbca8d055c53f397b75dd876cb3ae6"' }>
                                            <li class="link">
                                                <a href="components/SelectAvatarScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectAvatarScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectAvatarRoutingModule.html" data-type="entity-link" >SelectAvatarRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectedAvatarModule.html" data-type="entity-link" >SelectedAvatarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectedAvatarModule-6acdd375f86933648057f5d03297df56"' : 'data-target="#xs-components-links-module-SelectedAvatarModule-6acdd375f86933648057f5d03297df56"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectedAvatarModule-6acdd375f86933648057f5d03297df56"' :
                                            'id="xs-components-links-module-SelectedAvatarModule-6acdd375f86933648057f5d03297df56"' }>
                                            <li class="link">
                                                <a href="components/SelectedAvatarScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelectedAvatarScene</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectedAvatarRoutingModule.html" data-type="entity-link" >SelectedAvatarRoutingModule</a>
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