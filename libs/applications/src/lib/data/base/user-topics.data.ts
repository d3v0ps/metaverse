import { Topic } from '@central-factory/applications/models/topic';
import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/services/entity-manager';

export const userTopics: Topic[] = [
  {
    id: 'morning.routine',
    icon: 'assets/icons/mdi/weather-sunny.svg',
    title: 'Morning Routine',
    applications: [
      'com.ibm.weather',
      'com.feedly.feedly',
      'com.spotify.player',
      'com.google.calendar',
      'com.google.mail',
      'com.microsoft.todo.live',
    ],
    triggers: [
      {
        name: 'Every morning',
        rules: {
          startTime: '06:00',
          endTime: '09:00',
        },
      },
    ],
  },
  {
    id: 'plan.day',
    icon: 'assets/icons/mdi/account-check.svg',
    title: 'Plan your day',
    applications: [
      'com.google.calendar',
      'com.google.mail',
      'com.microsoft.todo.live',
    ],
    triggers: [
      {
        name: 'Every morning',
        rules: {
          startTime: '09:00',
          endTime: '10:00',
        },
      },
    ],
  },
  {
    id: 'work.matrix',
    icon: 'assets/icons/mdi/account-network.svg',
    title: 'Work at The Matrix',
    applications: [
      'com.microsoft.teams',
      'com.microsoft.outlook.office',
      'com.microsoft.azure',
      'com.microsoft.onedrive',
      'com.microsoft.onenote',
      'com.slack.slack',
      'com.atlassian.jira',
      'com.atlassian.confluence',
    ],
    triggers: [
      {
        name: 'Every morning',
        rules: {
          startTime: '10:00',
          endTime: '14:00',
        },
      },
      {
        name: 'Every afternoon',
        rules: {
          startTime: '14:00',
          endTime: '18:00',
        },
      },
    ],
  },
  {
    id: 'coding.night',
    icon: 'assets/icons/mdi/account-network.svg',
    title: 'Coding Night',
    applications: [
      'com.microsoft.github',
      'com.spotify.player',
      'com.google.youtube',
      'com.stackexchange.overflow',
    ],
    shortcuts: [
      'com.microsoft.github#PullRequests',
      'com.google.youtube#Subscriptions',
      'com.spotify.player#Library',
    ],
    categories: ['devtools', 'productivity'],
    triggers: [
      {
        name: 'Every night',
        rules: {
          startTime: '18:00',
          endTime: '23:59',
        },
      },
      {
        name: 'Every morning',
        rules: {
          startTime: '00:00',
          endTime: '03:00',
        },
      },
    ],
  },
  {
    id: 'play.games',
    icon: 'assets/icons/mdi/google-controller.svg',
    title: 'Play Games',
    applications: ['com.microsoft.xbox', 'com.valve.steam', 'com.nintendo.my'],
    triggers: [
      {
        name: 'Every night',
        rules: {
          startTime: '18:00',
          endTime: '23:59',
        },
      },
      {
        name: 'Every morning',
        rules: {
          startTime: '00:00',
          endTime: '03:00',
        },
      },
    ],
  },
];

export const USER_TOPICS_INITIAL_DATA_PROVIDER = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: 'usertopics',
    upsert: true,
    data: userTopics,
  },
  multi: true,
};
