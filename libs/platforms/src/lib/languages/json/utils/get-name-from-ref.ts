export const getNameFromRef = (ref: string) =>
  ref.split('#/definitions/').pop() || '';
