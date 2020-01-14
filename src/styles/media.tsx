export const breakpoints = {
  xs: 0,
  sm: 320,
  md: 768,
  lg: 1280,
  xl: 1600
};

export const device = {
  xs: `(min-width: 0rem)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`
};
