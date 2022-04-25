export const isLeftButton = (event: MouseEvent | TouchEvent): boolean => {
  if (event.type === 'touchstart') {
    return true;
  }
  return event.type === 'mousedown' && (event as MouseEvent).button === 0;
};
