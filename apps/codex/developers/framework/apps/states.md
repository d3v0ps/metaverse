---
id: services
title: States
sidebar_label: States
slug: /framework/apps/states
---

States are different ways to interact with the framework.

```ts
export class SelectedAvatarState {

  avatar$: Observable<Avatar>;

  selectAvatar(avatar: Avatar);

  unseletAvatar();

}
```

