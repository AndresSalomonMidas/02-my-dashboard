'use client';

import { ReactNode } from 'react';
import { store } from '@/store';
import { Provider } from 'react-redux';

interface Props {
  children: ReactNode;
}
export const Providers = ({ children }: Props) => (
  <Provider store={store}>
    {children}
  </Provider>
);
