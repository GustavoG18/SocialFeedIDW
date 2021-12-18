const theme = {
  fonts: {
    main: 'Taviraj, serif',
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
    primary: '#6424FF',
  }
}

const getTheme = () => {
  return theme;
}

export type ColorTypes = keyof typeof theme.colors;

export type ThemeState = ReturnType<typeof getTheme>;

export default theme;