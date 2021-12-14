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
                                <a href="modules/AvatarAppearancesModule.html" data-type="entity-link" >AvatarAppearancesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancesModule-375092de34777aea6fc873973c55d3c5"' : 'data-target="#xs-components-links-module-AvatarAppearancesModule-375092de34777aea6fc873973c55d3c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancesModule-375092de34777aea6fc873973c55d3c5"' :
                                            'id="xs-components-links-module-AvatarAppearancesModule-375092de34777aea6fc873973c55d3c5"' }>
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
                                <a href="modules/PreviewAvatarAppearanceModule.html" data-type="entity-link" >PreviewAvatarAppearanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PreviewAvatarAppearanceModule-74c3f8e3efbbec73880200ed2b68aa93"' : 'data-target="#xs-components-links-module-PreviewAvatarAppearanceModule-74c3f8e3efbbec73880200ed2b68aa93"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PreviewAvatarAppearanceModule-74c3f8e3efbbec73880200ed2b68aa93"' :
                                            'id="xs-components-links-module-PreviewAvatarAppearanceModule-74c3f8e3efbbec73880200ed2b68aa93"' }>
                                            <li class="link">
                                                <a href="components/PreviewAvatarAppearanceScene.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviewAvatarAppearanceScene</a>
                                            </li>
                                        </ul>
                                    </li>
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
                                <a href="interfaces/AvatarAppearancesForm.html" data-type="entity-link" >AvatarAppearancesForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AvatarOverviewInput.html" data-type="entity-link" >AvatarOverviewInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Environment.html" data-type="entity-link" >Environment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormAppearance.html" data-type="entity-link" >FormAppearance</a>
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