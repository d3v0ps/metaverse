---
id: infrastructure-repository
title: Infrastructure Repository
sidebar_label: Infrastructure Repository
slug: /framework/infrastructure/repository
---

A Implementation Repository is a repository that contains the implementation of a framework.

- [Design the infrastructure persistence layer](https://docs.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/infrastructure-persistence-layer-design)

Example:

```ts
@Repository() // <-- Repository decorator
export class MyVideogameAvatarBackEndRepository implements MyVideogameAvatarRepository {

  public async get(id: string): Observable<MyVideogameAvatar> {
    return await this.repository.get(id);
  }

  public async save(avatar: MyVideogameAvatar): Observable<void> {
    return await this.repository.save(avatar);
  }
}
``` 
