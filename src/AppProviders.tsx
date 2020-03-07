import * as React from 'react';
import { Provider } from 'react-redux';
import AuthProvider from "./AuthProvider";
import store from './store';

interface Props  {
  children: any;
}

const AppProviders: React.FC<Props> = ({ children  }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        {children}
      </AuthProvider>
    </Provider>
  );
};

export default  AppProviders;