import { Avatar } from '../models';

export const generateAvatar = (): Avatar => {
  return {
    appearances: [],
    name: '',
    physics: [],
    skills: [],
    title: '',
    roles: [],
    routines: [],
    scopes: [],
    welcomeMessage: '',
    selectedAppearance: {
      src: '',
      smallPreviewUrl: '',
      format: '',
    },
  };
};
