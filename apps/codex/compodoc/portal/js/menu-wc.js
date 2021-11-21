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
                                <a href="modules/AvatarAppearancesModule.html" data-type="entity-link" >AvatarAppearancesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancesModule-5d40e3ee0aa8f980bc07acf6263634ab"' : 'data-target="#xs-components-links-module-AvatarAppearancesModule-5d40e3ee0aa8f980bc07acf6263634ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancesModule-5d40e3ee0aa8f980bc07acf6263634ab"' :
                                            'id="xs-components-links-module-AvatarAppearancesModule-5d40e3ee0aa8f980bc07acf6263634ab"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearancesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarOverviewModule.html" data-type="entity-link" >AvatarOverviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarOverviewModule-f5c43ae9e534376bb33b739e896ab251"' : 'data-target="#xs-components-links-module-AvatarOverviewModule-f5c43ae9e534376bb33b739e896ab251"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarOverviewModule-f5c43ae9e534376bb33b739e896ab251"' :
                                            'id="xs-components-links-module-AvatarOverviewModule-f5c43ae9e534376bb33b739e896ab251"' }>
                                            <li class="link">
                                                <a href="components/AvatarOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarScopesModule.html" data-type="entity-link" >AvatarScopesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarScopesModule-36f7b3e4a0e2d703adcc77efedf890e6"' : 'data-target="#xs-components-links-module-AvatarScopesModule-36f7b3e4a0e2d703adcc77efedf890e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarScopesModule-36f7b3e4a0e2d703adcc77efedf890e6"' :
                                            'id="xs-components-links-module-AvatarScopesModule-36f7b3e4a0e2d703adcc77efedf890e6"' }>
                                            <li class="link">
                                                <a href="components/AvatarScopesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarScopesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarSkillsModule.html" data-type="entity-link" >AvatarSkillsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarSkillsModule-89cf0086527a888a8dc62d83877b7206"' : 'data-target="#xs-components-links-module-AvatarSkillsModule-89cf0086527a888a8dc62d83877b7206"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarSkillsModule-89cf0086527a888a8dc62d83877b7206"' :
                                            'id="xs-components-links-module-AvatarSkillsModule-89cf0086527a888a8dc62d83877b7206"' }>
                                            <li class="link">
                                                <a href="components/AvatarSkillsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarSkillsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateAvatarModule.html" data-type="entity-link" >CreateAvatarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CreateAvatarModule-cdf61ac03076a4b47235ffa065b00c36"' : 'data-target="#xs-components-links-module-CreateAvatarModule-cdf61ac03076a4b47235ffa065b00c36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CreateAvatarModule-cdf61ac03076a4b47235ffa065b00c36"' :
                                            'id="xs-components-links-module-CreateAvatarModule-cdf61ac03076a4b47235ffa065b00c36"' }>
                                            <li class="link">
                                                <a href="components/CreateAvatarView.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAvatarView</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CreateAvatarRoutingModule.html" data-type="entity-link" >CreateAvatarRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-a96f2390cd6c3f0244b51d64efc165cb"' : 'data-target="#xs-components-links-module-DashboardModule-a96f2390cd6c3f0244b51d64efc165cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-a96f2390cd6c3f0244b51d64efc165cb"' :
                                            'id="xs-components-links-module-DashboardModule-a96f2390cd6c3f0244b51d64efc165cb"' }>
                                            <li class="link">
                                                <a href="components/DashboardView.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardView</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MarketplaceModule.html" data-type="entity-link" >MarketplaceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarketplaceModule-779651eef14c83e3865599b65ddddafd"' : 'data-target="#xs-components-links-module-MarketplaceModule-779651eef14c83e3865599b65ddddafd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarketplaceModule-779651eef14c83e3865599b65ddddafd"' :
                                            'id="xs-components-links-module-MarketplaceModule-779651eef14c83e3865599b65ddddafd"' }>
                                            <li class="link">
                                                <a href="components/MarketplaceView.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketplaceView</a>
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
                                <a href="modules/SelectedAvatarModule.html" data-type="entity-link" >SelectedAvatarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectedAvatarModule-0dbbe87f13072fc6251555f6ac189d69"' : 'data-target="#xs-components-links-module-SelectedAvatarModule-0dbbe87f13072fc6251555f6ac189d69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectedAvatarModule-0dbbe87f13072fc6251555f6ac189d69"' :
                                            'id="xs-components-links-module-SelectedAvatarModule-0dbbe87f13072fc6251555f6ac189d69"' }>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AvatarAppeareancesInput.html" data-type="entity-link" >AvatarAppeareancesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvatarScopesInput.html" data-type="entity-link" >AvatarScopesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvatarSkillsInput.html" data-type="entity-link" >AvatarSkillsInput</a>
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
                                <a href="interfaces/Appearance.html" data-type="entity-link" >Appearance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AvatarOverviewInput.html" data-type="entity-link" >AvatarOverviewInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Environment.html" data-type="entity-link" >Environment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Scope.html" data-type="entity-link" >Scope</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedAvatarInput.html" data-type="entity-link" >SelectedAvatarInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Skill.html" data-type="entity-link" >Skill</a>
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