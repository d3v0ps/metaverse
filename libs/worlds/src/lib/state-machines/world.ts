export enum GENESIS_STATES {
  INITIAL = 'initial',
  GEOGRAPHICAL = 'geographical',
  CULTURAL = 'cultural',
  POLITICAL = 'political',
  POPULATING = 'populating',
  DEMOGRAPHICAL = 'demographical',
}

export enum WORLD_EVENTS {
  SEED = 'seed',
  CULTURIZE = 'culturize',
  POLITIZE = 'politize',
  POPULATE = 'populate',
  POPULATE_FINISH = 'populate_finish',
  START = 'start',
}

export const genesisStates = {
  initial: GENESIS_STATES.INITIAL,
  states: {
    [GENESIS_STATES.INITIAL]: {
      on: {
        [WORLD_EVENTS.SEED]: { target: GENESIS_STATES.GEOGRAPHICAL },
      },
    },
    [GENESIS_STATES.GEOGRAPHICAL]: {
      on: {
        [WORLD_EVENTS.CULTURIZE]: { target: GENESIS_STATES.CULTURAL },
      },
    },
    [GENESIS_STATES.CULTURAL]: {
      on: {
        [WORLD_EVENTS.POLITIZE]: { target: GENESIS_STATES.POLITICAL },
      },
    },
    [GENESIS_STATES.POLITICAL]: {
      on: {
        [WORLD_EVENTS.POPULATE]: { target: GENESIS_STATES.POPULATING },
      },
    },
    [GENESIS_STATES.POPULATING]: {
      [WORLD_EVENTS.POPULATE_FINISH]: { target: GENESIS_STATES.DEMOGRAPHICAL },
    },
    [GENESIS_STATES.DEMOGRAPHICAL]: {},
  },
};

export enum WORLD_STATES {
  GENESIS = 'genesis',
  RUNNING = 'running',
}

export const worldStates = {
  initial: WORLD_STATES.GENESIS,
  states: {
    [WORLD_STATES.GENESIS]: {
      ...genesisStates,
    },
    [WORLD_STATES.RUNNING]: {},
    on: {
      [WORLD_EVENTS.START]: `${WORLD_STATES.RUNNING}`,
    },
  },
};
