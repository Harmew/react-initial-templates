// Type: Theme
const theme = {
  colors: {
    primary: "#646cff",
    background: "#1a1a1a",
  },
} as const;

// Type: DefaultTheme
export default theme;
export type Theme = typeof theme;
