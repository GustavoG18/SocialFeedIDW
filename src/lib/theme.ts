const theme = {
  fonts: {
    main: "'Raleway', sans-serif",
  },
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
    primary: '#6424FF',
    secondary: '#06F48A'
  },
  sizeLetter: {
    title: {
      t1: '3.125rem',
      t2: '3rem',
      t3: '2.188rem',
      t4: '1.75rem',
    },
    text: {
      p1: '1.25rem',
      p2: '1.125rem',
      p3: '0.875rem',
      p4: '0.813rem',
      p5: '0.75rem'
    },
    button:{
      b1: '1.5rem',
      b2: '1rem',
    }
  },
  weight: {
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900',
  },
  lineHeight: {
    l1: '0.881rem',
    l2: '1.013rem',
    l3: '1.028rem',
    l4: '1.492rem',
    l5: '1.688rem',
    l6: '1.875rem',
    l7: '1.913rem',
    l8: '2.125rem',
    l9: '2.363rem',
    l10: '3.281rem',
    l11: '3.859rem',
    l12: '4.05rem',
  }
}

const getTheme = () => {
  return theme;
}

export type ColorTypes = keyof typeof theme.colors;
export type SizeTitleTypes = keyof typeof theme.sizeLetter.title;
export type SizeTextTypes = keyof typeof theme.sizeLetter.text;
export type SizeButtonTypes = keyof typeof theme.sizeLetter.button;
export type WeightTypes = keyof typeof theme.weight;
export type LineHeightTypes = keyof typeof theme.lineHeight;

export type ThemeState = ReturnType<typeof getTheme>;

export default theme;