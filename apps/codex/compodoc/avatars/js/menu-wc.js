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
                                <a href="modules/AvatarAppearancesModule.html" data-type="entity-link" >AvatarAppearancesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancesModule-ab346f5a2c2bbee294e4f2e65bdd7d71"' : 'data-target="#xs-components-links-module-AvatarAppearancesModule-ab346f5a2c2bbee294e4f2e65bdd7d71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancesModule-ab346f5a2c2bbee294e4f2e65bdd7d71"' :
                                            'id="xs-components-links-module-AvatarAppearancesModule-ab346f5a2c2bbee294e4f2e65bdd7d71"' }>
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
                                            'data-target="#components-links-module-AvatarOverviewModule-bd11ad9bb03fec3621786707ad132f67"' : 'data-target="#xs-components-links-module-AvatarOverviewModule-bd11ad9bb03fec3621786707ad132f67"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarOverviewModule-bd11ad9bb03fec3621786707ad132f67"' :
                                            'id="xs-components-links-module-AvatarOverviewModule-bd11ad9bb03fec3621786707ad132f67"' }>
                                            <li class="link">
                                                <a href="components/AvatarOverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarOverviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarsCarouselModule.html" data-type="entity-link" >AvatarsCarouselModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarsCarouselModule-91367af394d84044eb48b23f790f6c63"' : 'data-target="#xs-components-links-module-AvatarsCarouselModule-91367af394d84044eb48b23f790f6c63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarsCarouselModule-91367af394d84044eb48b23f790f6c63"' :
                                            'id="xs-components-links-module-AvatarsCarouselModule-91367af394d84044eb48b23f790f6c63"' }>
                                            <li class="link">
                                                <a href="components/AvatarsCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarsCarouselComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarScopesModule.html" data-type="entity-link" >AvatarScopesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarScopesModule-0984c57b805af1cf9cc5c371e0b00204"' : 'data-target="#xs-components-links-module-AvatarScopesModule-0984c57b805af1cf9cc5c371e0b00204"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarScopesModule-0984c57b805af1cf9cc5c371e0b00204"' :
                                            'id="xs-components-links-module-AvatarScopesModule-0984c57b805af1cf9cc5c371e0b00204"' }>
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
                                            'data-target="#components-links-module-AvatarSkillsModule-34e54c13a748339c627882f61ba38ec2"' : 'data-target="#xs-components-links-module-AvatarSkillsModule-34e54c13a748339c627882f61ba38ec2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarSkillsModule-34e54c13a748339c627882f61ba38ec2"' :
                                            'id="xs-components-links-module-AvatarSkillsModule-34e54c13a748339c627882f61ba38ec2"' }>
                                            <li class="link">
                                                <a href="components/AvatarSkillsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarSkillsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PreviewAvatarAppearanceModule.html" data-type="entity-link" >PreviewAvatarAppearanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PreviewAvatarAppearanceModule-eedbee41cca01b5f16af12d5bb65cf55"' : 'data-target="#xs-components-links-module-PreviewAvatarAppearanceModule-eedbee41cca01b5f16af12d5bb65cf55"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PreviewAvatarAppearanceModule-eedbee41cca01b5f16af12d5bb65cf55"' :
                                            'id="xs-components-links-module-PreviewAvatarAppearanceModule-eedbee41cca01b5f16af12d5bb65cf55"' }>
                                            <li class="link">
                                                <a href="components/PreviewAvatarAppearanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PreviewAvatarAppearanceComponent</a>
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
                                <a href="classes/AvatarCreatedEvent.html" data-type="entity-link" >AvatarCreatedEvent</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvatarScopesInput.html" data-type="entity-link" >AvatarScopesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvatarSkillsInput.html" data-type="entity-link" >AvatarSkillsInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAvatarCommand.html" data-type="entity-link" >CreateAvatarCommand</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAvatarCommandHandler.html" data-type="entity-link" >CreateAvatarCommandHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocalCreateAvatarRunner.html" data-type="entity-link" >LocalCreateAvatarRunner</a>
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
                                <a href="interfaces/Avatar.html" data-type="entity-link" >Avatar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AvatarAppearancesForm.html" data-type="entity-link" >AvatarAppearancesForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AvatarOverviewInput.html" data-type="entity-link" >AvatarOverviewInput</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateAvatarPayload.html" data-type="entity-link" >CreateAvatarPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormAppearance.html" data-type="entity-link" >FormAppearance</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Scope.html" data-type="entity-link" >Scope</a>
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