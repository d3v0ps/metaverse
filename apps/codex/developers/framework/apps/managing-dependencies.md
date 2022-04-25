---
id: managing-dependencies
title: Managing Dependencies
sidebar_label: Managing Dependencies
slug: /framework/apps/managing-dependencies
---

This project uses [Nx](https://www.nx.dev/) to structure the monorepo. The structure is modularized into the following directories and sub-directories:

## apps

The `apps` directory is where you will store your application code. Current in development apps are: 

### Portal

The Portal app is a web application that provides a dashboard for users and developers to visualize everything in the metaverses available.

### Codex

The Codex app is the documentation center for the project. 

## libs

The `libs` directory is where you will store external dependencies. Almost all the core and domain spec files are located in this directory. 

Some of the libraries that are included in this project are:

### Framework

This lib includes decorators and classes for things like Commands, Events, Implementations, Interfaces, and more.

### Repositories

Repositories libs include implementations for the different kind of available connections to the metaverse.
Current in development are: OpenAPI, AsyncAPI and GraphQL.

### Domains

Domains modules include the domain logic for different models present in the metaverse.

The MVP of the project is to have some of the following domains:

- Avatars
- Marketplaces

Other planned domains are:

- Users (if needed)
- Messages
- Notifications
- Inventory
- Transactions
- Locations
- Assets
- Contracts
...
