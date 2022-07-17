import {
  Tag,
  TAGS_PROVIDER_INJECTION_TOKEN,
} from '@central-factory/persistence/repository';

const tags: Tag[] = [
  { name: 'society', icon: 'assets/icons/mdi/account-group.svg' },
  { name: 'psychology', icon: 'assets/icons/mdi/head-cog.svg' },
  { name: 'personalities', icon: 'assets/icons/mdi/drama-masks.svg' },
  { name: 'disorders', icon: 'assets/icons/mdi/emoticon-angry.svg' },
  { name: 'philosophy', icon: 'assets/icons/mdi/head-dots-horizontal.svg' },
  { name: 'sociology', icon: 'assets/icons/mdi/human-queue.svg' },
  { name: 'marketing', icon: 'assets/icons/mdi/shopping.svg' },
  { name: 'anthropology', icon: 'assets/icons/mdi/nature-people.svg' },
  { name: 'economics', icon: 'assets/icons/mdi/currency-usd.svg' },
  { name: 'systems', icon: 'assets/icons/mdi/state-machine.svg' },
  { name: 'fitness', icon: 'assets/icons/mdi/heart-pulse.svg' },
  { name: 'productivity', icon: 'assets/icons/mdi/reload.svg' },
  { name: 'desktop-setup', icon: 'assets/icons/mdi/desktop-tower-monitor.svg' },
  { name: 'diets', icon: 'assets/icons/mdi/food-fork-drink.svg' },
];

export const TAGS_PROVIDERS = tags.map((tag) => ({
  provide: TAGS_PROVIDER_INJECTION_TOKEN,
  useValue: tag,
  multi: true,
}));
