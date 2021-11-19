---
id: domain-entity
title: Domain Entity
sidebar_label: Domain Entity
slug: /framework/domain/entity
---

A Domain Entity is a domain object that is persisted in a database.
You can read more about this pattern in the following docs:

- [Understanding Domain Entities](https://khalilstemmler.com/articles/typescript-domain-driven-design/entities/)


Example:

```ts
export class MyVideogameAvatar extends Avatar<MyVideogameStylesheet, MyVideogamePhysics> {
  id: UUIDValueObject();
  name: string;
  avatarUrl: string;
}
``` 
