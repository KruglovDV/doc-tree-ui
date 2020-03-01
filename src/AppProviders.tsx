import * as React from 'react';
import { AuthProvider } from "./AuthProvider";

interface Props  {
  children: any;
}

const AppProviders: React.FC<Props> = ({ children  }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default  AppProviders;