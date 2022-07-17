import { ENTITY_MANAGER_INITIAL_DATA_TOKEN } from '@central-factory/persistence/entity-manager';
import { USER_TOPIC_COLLECTION_NAME } from '@central-factory/topics/__generated__/collections/topic';
import { Priority, Topic } from '../../__generated__/models';

export const userTopics: Topic[] = [
  {
    id: 'morning.routine',
    priority: Priority.Low,
    icon: 'assets/icons/mdi/weather-sunny.svg',
    title: 'Morning Routine',
    background:
      'https://images.unsplash.com/photo-1415750465391-51ed29b1e610?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    themeColor: 'light',
    applications: [
      'com.ibm.weather',
      'com.feedly.feedly',
      'com.spotify.player',
      'com.google.calendar',
      'com.google.mail',
      'com.doist.todoist',
      'com.microsoft.github',
    ],
    shortcuts: [
      'com.ibm.weather#TodaysForecast',
      'com.feedly.feedly#NewsFeed',
      'com.spotify.player#PlayMusic',
      'com.google.calendar#Agenda',
      'com.doist.todoist#Today',
    ],
    categories: ['lifestyle', 'productivity', 'food', 'fitness', 'health'],
    triggers: [
      {
        name: 'Every morning',
        rules: {
          startTime: '06:00',
          endTime: '09:30',
        },
      },
    ],
  },
  {
    id: 'meal.time',
    priority: Priority.Medium,
    icon: 'assets/icons/mdi/silverware.svg',
    title: 'Meal Time',
    background:
      'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    themeColor: 'light',
    applications: [
      'com.fitbit.fitbit',
      'com.uber.eats',
      'com.glovo.glovo',
      'com.justeat.justeat',
      'com.burgerking.burgerking',
    ],
    shortcuts: [],
    categories: ['food', 'health'],
    triggers: [
      {
        name: 'Breakfast',
        rules: {
          startTime: '06:00',
          endTime: '8:00',
        },
      },
      {
        name: 'Coffee',
        rules: {
          startTime: '11:00',
          endTime: '12:00',
        },
      },
      {
        name: 'Lunch',
        rules: {
          startTime: '13:00',
          endTime: '14:00',
        },
      },
      {
        name: 'Tea',
        rules: {
          startTime: '17:00',
          endTime: '18:00',
        },
      },
      {
        name: 'Dinner',
        rules: {
          startTime: '21:00',
          endTime: '22:00',
        },
      },
    ],
  },
  {
    id: 'plan.day',
    priority: Priority.Low,
    icon: 'assets/icons/mdi/account-check.svg',
    title: 'Plan your day',
    background:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    applications: [
      'com.google.calendar',
      'com.google.mail',
      'com.google.keep',
      'com.doist.todoist',
      'com.mieconomista.contaauto',
    ],
    shortcuts: [
      'com.google.calendar#Agenda',
      'com.google.calendar#CreateEvent',
      'com.google.keep#CreateNote',
      'com.google.mail#Inbox',
      'com.google.mail#CreateEmail',
      'com.doist.todoist#CreateTask',
      'com.mieconomista.contaauto#CreateInvoice',
    ],
    categories: ['productivity', 'business'],
    triggers: [
      {
        name: 'Every morning',
        rules: {
          startTime: '09:00',
          endTime: '10:30',
        },
      },
    ],
  },
  {
    id: 'daily.meeting',
    priority: Priority.High,
    icon: 'assets/icons/mdi/video.svg',
    title: 'Daily Meeting',
    background:
      'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    applications: [
      'com.microsoft.outlook.office',
      'com.atlassian.jira',
      'com.microsoft.onenote',
      'com.microsoft.teams',
    ],
    shortcuts: [
      'com.microsoft.outlook.office#Agenda',
      'com.atlassian.jira#Board',
      'com.microsoft.onenote#CreateNote',
      'com.microsoft.vscode.insiders#Code',
    ],
    categories: ['productivity', 'business'],
    triggers: [
      {
        name: 'Every morning',
        rules: {
          startTime: '09:50',
          endTime: '10:30',
        },
      },
    ],
  },
  {
    id: 'work.matrix',
    priority: Priority.Medium,
    icon: 'assets/icons/mdi/account-network.svg',
    title: 'Work at The Matrix',
    background:
      'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
    applications: [
      'com.microsoft.teams',
      'com.slack.slack',
      'com.microsoft.outlook.office',
      'com.atlassian.jira',
      'com.microsoft.azure',
      'com.microsoft.onedrive',
      'com.microsoft.onenote',
      'com.atlassian.confluence',
    ],
    shortcuts: [
      'com.microsoft.outlook.office#Inbox',
      'com.microsoft.outlook.office#CreateEmail',
      'com.microsoft.outlook.office#Agenda',
      'com.microsoft.onedrive#UploadFile',
      'com.microsoft.onenote#CreateNote',
      'com.atlassian.jira#CreateIssue',
      'com.atlassian.jira#Board',
      'com.atlassian.confluence#CreateNote',
      'com.microsoft.vscode.insiders#Code',
    ],
    categories: ['productivity', 'business'],
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
    priority: Priority.Low,
    icon: 'assets/icons/mdi/account-network.svg',
    title: 'Coding Nights',
    background:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    themeColor: 'light',
    applications: [
      'com.google.search',
      'com.microsoft.github',
      'com.microsoft.npm',
      'com.central-factory.codex',
      'com.ivoox.player',
      'com.spotify.player',
      'com.google.youtube',
      'com.stackexchange.overflow',
      'com.templarian.materialdesignicons',
      'com.brandcolors.brandcolors',
      'com.simpleicons.simpleicons',
      'com.discord.discord',
    ],
    shortcuts: [
      'com.microsoft.vscode.insiders#Code',
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
          endTime: '09:00',
        },
      },
    ],
  },
  {
    id: 'gaming.night',
    priority: Priority.Low,
    icon: 'assets/icons/mdi/google-controller.svg',
    themeColor: 'light',
    background:
      'https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Gaming Night',
    applications: [
      'com.microsoft.xbox',
      'com.valve.steam',
      'com.nintendo.my',
      'com.discord.discord',
      'com.amazon.twitchtv',
      'com.google.youtube',
      'com.spotify.spotify',
    ],
    shortcuts: [
      'com.amazon.twitchtv#Following',
      'com.google.youtube#Subscriptions',
      'com.ign.ign#GamesMaps',
    ],
    categories: ['games'],
    media: [
      {
        type: 'image',
        title: 'Halo Infinite',
        src: 'https://store-images.s-microsoft.com/image/apps.56579.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.0dee39b3-efb2-4425-8f1f-087c111ff9b2?w=300&h=300',
        url: 'https://www.xbox.com/es-ES/play/games/halo-infinite-campa%C3%B1a/9NP1P1WFS0LB',
      },
      {
        type: 'image',
        title: 'Nobody Saves the World',
        src: 'https://store-images.s-microsoft.com/image/apps.53413.13585830814774327.d6e142bb-27e2-4109-8139-edac768eca10.bd597240-e065-42b4-a809-b42e4a7a9815?w=300&h=300',
        url: 'https://www.xbox.com/en-US/play/games/nobody-saves-the-world/9NFZ65KKJ10X',
      },
    ],
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
          endTime: '04:00',
        },
      },
    ],
  },
];

export const USER_TOPICS_INITIAL_DATA_PROVIDER = {
  provide: ENTITY_MANAGER_INITIAL_DATA_TOKEN,
  useValue: {
    name: USER_TOPIC_COLLECTION_NAME,
    upsert: true,
    data: userTopics,
  },
  multi: true,
};
