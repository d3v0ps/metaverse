import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  privateNet = this.generatePrivateServer('central-factory-private');

  publicNet = this.generatePublicServer('central-factory-public');

  constructor() {
    this.start();
  }

  async start() {
    console.log('starting network service');
  }

  private generatePrivateServer(name: string) {
    console.log(name);
  }

  private generatePublicServer(name: string) {
    console.log(name);
  }
}
