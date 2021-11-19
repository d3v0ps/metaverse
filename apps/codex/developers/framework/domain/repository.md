---
id: domain-repository
title: Domain Repository
sidebar_label: Domain Repository
slug: /framework/domain/repository
---

A Domain Repository is a repository that is used to store and retrieve domain objects. You can read more about this pattern in the following docs:

- [Design the infrastructure persistence layer](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design)

It's the abstraction layer over repository implementations.


Example:

```ts
export class MyVideogameAvatarRepository<MyVideogameAvatar> {

  public async get(id: string): Observable<MyVideogameAvatar> {}

  public async save(avatar: MyVideogameAvatar): Observable<void> {}
}
``` 
