import '@material-ui/core';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

declare module '@material-ui/core/styles/props' {
  export type ComponentsProps = {
    Blala?: 'testHAHA';
  };
}
