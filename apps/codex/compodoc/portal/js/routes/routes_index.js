var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"PortalModule","children":[{"name":"routes","filename":"apps/portal/src/app/portal-routing.module.ts","module":"PortalRoutingModule","children":[{"path":"","component":"PortalLayoutScene","children":[{"path":"login","loadChildren":"@central-factory/gatekeeper/scenes/login/login.module#LoginModule","canActivate":["IsNotDatabaseCreatedGuard"]},{"path":"select-avatar","loadChildren":"@central-factory/manage-avatars/scenes/select-avatar/select-avatar.module#SelectAvatarModule","canActivate":["IsDatabaseCreatedGuard"]},{"path":"create-avatar","loadChildren":"@central-factory/manage-avatars/scenes/create-avatar/create-avatar.module#CreateAvatarModule","canActivate":["IsDatabaseCreatedGuard"]},{"path":"selected-avatar","loadChildren":"@central-factory/manage-avatars/scenes/selected-avatar/selected-avatar.module#SelectedAvatarModule","canActivate":["IsDatabaseCreatedGuard","IsAvatarSelectedGuard"]},{"path":"start","loadChildren":"apps/player/src/app/scenes/start/start.module#StartModule","canActivate":["IsDatabaseCreatedGuard","IsAvatarSelectedGuard"]},{"path":"portals","loadChildren":"apps/player/src/app/scenes/portals/portals.module#PortalsModule","canActivate":["IsDatabaseCreatedGuard","IsAvatarSelectedGuard"]},{"path":"manage-applications","loadChildren":"@central-factory/player/scenes/manage-applications/manage-applications.module#ManageApplicationsModule","canActivate":["IsDatabaseCreatedGuard","IsAvatarSelectedGuard"]},{"path":"inventory","loadChildren":"@central-factory/inventory/scenes/inventory/inventory.module#InventoryModule","canActivate":["IsDatabaseCreatedGuard","IsAvatarSelectedGuard"]},{"path":"marketplace","loadChildren":"@central-factory/marketplace/scenes/marketplace/marketplace.module#MarketplaceModule","canActivate":["IsDatabaseCreatedGuard","IsAvatarSelectedGuard"]},{"path":"settings","loadChildren":"./settings/settings.module#SettingsModule","canActivate":["IsDatabaseCreatedGuard","IsAvatarSelectedGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"apps/portal/src/app/settings/settings-routing.module.ts","module":"SettingsRoutingModule","children":[{"path":"","component":"SettingsScene","children":[{"path":"customization","loadChildren":"./scenes/customization/customization.module#CustomizationModule","children":[{"kind":"module","children":[{"name":"routes","filename":"apps/portal/src/app/settings/scenes/customization/customization-routing.module.ts","module":"CustomizationRoutingModule","children":[{"path":"","component":"CustomizationScene"}],"kind":"module"}],"module":"CustomizationModule"}]},{"path":"credits","loadChildren":"./scenes/credits/credits.module#CreditsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"apps/portal/src/app/settings/scenes/credits/credits-routing.module.ts","module":"CreditsRoutingModule","children":[{"path":"","component":"CreditsScene"}],"kind":"module"}],"module":"CreditsModule"}]},{"path":"","redirectTo":"customization","pathMatch":"full"}]}],"kind":"module"}],"module":"SettingsModule"}]},{"path":"","redirectTo":"start","pathMatch":"full"}]}],"kind":"module"}]}