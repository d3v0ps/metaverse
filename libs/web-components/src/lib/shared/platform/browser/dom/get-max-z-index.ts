export const getMaxZIndex = (selectors: string = 'body *') => {
  return (
    Array.from(document.querySelectorAll(selectors))
      .map((a) => parseFloat(window.getComputedStyle(a).zIndex))
      .filter((a) => !isNaN(a))
      .sort((a, b) => a - b)
      .pop() || 0
  );
};
