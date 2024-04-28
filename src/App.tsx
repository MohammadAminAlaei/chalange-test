import { Suspense, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import theme from 'setting/mui-theme';
import router from 'setting/router';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import ContentLoading from 'shared-components/loading/ContentLoading';
import { useAppSelector } from 'utils/hooks/redux';
import { htmlThemeMode } from 'utils/htmlLogicHandler';

import 'styles/main.css';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const userPreferences = useAppSelector(({ userPreferences }) => userPreferences);

  useEffect(() => {
    htmlThemeMode(userPreferences.themeMode);
  }, [userPreferences.themeMode]);

  return (
    <ThemeProvider theme={createTheme(theme(userPreferences.themeMode))}>
      <CacheProvider value={cacheRtl}>
        <Suspense fallback={<ContentLoading dynamicHeight />}>
          <RouterProvider router={router} />
        </Suspense>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default App;
