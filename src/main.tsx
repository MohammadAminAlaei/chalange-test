import ReactDOM from 'react-dom/client';
import { lazy } from 'react';
import ConfigProviders from 'StoreProvider';

const App = lazy(() => import('App'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProviders>
    <App />
  </ConfigProviders>
);
