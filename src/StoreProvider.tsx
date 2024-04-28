import { ReactNode } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'setting/store';

interface ConfigProvidersProps {
  children: ReactNode;
}

export default function ConfigProviders({ children }: ConfigProvidersProps) {
  return <StoreProvider store={store}>{children}</StoreProvider>;
}
