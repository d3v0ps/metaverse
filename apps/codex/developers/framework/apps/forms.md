---
id: forms
title: Forms
sidebar_label: Forms
slug: /framework/apps/forms
---

Forms are a powerful way to collect data from users. Right now we support Angular Reactive Forms.

```ts
export class CreateAvatarScene {

  createAvatarForm = new FormGroup<CreateAvatarInput, CreateAvatarValidation>(
    {
      name: new FormControl<string>(''),
      email: new FormControl<string>(''),
      avatar: new FormControl<string>(''),
    },
    CreateAvatarValidation.validate,
  );

}
```

