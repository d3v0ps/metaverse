
import { DesignStyle } from '../models/design-style';

export const dungeonsDesignStyle: DesignStyle = {
  id: 'dungeons',
  name: 'Role-playing Stats',
  url: 'https://www.npmjs.com/package/avataaars',
  description: 'A basic set of role-playing stats',
  license: {
    type: 'MIT',
  },
  properties: [
    {
      id: 'level',
      label: 'Level',
      type: 'number',
      defaultValue: 1,
    },
  ],
};
