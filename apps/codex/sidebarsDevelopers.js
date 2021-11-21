module.exports = {
  developersSidebar: {
    'Developers': ['about-this'],
    'Framework': [
      'framework/oddd',
      {
        type: 'category',
        label: 'Domain',
        items: ['framework/domain/value-objects', 'framework/domain/domain-entity', 'framework/domain/domain-repository', 'framework/domain/use-cases']
      },
      {
        type: 'category',
        label: 'Infrastructure',
        items: ['framework/infrastructure/infrastructure-repository'],
      },
      {
        type: 'category',
        label: 'Apps',
        items: ['framework/apps/managing-dependencies', 'framework/apps/features', 'framework/apps/services', 'framework/apps/scenes', 'framework/apps/forms',  'framework/apps/commands', 'framework/apps/queries'],
      },
      {
        type: 'category',
        label: 'API Definitions',
        items: ['framework/api-definitions/async-api', 'framework/api-definitions/open-api', 'framework/api-definitions/graphql']
      },
      {
        type: 'category',
        label: 'Testing',
        items: ['framework/testing/bdd', 'framework/testing/webdriver', 'framework/testing/page-objects']
      }
    ],
    'Core': ['core/api-docs'],
    'Web Components': ['web-components/api-docs', 'web-components/components'],
    'Metaverse': ['brand-guidelines'],
    'Portal': ['portal/api-docs', 'portal/components'],
    'Gatekeeper': ['gatekeeper/identity', 'gatekeeper/agent', 'gatekeeper/api-docs'],
    'Avatars': [
      {
        type: 'category',
        label: 'Skills',
        items: ['avatars/skills/appearances', 'avatars/skills/plan', 'avatars/skills/calendar', 'avatars/skills/addresses', 'avatars/skills/assets', 'avatars/skills/subscriptions', 'avatars/skills/work', 'avatars/skills/rpg-stats', 'avatars/skills/jrpg-stats', 'avatars/skills/quest', ]
      },
      {
        type: 'category',
        label: 'Integrations',
        items: ['avatars/integrations/meta', 'avatars/integrations/microsoft', 'avatars/integrations/google'],
      }
    ],
  },
};
