import { PaletteMode } from '@mui/material';

export function setContainerFullWidth() {
  const body = document.body;
  body.style.padding = '24px 52px 62px';

  const root = document.getElementById('root')!;
  root.style.width = 'auto';
}

export function setContainerFixedWidth() {
  const body = document.body;
  body.style.padding = '24px 0px 62px';

  const root = document.getElementById('root')!;
  root.style.width = '1376px';
}

export function htmlThemeMode(mode: PaletteMode) {
  const html = document.getElementsByTagName('html')[0];
  const body = document.body;

  if (mode === 'dark') {
    html.classList.add('dark'); // for tailwind
    body.classList.add('dark'); // for custom dark mode style
  } else {
    html.classList.remove('dark');
    body.classList.remove('dark');
  }
}
