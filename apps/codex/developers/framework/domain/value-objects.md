---
id: value-objects
title: Value Objects
sidebar_label: Value Objects
slug: /framework/domain/value-objects
---

A Value Object is a simple object that represents a value.



Example:

```ts
export class UUIDValueObject {

  constructor(public readonly value: string) {}

  static create(value: string): UUIDValueObject {
    return new UUIDValueObject(value);
  }

  static generate(): UUIDValueObject {
    return new UUIDValueObject(uuid());
  }

  static validate(value: string): ValidationResult<UUIDValueObject> {
    return validateUUID(value);
  }

  toString(): string {
    return this.value;
  }

  toJSON(): string {
    return this.value;
  }
}
``` 
