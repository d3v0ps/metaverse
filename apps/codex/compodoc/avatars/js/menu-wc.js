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
                                <a href="modules/AvatarAppearanceCardModule.html" data-type="entity-link" >AvatarAppearanceCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearanceCardModule-d568d65c25b2a2d8a8e800df1e7c54f0"' : 'data-target="#xs-components-links-module-AvatarAppearanceCardModule-d568d65c25b2a2d8a8e800df1e7c54f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearanceCardModule-d568d65c25b2a2d8a8e800df1e7c54f0"' :
                                            'id="xs-components-links-module-AvatarAppearanceCardModule-d568d65c25b2a2d8a8e800df1e7c54f0"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearanceCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearanceCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearanceEditorModule.html" data-type="entity-link" >AvatarAppearanceEditorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearanceEditorModule-8c4f3f7234657c4fc3e79e61dbf8b618"' : 'data-target="#xs-components-links-module-AvatarAppearanceEditorModule-8c4f3f7234657c4fc3e79e61dbf8b618"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearanceEditorModule-8c4f3f7234657c4fc3e79e61dbf8b618"' :
                                            'id="xs-components-links-module-AvatarAppearanceEditorModule-8c4f3f7234657c4fc3e79e61dbf8b618"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearanceEditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearanceEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvatarAppearanceInfoFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearanceInfoFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvatarAppearanceModelFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearanceModelFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvatarAppearancePortraitFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancePortraitFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearancePortraitModule.html" data-type="entity-link" >AvatarAppearancePortraitModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancePortraitModule-73109a5a7e4c4eb159746552941e835d"' : 'data-target="#xs-components-links-module-AvatarAppearancePortraitModule-73109a5a7e4c4eb159746552941e835d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancePortraitModule-73109a5a7e4c4eb159746552941e835d"' :
                                            'id="xs-components-links-module-AvatarAppearancePortraitModule-73109a5a7e4c4eb159746552941e835d"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearancePortraitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancePortraitComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearancePreviewAframeModule.html" data-type="entity-link" >AvatarAppearancePreviewAframeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancePreviewAframeModule-36e8b0239eaf93593fc6e82ff84339fd"' : 'data-target="#xs-components-links-module-AvatarAppearancePreviewAframeModule-36e8b0239eaf93593fc6e82ff84339fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancePreviewAframeModule-36e8b0239eaf93593fc6e82ff84339fd"' :
                                            'id="xs-components-links-module-AvatarAppearancePreviewAframeModule-36e8b0239eaf93593fc6e82ff84339fd"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearancePreviewAframeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancePreviewAframeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearancePreviewImageModule.html" data-type="entity-link" >AvatarAppearancePreviewImageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancePreviewImageModule-497fc2eb40a7c990f1f15fdd3ee46418"' : 'data-target="#xs-components-links-module-AvatarAppearancePreviewImageModule-497fc2eb40a7c990f1f15fdd3ee46418"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancePreviewImageModule-497fc2eb40a7c990f1f15fdd3ee46418"' :
                                            'id="xs-components-links-module-AvatarAppearancePreviewImageModule-497fc2eb40a7c990f1f15fdd3ee46418"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearancePreviewImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancePreviewImageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearancePreviewModelViewerModule.html" data-type="entity-link" >AvatarAppearancePreviewModelViewerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancePreviewModelViewerModule-69423511190cbeb970aad39589c1b2de"' : 'data-target="#xs-components-links-module-AvatarAppearancePreviewModelViewerModule-69423511190cbeb970aad39589c1b2de"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancePreviewModelViewerModule-69423511190cbeb970aad39589c1b2de"' :
                                            'id="xs-components-links-module-AvatarAppearancePreviewModelViewerModule-69423511190cbeb970aad39589c1b2de"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearancePreviewModelViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancePreviewModelViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearancePreviewModule.html" data-type="entity-link" >AvatarAppearancePreviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancePreviewModule-e0e37d5da52a9a6e8817c3643a7a9135"' : 'data-target="#xs-components-links-module-AvatarAppearancePreviewModule-e0e37d5da52a9a6e8817c3643a7a9135"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancePreviewModule-e0e37d5da52a9a6e8817c3643a7a9135"' :
                                            'id="xs-components-links-module-AvatarAppearancePreviewModule-e0e37d5da52a9a6e8817c3643a7a9135"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearancePreviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancePreviewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearancesCarouselModule.html" data-type="entity-link" >AvatarAppearancesCarouselModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancesCarouselModule-4fa75203a7b4181a5e645b15e2ab0442"' : 'data-target="#xs-components-links-module-AvatarAppearancesCarouselModule-4fa75203a7b4181a5e645b15e2ab0442"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancesCarouselModule-4fa75203a7b4181a5e645b15e2ab0442"' :
                                            'id="xs-components-links-module-AvatarAppearancesCarouselModule-4fa75203a7b4181a5e645b15e2ab0442"' }>
                                            <li class="link">
                                                <a href="components/AvatarAppearancesCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarAppearancesCarouselComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AvatarAppearancesModule.html" data-type="entity-link" >AvatarAppearancesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AvatarAppearancesModule-808a449a56aed74a8296cd689ef25628"' : 'data-target="#xs-components-links-module-AvatarAppearancesModule-808a449a56aed74a8296cd689ef25628"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarAppearancesModule-808a449a56aed74a8296cd689ef25628"' :
                                            'id="xs-components-links-module-AvatarAppearancesModule-808a449a56aed74a8296cd689ef25628"' }>
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
                                            'data-target="#components-links-module-AvatarOverviewModule-dcbb41da58fc7af08e783236545aae34"' : 'data-target="#xs-components-links-module-AvatarOverviewModule-dcbb41da58fc7af08e783236545aae34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarOverviewModule-dcbb41da58fc7af08e783236545aae34"' :
                                            'id="xs-components-links-module-AvatarOverviewModule-dcbb41da58fc7af08e783236545aae34"' }>
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
                                            'data-target="#components-links-module-AvatarsCarouselModule-78d2f735386839c8c9b6ad71ab1079f0"' : 'data-target="#xs-components-links-module-AvatarsCarouselModule-78d2f735386839c8c9b6ad71ab1079f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarsCarouselModule-78d2f735386839c8c9b6ad71ab1079f0"' :
                                            'id="xs-components-links-module-AvatarsCarouselModule-78d2f735386839c8c9b6ad71ab1079f0"' }>
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
                                            'data-target="#components-links-module-AvatarSkillsModule-1ec601dc0ac7b0a5b68b3c30b729aa57"' : 'data-target="#xs-components-links-module-AvatarSkillsModule-1ec601dc0ac7b0a5b68b3c30b729aa57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AvatarSkillsModule-1ec601dc0ac7b0a5b68b3c30b729aa57"' :
                                            'id="xs-components-links-module-AvatarSkillsModule-1ec601dc0ac7b0a5b68b3c30b729aa57"' }>
                                            <li class="link">
                                                <a href="components/AvatarSkillsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AvatarSkillsComponent</a>
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
                                <a href="classes/AvatarScopesInput.html" data-type="entity-link" >AvatarScopesInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/AvatarSkillsInput.html" data-type="entity-link" >AvatarSkillsInput</a>
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
                                    <a href="injectables/AvailableAvatarsState.html" data-type="entity-link" >AvailableAvatarsState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ManageAvatarAppearancesState.html" data-type="entity-link" >ManageAvatarAppearancesState</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectedAvatarState.html" data-type="entity-link" >SelectedAvatarState</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/IsAvatarSelectedGuard.html" data-type="entity-link" >IsAvatarSelectedGuard</a>
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
                                <a href="interfaces/Avatar.html" data-type="entity-link" >Avatar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AvatarOverviewInput.html" data-type="entity-link" >AvatarOverviewInput</a>
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