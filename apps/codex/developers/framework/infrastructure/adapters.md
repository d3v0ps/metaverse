---
id: infrastructure-adapters
title: Infrastructure Adapters
sidebar_label: Adapters
slug: /framework/infrastructure/adapters
---

A Persistence Adapter is a class that implements the Persistence API for an specific storage engine.

Example:

```ts
@PersistenceAdapter() // <-- Repository decorator
export class LocalForageAdapter extends PersistenceStorageAdapter {
  
  public async getItem<T>(key: string): Promise<T> {
    return await localforage.getItem<T>(key);
  }

  public async setItem<T>(key: string, value: T): Promise<void> {
    return await localforage.setItem<T>(key, value);
  }

  public async removeItem(key: string): Promise<void> {
    return await localforage.removeItem(key);
  }
}
``` 
