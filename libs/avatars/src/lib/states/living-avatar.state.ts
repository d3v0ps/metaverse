export type Item<Kind = any> = any;
export type Eatable = any;

export type AvatarLivingState = {
  energy: number;
  mind: number;
  location?: {
    room?: {
      content?: {
        food?: Item<Eatable>[];
      };
    };
  };
  goals: {
    food: {
      found?: Item<Eatable>[];
      purchasable?: Item<Eatable>[];
      equipped?: Item<Eatable>[];
    };
  };
};
