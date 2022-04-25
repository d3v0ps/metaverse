export const findAncestor = (el: any, selectors: any) => {
  if (typeof el.closest === 'function') {
    return el.closest(selectors) || null;
  }
  while (el) {
    if (el.matches(selectors)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
};
