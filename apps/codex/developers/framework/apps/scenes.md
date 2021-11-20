---
id: scenes
title: Scenes
sidebar_label: Scenes
slug: /framework/apps/scenes
---

Scenes are the building blocks of your application. An Scene can represent a web page/application, a graphql query, a videogame level, a gherkin spec and more.

Currently we support two types of scenes:

## Angular Scenes

Angular Scenes are the default scene type. They are client-side scenes that are rendered using Angular v12.
Inside of them you can use Angular components or other kind of web components. Example:

```ts
@Component({
  selector: 'create-avatar',
  template: `
    <form>
      ...
    </form>
  `
})
export class CreateAvatarScene extends Scene<CreateAvatarAction> {

  scene$: Observable<CreateAvatarAction>;
  

  createAvatar() {
    this.store.dispatch(new CreateAvatarAction(this.scene.value));
  }

}
```

## NestJS Scenes

NestJS Scenes are server-side scenes that are served over the network with NestJS. Supported kind of scenes include RESTful APIs, GraphQL, and more.
You can learn more about it at [API definition](../api-definitions/async-api).


```gql
extend type Query {
  createAvatar: CreateAvatarScene
}

export type Mutations {
  createAvatar(input: CreateAvatarInput): CreateAvatarScene
}
```

