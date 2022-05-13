import { Provider } from '@nestjs/common';
import { PubSub, PubSubOptions } from 'graphql-subscriptions';

export { PubSub, PubSubOptions } from 'graphql-subscriptions';

export const PUB_SUB_TOKEN = 'PUB_SUB_TOKEN';
export const PUB_SUB_OPTIONS_TOKEN = 'PUB_SUB_OPTIONS_TOKEN';

export const PUB_SUB_OPTIONS_PROVIDER: Provider<PubSubOptions | undefined> = {
  provide: PUB_SUB_OPTIONS_TOKEN,
  useValue: undefined,
};

export const PUB_SUB_PROVIDER: Provider<PubSub> = {
  provide: PUB_SUB_TOKEN,
  useFactory: (options) => new PubSub(options),
  inject: [PUB_SUB_OPTIONS_TOKEN],
};
