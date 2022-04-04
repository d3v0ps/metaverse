import { EventEmitter } from '@angular/core';

export type OnApplicationLoad = {
  applicationLoad: EventEmitter<void>;
};
