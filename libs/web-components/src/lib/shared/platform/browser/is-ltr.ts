/**
 * Returns whether the page is in LTR mode. Defaults to `true` if it can't be computed.
 *
 * @return {boolean} Page's language direction is left-to-right.
 */
export const isLTR = (): boolean => {
  let dir = 'ltr';

  if (typeof window !== 'undefined') {
    if (window.getComputedStyle) {
      dir = window
        .getComputedStyle(document.body, null)
        .getPropertyValue('direction');
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dir = (document.body as any).currentStyle.direction;
    }
  }

  return dir === 'ltr';
};
