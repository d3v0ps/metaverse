import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  privateNet = this.generatePrivateServer('central-factory-private');

  publicNet = this.generatePublicServer('central-factory-public');

  constructor() {
    this.start();
  }

  async start() {}

  private generatePrivateServer(name: string) {}

  private generatePublicServer(name: string) {}
}
