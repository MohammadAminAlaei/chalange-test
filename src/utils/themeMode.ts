import { PaletteMode } from '@mui/material';

export function getPrefersTheme(): PaletteMode {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}
